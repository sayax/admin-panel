import { Injectable, inject } from '@angular/core';
import { Firestore, Timestamp, collection, doc, getDoc, getDocs, query, setDoc, updateDoc, where } from '@angular/fire/firestore';
import { Observable, from, map, switchMap } from 'rxjs';
import { Teacher, TeacherDTO } from '../model/teacher';
import { Collection } from '../model/collections';
import { UserApiService } from './user-api.service';

@Injectable({
  providedIn: 'root',
})
export class TeacherApiService {
  private firestore: Firestore = inject(Firestore);
  private teacherCollection = collection(this.firestore, Collection.TEACHER);
  private userApiService = inject(UserApiService);

  getTeachers(): Observable<TeacherDTO[]> {
    const teacherQuery = query(this.teacherCollection, where('is_active', '==', true));
    const teacherSnapshot = from(getDocs(teacherQuery));
    return teacherSnapshot.pipe(
      switchMap(data => {
        const teacherData = data.docs.map(doc => doc.data() as Teacher);
        const teacherObject: {[key: string]: Teacher} = teacherData.reduce((prev, current) => ({
          ...prev,
          [current.uid]: current,
        }), {});
        const user_uids = teacherData.map(doc => doc.uid);
        return this.userApiService.getUsersInList(user_uids).pipe(
          map(users => {
            return users.map(user => {
              const consolidated: TeacherDTO = {
                uid: teacherObject[user.uid].uid,
                phone: user.phone,
                email: user.email,
                first_name: user.first_name,
                middle_name: user.middle_name,
                last_name: user.last_name,
                avatar_url: user.avatar_urls ? user.avatar_urls[0] : '',
                start_date: teacherObject[user.uid].start_date,
                styles: teacherObject[user.uid].styles,
                level: teacherObject[user.uid].level,
              };
              return consolidated;
            })
          })
        )
      })
    )
  }

  getTeacher(uid: string): Observable<TeacherDTO> {
    const ref = doc(this.teacherCollection, uid);
    return from(getDoc(ref)).pipe(
      map(data => data.data() as Teacher),
      switchMap(teacher => {
        return this.userApiService.getUser(teacher.uid).pipe(
          map(user => ({
            uid: teacher.uid,
            phone: user.phone,
            email: user.email,
            first_name: user.first_name,
            middle_name: user.middle_name,
            last_name: user.last_name,
            avatar_url: user.avatar_urls[0],
            start_date: teacher.start_date,
            styles: teacher.styles,
            level: teacher.level,
          }))
        )
      })
    )
  }

  addTeacher(teacher: Partial<Teacher>): Observable<void> {
    const ref = doc(this.teacherCollection, teacher.uid);
    return from(getDoc(ref)).pipe(
      switchMap(doc => {
        teacher.updated_on = Timestamp.now();
        teacher.start_date = Timestamp.now();
        if (doc.exists()) {
          return from(updateDoc(ref, teacher))
        }
        teacher.created_on = Timestamp.now();
        return from(setDoc(ref, teacher))
      }),
      switchMap(() => this.userApiService.updateUser({
        uid: teacher.uid,
        is_teacher: true,
      })),
    )
  }

  removeTeacher(teacher: Partial<Teacher>): Observable<void> {
    const ref = doc(this.teacherCollection, teacher.uid);
    teacher.updated_on = Timestamp.now();
    teacher.end_date = Timestamp.now();
    return from(updateDoc(ref, {
      uid: teacher.uid,
      is_active: false,
      updated_on: teacher.updated_on,
      end_date: teacher.end_date,
    })).pipe(
      switchMap(() => this.userApiService.updateUser({
        uid: teacher.uid,
        is_teacher: false,
      })),
    );
  }
}

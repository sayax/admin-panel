import { Injectable, inject } from '@angular/core';
import { Firestore, collection, getDocs, query, where } from '@angular/fire/firestore';
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
          [current.profile_uid]: current,
        }), {});
        const user_uids = teacherData.map(doc => doc.profile_uid);
        return this.userApiService.getUsersInList(user_uids).pipe(
          map(users => {
            return users.map(user => {
              return {
                uid: teacherObject[user.uid].uid,
                phone: user.phone,
                email: user.email,
                first_name: user.first_name,
                middle_name: user.middle_name,
                last_name: user.last_name,
                avatar_url: user.avatar_urls[0],
                start_date: teacherObject[user.uid].start_date,
                styles: teacherObject[user.uid].styles,
              }
            })
          })
        )
      })
    )
  }
}

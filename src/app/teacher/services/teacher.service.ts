import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileDTO } from 'src/app/backend/model/profile';
import { Teacher, TeacherDTO } from 'src/app/backend/model/teacher';
import { TeacherApiService } from 'src/app/backend/services/teacher-api.service';
import { UserApiService } from 'src/app/backend/services/user-api.service';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  private teacherApiService = inject(TeacherApiService);
  private userApiService = inject(UserApiService);

  getList(): Observable<TeacherDTO[]> {
    return this.teacherApiService.getTeachers();
  }

  getUsers(): Observable<ProfileDTO[]> {
    return this.userApiService.getUsersNotTeachers();
  }

  addTeacher(teacher: Partial<Teacher>): Observable<void> {
    return this.teacherApiService.addTeacher(teacher);
  }

  removeTeacher(teacher: Partial<Teacher>): Observable<void> {
    return this.teacherApiService.removeTeacher(teacher);
  }
}

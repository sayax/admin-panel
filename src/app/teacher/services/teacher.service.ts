import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { TeacherDTO } from 'src/app/backend/model/teacher';
import { TeacherApiService } from 'src/app/backend/services/teacher-api.service';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  private teacherApiService = inject(TeacherApiService);

  getList(): Observable<TeacherDTO[]> {
    return this.teacherApiService.getTeachers();
  }
}

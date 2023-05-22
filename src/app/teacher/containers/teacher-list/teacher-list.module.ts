import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherListComponent } from './teacher-list.component';
import { RouterModule } from '@angular/router';
import { NbCardModule, NbListModule, NbUserModule } from '@nebular/theme';



@NgModule({
  declarations: [
    TeacherListComponent
  ],
  imports: [
    CommonModule,
    NbListModule,
    NbCardModule,
    NbUserModule,
    RouterModule.forChild([
      {
        path: '',
        component: TeacherListComponent,
        data: {
          title: 'Список преподавателей',
        }
      },
    ]),
  ]
})
export class TeacherListModule { }

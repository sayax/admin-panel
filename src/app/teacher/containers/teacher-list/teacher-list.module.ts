import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherListComponent } from './teacher-list.component';
import { RouterModule } from '@angular/router';
import { NbCardModule, NbListModule, NbUserModule } from '@nebular/theme';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    TeacherListComponent
  ],
  imports: [
    CommonModule,
    NbListModule,
    NbCardModule,
    NbUserModule,
    SharedModule,
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

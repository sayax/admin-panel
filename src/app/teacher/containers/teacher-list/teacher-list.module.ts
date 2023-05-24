import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherListComponent } from './teacher-list.component';
import { RouterModule } from '@angular/router';
import { NbButtonModule, NbCardModule, NbDialogModule, NbIconModule, NbInputModule, NbListModule, NbSelectModule, NbTooltipModule, NbUserModule } from '@nebular/theme';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TeacherListComponent
  ],
  imports: [
    CommonModule,
    NbListModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbSelectModule,
    NbInputModule,
    NbIconModule,
    NbTooltipModule,
    ReactiveFormsModule,
    NbDialogModule.forChild(),
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: TeacherListComponent,
        data: {
          title: 'Преподаватели',
        }
      },
    ]),
  ]
})
export class TeacherListModule { }

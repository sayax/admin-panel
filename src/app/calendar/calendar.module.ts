import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './containers/calendar/calendar.component';
import { RouterModule } from '@angular/router';
import { CalendarModule } from 'angular-calendar';
import { NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule, NbLayoutModule, NbListModule, NbSelectModule } from '@nebular/theme';
import { CalendarHeaderComponent } from './components/calendar-header/calendar-header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CalendarComponent,
    CalendarHeaderComponent,
  ],
  imports: [
    CommonModule,
    CalendarModule,
    NbLayoutModule,
    NbCardModule,
    NbButtonModule,
    NbSelectModule,
    NbIconModule,
    NbListModule,
    NbIconModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: CalendarComponent,
        data: {
          title: 'Расписание',
        }
      },
    ]),
  ]
})
export class AppCalendarModule { }

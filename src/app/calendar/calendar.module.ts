import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './containers/calendar/calendar.component';
import { RouterModule } from '@angular/router';
import { CalendarModule } from 'angular-calendar';
import { NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule, NbListModule, NbSelectModule } from '@nebular/theme';
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
    NbCardModule,
    NbButtonModule,
    NbSelectModule,
    NbCheckboxModule,
    NbIconModule,
    NbInputModule,
    NbListModule,
    NbDatepickerModule,
    ReactiveFormsModule,
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

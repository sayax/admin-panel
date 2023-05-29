import { Component, HostListener, OnInit, TemplateRef, inject } from '@angular/core';
import { CalendarDateFormatter, CalendarEvent, CalendarEventTitleFormatter, CalendarView } from 'angular-calendar';
import { CalendarService } from '../../services/calendar.service';
import { CustomEventTitleFormatter, DateFormatterService } from '../../services/date-formatter.service';
import { Observable } from 'rxjs';
import { NbDialogRef, NbDialogService, NbToastrService } from '@nebular/theme';
import { isSameDay, isSameMonth } from 'date-fns';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: DateFormatterService,
    },
    {
      provide: CalendarEventTitleFormatter,
      useClass: CustomEventTitleFormatter,
    },
  ]
})
export class CalendarComponent implements OnInit {
  private calendarService = inject(CalendarService);
  private dialogService = inject(NbDialogService);
  private toastr = inject(NbToastrService);
  private router = inject(Router);

  private ref!: NbDialogRef<any>;
  loading = false;
  activeDayIsOpen = true;

  CalendarView = CalendarView;
  calendarViewOptions = Object.values(CalendarView);

  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;

  events$!: Observable<CalendarEvent[]>;
  selectedEvent!: CalendarEvent;


  @HostListener('window:resize', ['$event']) calculateRows() {
    if (window.innerWidth < 768) {
      this.view = CalendarView.Day;
    }
  }

  ngOnInit(): void {
    this.calculateRows();
    this.getData();
  }

  getData() {
    this.events$ = this.calendarService.getEvents();
  }

  selectView(event: CalendarView) {
    this.view = event;
  }

  openDialog(dialog: TemplateRef<any>, context?: any) {
    this.ref = this.dialogService.open(dialog, {
      context,
    });
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  entry(uid: string) {
    this.loading = true;
    this.calendarService.updateEnrolledParticipants(uid).subscribe({
      complete: () => {
        this.toastr.show('Спасибо что записались', 'Данные сохранены', { status: 'success' });
        this.loading = false;
        this.ref.close();
        this.getData();
      },
      error: (error) => {
        this.toastr.show(error?.message, 'Произошла ошибка', { status: 'danger' });
        console.log('error', error);
        this.loading = false;
      },
    })
  }

  removeEntry(uid: string) {
    this.loading = true;
    this.calendarService.removeEnrolledParticipants(uid).subscribe({
      complete: () => {
        this.toastr.show('Вы убрали запись', 'Данные сохранены', { status: 'success' });
        this.loading = false;
        this.ref.close();
        this.getData();
      },
      error: (error) => {
        this.toastr.show(error?.message, 'Произошла ошибка', { status: 'danger' });
        console.log('error', error);
        this.loading = false;
      },
    })
  }

  navigate(id: string) {
    this.ref.close();
    this.router.navigate(['event', id]);
  }
}

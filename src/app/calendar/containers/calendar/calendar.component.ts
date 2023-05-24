import { Component, OnInit, TemplateRef, inject } from '@angular/core';
import { CalendarDateFormatter, CalendarEvent, CalendarEventAction, CalendarEventTitleFormatter, CalendarView } from 'angular-calendar';
import { CalendarService } from '../../services/calendar.service';
import { CustomEventTitleFormatter, DateFormatterService } from '../../services/date-formatter.service';
import { Observable, map } from 'rxjs';
import { NbDialogRef, NbDialogService, NbToastrService } from '@nebular/theme';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { colors } from '../../utils/colors';
import { isSameDay, isSameMonth } from 'date-fns';
import { TeacherService } from 'src/app/teacher/services/teacher.service';
import { TeacherDTO } from 'src/app/backend/model/teacher';

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
  private teacherService = inject(TeacherService);
  private dialogService = inject(NbDialogService);
  private toastr = inject(NbToastrService);
  private formBuilder = inject(FormBuilder);

  private ref!: NbDialogRef<any>;
  loading = false;
  activeDayIsOpen = true;

  CalendarView = CalendarView;
  calendarViewOptions = Object.values(CalendarView);

  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  actions: CalendarEventAction[] = [
    {
      label: 'Удалить',
      a11yLabel: 'Удалить',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.deleteEvent(event);
      },
    },
  ];
  colorOptions = Object.keys(colors);

  form: FormGroup = this.formBuilder.group({
    uid: [''],
    allDay: [false],
    colors: ['', Validators.required],
    start_date: ['', Validators.required],
    end_date: [''],
    meta: this.formBuilder.group({
      type: ['info'],
    }),
    title: ['', Validators.required],
    teacher_uids: [[], Validators.required],
    is_active: [true, Validators.required],
  })

  events$!: Observable<CalendarEvent[]>;
  users$!: Observable<TeacherDTO[]>;
  selectedEvent!: CalendarEvent;

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.events$ = this.calendarService.getEvents().pipe(
      map(events => events.map(event => ({ ...event, actions: this.actions })))
    );
    this.users$ = this.teacherService.getList();
  }

  deleteEvent(event: CalendarEvent) {
    this.calendarService.removeEvent({ uid: `${event.id}` }).subscribe(() => {
      this.toastr.show('Событие удалено', 'Данные сохранены', { status: 'success' });
      this.getData();
    });
  }

  selectView(event: CalendarView) {
    this.view = event;
  }

  openDialog(dialog: TemplateRef<any>, context?: any) {
    this.ref = this.dialogService.open(dialog, {
      context,
    });
  }

  addEvent(form: FormGroup) {
    this.calendarService.addEvent(form.value).subscribe({
      complete: () => {
        this.toastr.show('Событие добавлено', 'Данные сохранены', { status: 'success' });
        this.loading = false;
        this.ref.close();
        this.getData();
      },
      error: (error) => {
        this.toastr.show(error?.message, 'Произошла ошибка', { status: 'error' });
        console.log('error', error);
        this.loading = false;
      },
    })
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
}

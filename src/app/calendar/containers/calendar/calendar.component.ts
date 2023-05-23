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
      label: 'Edit',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      },
    },
    {
      label: 'Delete',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Deleted', event);
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

  handleEvent(type: string, event: CalendarEvent) {
    console.log(type, event);
  }

  selectView(event: CalendarView) {
    this.view = event;
  }

  openDialog(dialog: TemplateRef<any>) {
    this.ref = this.dialogService.open(dialog);
  }

  openShowInfo(dialog: TemplateRef<any>, event: CalendarEvent) {
    this.openDialog(dialog);
    this.selectedEvent = event;
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

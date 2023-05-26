import { ChangeDetectionStrategy, Component, inject, ChangeDetectorRef, HostListener, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { colors } from 'src/app/calendar/utils/colors';
import { DAY } from '../../utils/event';
import { ICalendarEvent, IEventSchedule } from 'src/app/backend/model/event';
import { EventService } from '../../services/event.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap, tap } from 'rxjs';
import { TeacherService } from 'src/app/teacher/services/teacher.service';
import { NbDialogRef, NbDialogService, NbToastrService } from '@nebular/theme';
import { Timestamp } from '@angular/fire/firestore';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventEditComponent {
  private formBuilder = inject(FormBuilder);
  private eventService = inject(EventService);
  private route = inject(ActivatedRoute);
  private cdr = inject(ChangeDetectorRef);
  private teacherService = inject(TeacherService);
  private toastr = inject(NbToastrService);
  private dialogService = inject(NbDialogService);
  loading = false;

  event$!: Observable<ICalendarEvent>;
  eventSchedules$!: Observable<IEventSchedule[]>;
  users$ = this.teacherService.getList();

  form: FormGroup = this.formBuilder.group({
    uid: ['', Validators.required],
    colors: ['', Validators.required],
    start_date: [{ value: '', disabled: true }, Validators.required],
    end_date: [{ value: '', disabled: true }, Validators.required],
    meta: this.formBuilder.group({
      type: ['info'],
    }),
    title: ['', Validators.required],
    teacher_uids: [[], Validators.required],
    is_active: [false, Validators.required],
  });

  scheduleForm: FormGroup = this.formBuilder.group({
    uid: ['', Validators.required],
    start_date: ['', Validators.required],
    end_date: ['', Validators.required],
    days: [[], Validators.required],
  });

  colorOptions = Object.keys(colors);
  dayOptions = Object.entries(DAY).map(([value, title]) => ({ value, title }));
  isMobile = false;
  today!: number[];
  private ref!: NbDialogRef<any>;

  @HostListener('window:resize', ['$event']) calculateRows() {
    this.isMobile = window.innerWidth < 768;
    this.cdr.markForCheck();
  }

  ngOnInit(): void {
    this.calculateRows();
    this.getData();
    const start_date = new Date();
    const end_date = new Date();
    start_date.setHours(0, 0, 0);
    end_date.setHours(23, 59, 59);
    this.today = [start_date.getTime(), end_date.getTime()];
    console.log(this.today)
    this.cdr.markForCheck();
  }

  getData() {
    this.event$ = this.route.paramMap.pipe(
      switchMap((paramMap: ParamMap) => this.eventService.getEvent(paramMap.get('id') ?? '')),
      tap(event => {
        this.form.patchValue({
          ...event,
          days: [...event.days.map(day => day.toString())],
          start_date: new Date(event.start_date.toMillis()),
          end_date: new Date(event.end_date.toMillis()),
        });
      })
    );
    this.eventSchedules$ = this.route.paramMap.pipe(
      switchMap((paramMap: ParamMap) => this.eventService.getEventSchedules(paramMap.get('id') ?? '')),
      tap(schedules => {
        console.log(schedules);
      })
    );
  }

  openDialog(dialog: TemplateRef<any>, context?: any) {
    this.ref = this.dialogService.open(dialog, {
      context,
    });
  }

  saveEvent(form: FormGroup) {
    this.loading = true;
    this.eventService.updateEvent(form.value).subscribe({
      next: () => {
        this.toastr.show('Событие обновлено', 'Данные сохранены', { status: 'success' });
        this.loading = false;
        this.cdr.markForCheck();
        this.getData();
      },
      error: (error) => {
        this.toastr.show(error?.message, 'Произошла ошибка', { status: 'error' });
        console.log('error', error);
        this.loading = false;
        this.cdr.markForCheck();
      },
    })
  }

  updateScheduleStatus(eventUID: string, schedule: Partial<IEventSchedule>, is_active: boolean) {
    this.loading = true;
    this.eventService.updateEventSchedule(eventUID, { uid: schedule.uid, is_active }).subscribe({
      next: () => {
        this.toastr.show('Расписание обновлено', 'Данные сохранены', { status: 'success' });
        this.loading = false;
        this.cdr.markForCheck();
        this.getData();
      },
      error: (error) => {
        this.toastr.show(error?.message, 'Произошла ошибка', { status: 'error' });
        console.log('error', error);
        this.loading = false;
        this.cdr.markForCheck();
      },
    })
  }

  addSchedule(eventUID: string, form: FormGroup) {
    this.loading = true;
    this.eventService.addEventSchedules(eventUID, {
      start_date: Timestamp.fromDate(form.value.start_date),
      end_date: Timestamp.fromDate(form.value.end_date),
      days: form.value.days.map((day: string) => +day),
    }).subscribe({
      next: () => {
        this.toastr.show('Расписание обновлено', 'Данные сохранены', { status: 'success' });
        this.loading = false;
        this.cdr.markForCheck();
        this.ref.close();
        this.getData();
      },
      error: (error) => {
        this.toastr.show(error?.message, 'Произошла ошибка', { status: 'error' });
        console.log('error', error);
        this.loading = false;
        this.cdr.markForCheck();
      },
    })
  }
}

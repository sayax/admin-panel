import { Component, inject, TemplateRef, HostListener } from '@angular/core';
import { Timestamp } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef, NbDialogService, NbNativeDateService, NbToastrService } from '@nebular/theme';
import { Observable } from 'rxjs';
import { colors } from 'src/app/calendar/utils/colors';
import { TeacherService } from 'src/app/teacher/services/teacher.service';
import { EventService } from '../../services/event.service';
import { ICalendarEvent } from 'src/app/backend/model/event';
import { DAY } from '../../utils/event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent {
  private formBuilder = inject(FormBuilder);
  private dialogService = inject(NbDialogService);
  private teacherService = inject(TeacherService);
  private eventService = inject(EventService);
  private toastr = inject(NbToastrService);

  events$!: Observable<ICalendarEvent[]>;
  users$ = this.teacherService.getList();

  private ref!: NbDialogRef<any>;
  form: FormGroup = this.formBuilder.group({
    uid: [''],
    colors: ['', Validators.required],
    start_date: ['', Validators.required],
    end_date: ['', Validators.required],
    days: [[]],
    meta: this.formBuilder.group({
      type: ['info'],
    }),
    title: ['', Validators.required],
    teacher_uids: [[], Validators.required],
    is_active: [true, Validators.required],
  })
  loading = false;
  colorOptions = Object.keys(colors);
  dayOptions = Object.entries(DAY).map(([value, title]) => ({ value, title }));

  isMobile = false;
  @HostListener('window:resize', ['$event']) calculateRows() {
    this.isMobile = window.innerWidth < 768;
  }

  ngOnInit(): void {
    this.calculateRows();
    this.getData();
  }

  getData() {
    this.events$ = this.eventService.getEvents();
  }

  openDialog(dialog: TemplateRef<any>, context?: any) {
    this.ref = this.dialogService.open(dialog, {
      context,
    });
  }

  addEvent(form: FormGroup) {
    const start = new Date(form.value.start_date);
    const end = new Date(form.value.end_date);
    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      this.toastr.show('Неверный формат даты', 'Произошла ошибка', { status: 'danger' });
      return;
    }
    form.value.start_date = Timestamp.fromDate(start);
    form.value.end_date = Timestamp.fromDate(end);
    form.value.days = form.value.days.map((day: string) => +day);
    this.eventService.addEvent(form.value).subscribe({
      complete: () => {
        this.toastr.show('Событие добавлено', 'Данные сохранены', { status: 'success' });
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

  deleteEvent(event: ICalendarEvent) {
    this.eventService.removeEvent({ uid: event.uid }).subscribe(() => {
      this.toastr.show('Событие удалено', 'Данные сохранены', { status: 'success' });
      this.getData();
    });
  }
}

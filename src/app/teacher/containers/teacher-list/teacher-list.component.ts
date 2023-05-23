import { ChangeDetectionStrategy, ChangeDetectorRef, Component, TemplateRef, inject, OnInit } from '@angular/core';
import { TeacherService } from '../../services/teacher.service';
import { NbDialogRef, NbDialogService, NbToastrService } from '@nebular/theme';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { DanceLevel, DanceStyle, Teacher, TeacherDTO } from 'src/app/backend/model/teacher';
import { ProfileDTO } from 'src/app/backend/model/profile';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeacherListComponent implements OnInit {
  private teacherService = inject(TeacherService);
  private dialogService = inject(NbDialogService);
  private formBuilder = inject(FormBuilder);
  private toastr = inject(NbToastrService);
  private cdr = inject(ChangeDetectorRef);
  loading = false;

  styles = [
    {
      value: DanceStyle.kizomba,
      title: 'Кизомба',
    },
    {
      value: DanceStyle.salsa,
      title: 'Сальса',
    },
    {
      value: DanceStyle.bachata,
      title: 'Бачата',
    },
  ]

  levels = [
    {
      value: DanceLevel.beginner,
      title: 'Начинающий',
    },
    {
      value: DanceLevel.intermediate,
      title: 'Средний',
    },
    {
      value: DanceLevel.advanced,
      title: 'Высокий',
    },
    {
      value: DanceLevel.pro,
      title: 'Профи',
    },
  ]

  list$!: Observable<TeacherDTO[]>;
  users$!: Observable<ProfileDTO[]>;
  private ref!: NbDialogRef<any>;

  form: FormGroup = this.formBuilder.group({
    uid: [null, Validators.required],
    is_active: [true],
    styles: [null],
    level: ['', Validators.required],
  })

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.list$ = this.teacherService.getList();
    this.users$ = this.teacherService.getUsers();
  }

  openDialog(dialog: TemplateRef<any>) {
    this.ref = this.dialogService.open(dialog);
  }

  addTeacher(form: FormGroup) {
    this.teacherService.addTeacher(form.value).subscribe({

      complete: () => {
        this.toastr.show('Преподаватель добавлен', 'Данные сохранены', { status: 'success' });
        this.loading = false;
        this.ref.close();
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

  removeTeacher(teacher: TeacherDTO) {
    this.teacherService.removeTeacher({
      uid: teacher.uid,
    }).subscribe({
      complete: () => {
        this.toastr.show('Преподаватель удален', 'Данные сохранены', { status: 'success' });
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
}

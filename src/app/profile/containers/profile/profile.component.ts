import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbAuthService } from '@nebular/auth';
import { switchMap, tap, Observable, forkJoin, Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ProfileService } from '../../services/profile.service';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
  private nbAuthService = inject(NbAuthService);
  private authService = inject(AuthService);
  private profileService = inject(ProfileService);
  private toastr = inject(NbToastrService);
  private formBuilder = inject(FormBuilder);
  private cdr = inject(ChangeDetectorRef);
  loading = false;

  form: FormGroup = this.formBuilder.group({
    uid: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    first_name: ['', Validators.required],
    middle_name: [''],
    last_name: ['', Validators.required],
    gender: ['', Validators.required],
    description: [''],
    address: ['', Validators.required],
    is_teacher: [{ value: false, disabled: true }],
    is_student: [{ value: false, disabled: true }],
    is_blocked: [{ value: false, disabled: true }],
    avatar_urls: [[]],
  });
  user$ = this.nbAuthService.getToken().pipe(
    switchMap(user => {
      this.form.patchValue({
        uid: user.getPayload().user_id,
      });
      return this.authService.getUser(user.getPayload().user_id);
    }),
    tap((user) => {
      console.log(user);
      this.form.patchValue(user);
      console.log(this.form.getRawValue())
    })
  );

  uploadFile(event: Event) {
    this.profileService.uploadFile((event.target as HTMLInputElement).files).subscribe(url => {
      this.form.patchValue({
        avatar_urls: [url],
      });
      this.cdr.markForCheck();
    });
  }

  updateUser(form: FormGroup) {
    if (form.invalid) {
      this.toastr.show('Заполните обязательные поля', 'Внимание', { status: 'warning' });
      this.form.markAsDirty();
      this.form.markAllAsTouched();
      this.cdr.markForCheck();
      console.log(this.form)
      return;
    }
    this.loading = true;
    this.cdr.markForCheck();
    this.profileService.updateUser(form.getRawValue()).subscribe({
      complete: () => {
        this.toastr.show('Профиль обновлен', 'Данные сохранены', { status: 'success' });
        this.loading = false;
        this.cdr.markForCheck();
      },
      error: (error) => {
        this.toastr.show(error?.message, 'Произошла ошибка', { status: 'error' });
        console.log('error', error);
        this.loading = false;
        this.cdr.markForCheck();
      },
    });
  }
}

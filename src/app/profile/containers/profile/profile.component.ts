import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbAuthService } from '@nebular/auth';
import { switchMap, tap } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  private nbAuthService = inject(NbAuthService);
  private authService = inject(AuthService);
  private formBuilder = inject(FormBuilder);
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
    avatar_urls: [null],
  });
  user$ = this.nbAuthService.getToken().pipe(
    switchMap(user => this.authService.getUser(user.getPayload().user_id)),
    tap((user) => {
      console.log(user);
      this.form.patchValue(user);
    })
  );
}

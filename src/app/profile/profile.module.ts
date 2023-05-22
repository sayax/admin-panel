import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './containers/profile/profile.component';
import { RouterModule } from '@angular/router';
import { NbButtonModule, NbCardModule, NbCheckboxModule, NbInputModule, NbSelectModule, NbUserModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    NbCardModule,
    ReactiveFormsModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NbSelectModule,
    NbUserModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProfileComponent,
        data: {
          title: 'Профиль',
        }
      },
    ]),
  ],
})
export class ProfileModule { }

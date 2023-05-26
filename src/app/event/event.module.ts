import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListComponent } from './containers/event-list/event-list.component';
import { RouterModule, Routes } from '@angular/router';
import { NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule, NbLayoutModule, NbListModule, NbNativeDateService, NbSelectModule, NbTimepickerModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { EventEditComponent } from './containers/event-edit/event-edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: EventListComponent,
    data: {
      title: 'События',
    }
  },
  {
    path: ':id',
    component: EventEditComponent,
    data: {
      title: 'Редактирование',
    }
  },
];

@NgModule({
  declarations: [
    EventListComponent,
    EventEditComponent,
  ],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    NbButtonModule,
    NbSelectModule,
    NbListModule,
    NbCheckboxModule,
    NbDatepickerModule,
    NbTimepickerModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
})
export class EventModule { }

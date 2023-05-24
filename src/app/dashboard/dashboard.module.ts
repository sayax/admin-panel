import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { NbCardModule } from '@nebular/theme';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      title: 'Главная',
    }
  },
];

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    NbCardModule,
    RouterModule.forChild(routes),
  ],
})
export class DashboardModule { }

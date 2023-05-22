import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    loadChildren: () => import('./containers/teacher-list/teacher-list.module').then(m => m.TeacherListModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ]
})
export class TeacherModule { }

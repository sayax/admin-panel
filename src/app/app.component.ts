import { Component, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, Observable } from 'rxjs';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'admin-panel';
  items = [
    {
      title: 'Главная',
      link: '/',
    },
    {
      title: 'Список преподавателей',
      link: '/teachers',
    },
    {
      title: 'Список учеников',
      link: '/students',
    },
    {
      title: 'Контакты',
      link: '/contacts',
    },
    {
      title: 'О нас',
      link: '/about',
    },
  ]
  private router = inject(Router);
  private readonly sidebarService = inject(NbSidebarService);

  hasHeader$: Observable<boolean> = this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    map((route) => (route as NavigationEnd).url),
    map(route => {
      const state = !route.includes('auth');
      if (!state) {
        this.sidebarService.collapse();
      }
      return state;
    })
  );
}

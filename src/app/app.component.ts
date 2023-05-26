import { Component, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, Observable } from 'rxjs';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'admin-panel';
  items: NbMenuItem[] = [
    {
      title: 'Главная',
      link: '/',
    },
    {
      title: 'Профиль',
      link: '/profile',
      pathMatch: 'full',
    },
    {
      title: 'События',
      link: '/event',
      pathMatch: 'prefix',
    },
    {
      title: 'Календарь',
      link: '/calendar',
      pathMatch: 'full',
    },
    {
      title: 'Список преподавателей',
      link: '/teacher',
      pathMatch: 'prefix',
    },
    {
      title: 'Список учеников',
      link: '/student',
      pathMatch: 'full',
    },
    {
      title: 'Контакты',
      link: '/contact',
      pathMatch: 'full',
    },
    {
      title: 'О нас',
      link: '/about',
      pathMatch: 'full',
    },
    {
      title: 'Выйти',
      link: '/auth/logout',
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

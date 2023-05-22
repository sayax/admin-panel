import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { NbAuthService } from '@nebular/auth';
import { map, filter, switchMap, of, startWith } from 'rxjs';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private readonly sidebarService = inject(NbSidebarService);
  private authService = inject(NbAuthService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  isLoggedIn$ = this.authService.isAuthenticated();

  user$ = this.authService.getToken().pipe(map(user => user.getPayload().email));

  title$ = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    startWith(this.router),
    switchMap(() => {
      let route = this.route.firstChild;
      while (route?.firstChild) {
        route = route.firstChild;
      }
      return route?.data ?? of({ title: 'Admin' });
    }),
    map(data => {
      console.log(data)
      return data['title']
    }),
  )

  toggle() {
    this.sidebarService.toggle();
  }
}

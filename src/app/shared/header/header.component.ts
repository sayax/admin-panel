import { Component, inject, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { NbAuthService } from '@nebular/auth';
import { map, filter, switchMap, of, startWith, tap } from 'rxjs';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  private readonly sidebarService = inject(NbSidebarService);
  private nbAuthService = inject(NbAuthService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private authService = inject(AuthService);

  isLoggedIn$ = this.nbAuthService.isAuthenticated();

  user$ = this.nbAuthService.getToken().pipe(switchMap(user => {
    console.log({ user })
    return this.authService.getUserChanges(user.getPayload().user_id);
  }));

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
    map(data => data['title']),
  )

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      tap(() => {
        this.sidebarService.collapse();
      }),
    ).subscribe()
  }

  toggle() {
    this.sidebarService.toggle();
  }
}

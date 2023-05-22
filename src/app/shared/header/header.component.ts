import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { NbAuthService } from '@nebular/auth';
import { map } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private readonly sidebarService = inject(NbSidebarService);
  private authService = inject(NbAuthService);

  isLoggedIn$ = this.authService.isAuthenticated();

  user$ = this.authService.getToken().pipe(map(user => user.getPayload().email));

  toggle() {
    this.sidebarService.toggle();
  }
}

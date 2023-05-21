import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { NbAuthService } from '@nebular/auth';

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

  toggle() {
    this.sidebarService.toggle();
  }
}

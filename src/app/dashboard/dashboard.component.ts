import { Component, inject } from '@angular/core';
import { NbAuthService } from '@nebular/auth';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  private authService = inject(NbAuthService);

  isLoggedIn$ = this.authService.isAuthenticated();
}

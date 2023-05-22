import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileDTO } from 'src/app/backend/model/profile';
import { UserApiService } from 'src/app/backend/services/user-api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userApiService = inject(UserApiService);

  getUser(uid: string): Observable<ProfileDTO> {
    return this.userApiService.getUser(uid);
  }
}

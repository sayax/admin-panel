import { Pipe, PipeTransform, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProfileDTO } from 'src/app/backend/model/profile';
import { UserApiService } from 'src/app/backend/services/user-api.service';

@Pipe({
  name: 'user',
})
export class UserPipe implements PipeTransform {
  private userApiService = inject(UserApiService);

  transform(value: string): Observable<ProfileDTO | null> {
    if (!value) {
      return of(null);
    }
    console.log(value)
    return this.userApiService.getUser(value);
  }

}

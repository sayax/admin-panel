import { Injectable, inject } from '@angular/core';
import { NbAuthService } from '@nebular/auth';
import { map, switchMap, throwError, Observable } from 'rxjs';
import { ProfileDTO } from 'src/app/backend/model/profile';
import { MediaService } from 'src/app/backend/services/media.service';
import { UserApiService } from 'src/app/backend/services/user-api.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private nbAuthService = inject(NbAuthService);
  private mediaService = inject(MediaService);
  private userApiService = inject(UserApiService);

  uploadFile(files: FileList | null) {
    if (files) {
      return this.nbAuthService.getToken().pipe(
        switchMap(token => {
          const path = `profile/${token.getPayload().user_id}`;
          return this.mediaService.uploadFile(files.item(0), path)
        }),
        map(result => result.ref.fullPath),
      );
    }
    return throwError(() => new Error('no image'));
  }

  getfile(path: string): Observable<string> {
    return this.mediaService.getMedia(path);
  }

  updateUser(user: Partial<ProfileDTO>) {
    return this.userApiService.updateUser(user);
  }
}

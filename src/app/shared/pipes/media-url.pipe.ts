import { Pipe, PipeTransform, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MediaService } from 'src/app/backend/services/media.service';

@Pipe({
  name: 'mediaUrl',
})
export class MediaUrlPipe implements PipeTransform {
  private mediaService = inject(MediaService);

  transform(value: string): Observable<string> {
    if (!value) {
      return of('');
    }
    return this.mediaService.getMedia(value);
  }

}

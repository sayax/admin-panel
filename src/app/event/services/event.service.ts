import { Injectable, inject } from '@angular/core';
import { NbAuthService } from '@nebular/auth';
import { Observable, switchMap } from 'rxjs'
import { ICalendarEvent } from 'src/app/backend/model/event';
import { EventsApiService } from 'src/app/backend/services/events-api.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private eventApiService = inject(EventsApiService);
  private nbAuthService = inject(NbAuthService);

  getEvents(): Observable<ICalendarEvent[]> {
    return this.eventApiService.getEvents();
  }

  addEvent(event: Exclude<ICalendarEvent, 'uid' | 'created_on' | 'updated_on'>): Observable<string> {
    return this.nbAuthService.getToken().pipe(
      switchMap(token => {
        event.owner_uid = token.getPayload().user_id;
        return this.eventApiService.addEvent(event);
      }),
    );
  }

  updateEvent(event: Partial<ICalendarEvent>): Observable<void> {
    return this.eventApiService.updateEvent(event);
  }

  removeEvent(event: Partial<ICalendarEvent>): Observable<void> {
    return this.eventApiService.removeEvent(event);
  }
}

import { Injectable, inject } from '@angular/core';
import { NbAuthService } from '@nebular/auth';
import { Observable, switchMap } from 'rxjs'
import { ICalendarEvent, IEventSchedule } from 'src/app/backend/model/event';
import { ProfileDTO } from 'src/app/backend/model/profile';
import { EventsApiService } from 'src/app/backend/services/events-api.service';
import { UserApiService } from 'src/app/backend/services/user-api.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private eventApiService = inject(EventsApiService);
  private userApiService = inject(UserApiService);
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

  getEvent(uid: string): Observable<ICalendarEvent> {
    return this.eventApiService.getEvent(uid);
  }

  getEventSchedules(uid: string): Observable<IEventSchedule[]> {
    return this.eventApiService.getEventSchedules(uid);
  }

  updateEventSchedule(eventUID: string, schedule: Partial<IEventSchedule>): Observable<void> {
    return this.eventApiService.updateEventSchedule(eventUID, schedule);
  }

  addEventSchedules(eventUID: string, schedule: Pick<ICalendarEvent, 'start_date' | 'end_date' | 'days'>): Observable<string> {
    return this.eventApiService.addEventSchedules(eventUID, schedule);
  }

  getEnrolledUsers(uids: string[]): Observable<ProfileDTO[]> {
    return this.userApiService.getUsersInList(uids);
  }

  getUsers(): Observable<ProfileDTO[]> {
    return this.userApiService.getUsers();
  }
}

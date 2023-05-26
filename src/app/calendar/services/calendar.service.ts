import { Injectable, inject } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { Observable, map, switchMap } from 'rxjs';
import { ICalendarEvent } from 'src/app/backend/model/event';
import { colors } from '../utils/colors';
import { Timestamp } from '@angular/fire/firestore';
import { NbAuthService } from '@nebular/auth';
import { UserApiService } from 'src/app/backend/services/user-api.service';
import { ProfileDTO } from 'src/app/backend/model/profile';
import { EventsApiService } from 'src/app/backend/services/events-api.service';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  private eventApiService = inject(EventsApiService);
  private userApiService = inject(UserApiService);

  getEvents(): Observable<CalendarEvent[]> {
    return this.eventApiService.getFilteredEvents().pipe(
      map(events => {
        console.log('events', events)
        return events.map(event => this.convertEventToCalendar(event))
      }),
    );
  }

  getUsersByIds(uids: string[]): Observable<ProfileDTO[]> {
    return this.userApiService.getUsersInList(uids);
  }

  private convertEventToCalendar(event: ICalendarEvent): CalendarEvent {
    return {
      id: event.uid,
      start: new Date(event.start_date.toMillis()),
      end: event.end_date ? new Date(event.end_date.toMillis()) : undefined,
      title: event.title,
      color: colors[event.colors],
      allDay: event.allDay,
      cssClass: event.cssClass,
      meta: {
        ...event.meta,
        teacher_uids: event.teacher_uids,
      },
    }
  }
}

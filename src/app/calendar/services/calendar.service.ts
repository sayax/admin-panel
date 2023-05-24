import { Injectable, inject } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { Observable, map, switchMap } from 'rxjs';
import { ICalendarEvent } from 'src/app/backend/model/event';
import { EventsService } from 'src/app/backend/services/events.service';
import { colors } from '../utils/colors';
import { Timestamp } from '@angular/fire/firestore';
import { NbAuthService } from '@nebular/auth';
import { UserApiService } from 'src/app/backend/services/user-api.service';
import { ProfileDTO } from 'src/app/backend/model/profile';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  private eventApiService = inject(EventsService);
  private userApiService = inject(UserApiService);
  private nbAuthService = inject(NbAuthService);

  getEvents(): Observable<CalendarEvent[]> {
    return this.eventApiService.getEvents().pipe(
      map(events => events.sort((a, b) => a.start_date.toMillis() > b.start_date.toMillis() ? 1 : -1).map(event => this.convertEventToCalendar(event))),
    );
  }

  addEvent(event: Partial<ICalendarEvent>): Observable<string> {
    return this.nbAuthService.getToken().pipe(
      switchMap(token => {
        event.owner_uid = token.getPayload().user_id;
        return this.eventApiService.addEvent(event);
      }),
    );
  }

  updateEvent(event: CalendarEvent): Observable<void> {
    return this.eventApiService.updateEvent(this.convertCalendarToEvent(event));
  }

  removeEvent(event: Partial<ICalendarEvent>): Observable<void> {
    return this.eventApiService.removeEvent(event);
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

  private convertCalendarToEvent(event: CalendarEvent): Partial<ICalendarEvent> {
    return {
      uid: `${event.id ?? ''}`,
      start_date: Timestamp.fromDate(event.start),
      end_date: event.end ? Timestamp.fromDate(event.end) : undefined,
      title: event.title,
      allDay: event.allDay,
      cssClass: event.cssClass,
      meta: event.meta,
    }
  }
}

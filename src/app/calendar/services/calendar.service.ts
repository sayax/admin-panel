import { Injectable, inject } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { Observable, map, mergeMap, switchMap } from 'rxjs';
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
  private authService = inject(NbAuthService);
  private eventApiService = inject(EventsApiService);
  private userApiService = inject(UserApiService);

  getEvents(): Observable<CalendarEvent[]> {
    return this.authService.getToken().pipe(
      mergeMap(token => this.eventApiService.getFilteredEvents().pipe(
        map(events => {
          console.log('events', events)
          return events.map(event => this.convertEventToCalendar(event, token.getPayload().user_id))
        }),
      ))
    );
  }

  getUsersByIds(uids: string[]): Observable<ProfileDTO[]> {
    return this.userApiService.getUsersInList(uids);
  }

  updateEnrolledParticipants(uid: string): Observable<void> {
    return this.authService.getToken().pipe(
      mergeMap(token => this.eventApiService.updateEnrolledParticipants({
        uid,
        enrolled_participants: token.getPayload().user_id,
      }))
    )
  }

  removeEnrolledParticipants(uid: string): Observable<void> {
    return this.authService.getToken().pipe(
      mergeMap(token => this.eventApiService.removeEnrolledParticipants({
        uid,
        enrolled_participants: token.getPayload().user_id,
      }))
    )
  }

  private convertEventToCalendar(event: ICalendarEvent, user_id: string): CalendarEvent {
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
        is_enrolled: !!event.enrolled_participants?.includes(user_id),
      },
    }
  }
}

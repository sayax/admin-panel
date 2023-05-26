import { Injectable, inject } from '@angular/core';
import { Firestore, Timestamp, addDoc, collection, doc, getDoc, getDocs, orderBy, query, setDoc, updateDoc, where, writeBatch } from '@angular/fire/firestore';
import { Collection } from '../model/collections';
import { Observable, forkJoin, from, map, switchMap, throwError } from 'rxjs';
import { ICalendarEvent, IEventSchedule } from '../model/event';

@Injectable({
  providedIn: 'root'
})
export class EventsApiService {
  private firestore: Firestore = inject(Firestore);
  private eventsCollection = collection(this.firestore, Collection.EVENTS);

  getFilteredEvents(): Observable<ICalendarEvent[]> {
    // create an index in a firebase to sort and order
    const eventQuery = query(this.eventsCollection, where('is_active', '==', true), orderBy('start_date'));
    return from(getDocs(eventQuery)).pipe(
      switchMap(data => {
        const events = data.docs.map(doc => doc.data() as ICalendarEvent);
        const schedules = events.map(event => {
          const scheduleCollection = collection(this.firestore, Collection.EVENTS, event.uid, Collection.EVENT_SCHEDULES);
          const scheduleQuery = query(scheduleCollection);
          return from(getDocs(scheduleQuery)).pipe(
            map(
              response => response.docs.map(doc => doc.data() as IEventSchedule).map(schedule => ({
                ...event,
                start_date: schedule.start_date,
                end_date: schedule.end_date,
                is_active: schedule.is_active,
              } as ICalendarEvent))
            ),
          )
        });
        return forkJoin(schedules).pipe(
          map(datas => datas.flat()),
        );
      }),
    )
  }

  getEvents(): Observable<ICalendarEvent[]> {
    const usersQuery = query(this.eventsCollection, orderBy('created_on', 'desc'));
    return from(getDocs(usersQuery)).pipe(
      map(data => data.docs.map(doc => doc.data() as ICalendarEvent)),
    )
  }

  addEvent(event: Exclude<ICalendarEvent, 'uid' | 'created_on' | 'updated_on'>): Observable<string> {
    if (!event) {
      return throwError(() => new Error('Event is missing'));
    }
    if (
      !this.hasParameter(event, 'start_date') ||
      !this.hasParameter(event, 'end_date') ||
      !this.hasParameter(event, 'days')
    ) {
      return throwError(() => new Error('Parameter is missing'));
    }
    event.created_on = Timestamp.now();
    event.updated_on = Timestamp.now();
    event.is_active = true;
    return from(addDoc(this.eventsCollection, event)).pipe(
      switchMap(doc => {
        const start_time = [event.start_date.toDate().getHours(), event.start_date.toDate().getMinutes()];
        const end_time = [event.end_date.toDate().getHours(), event.end_date.toDate().getMinutes()];
        const schedules: Partial<IEventSchedule>[] = this.getDateList(event.start_date, event.end_date, event.days).map(currentDate => {
          return {
            is_active: true,
            start_date: Timestamp.fromMillis(currentDate.setHours(start_time[0], start_time[1])),
            end_date: Timestamp.fromMillis(currentDate.setHours(end_time[0], end_time[1])),
          }
        });
        return forkJoin([
          this.addSchedules(doc.id, schedules),
          this.updateEvent({ uid: doc.id }),
        ]).pipe(
          map(() => doc.id),
        )
      })
    );
  }

  addSchedules(eventUID: string, schedules: Partial<IEventSchedule>[]): Observable<void> {
    const batch = writeBatch(this.firestore);
    const scheduleCollection = collection(this.firestore, Collection.EVENTS, eventUID, Collection.EVENT_SCHEDULES);
    schedules.map(schedule => {
      batch.set(doc(scheduleCollection), schedule);
    });
    return from(batch.commit());
  }

  updateEvent(event: Partial<ICalendarEvent>): Observable<void> {
    if (!event.uid) {
      return throwError(() => new Error('ID is missing'));
    }
    const ref = doc(this.eventsCollection, event.uid);
    return from(getDoc(ref)).pipe(
      switchMap(doc => {
        event.updated_on = Timestamp.now();
        if (doc.exists()) {
          return from(updateDoc(ref, event))
        }
        event.created_on = Timestamp.now();
        return from(setDoc(ref, event))
      }),
    )
  }

  removeEvent(event: Partial<ICalendarEvent>): Observable<void> {
    const ref = doc(this.eventsCollection, event.uid);
    event.updated_on = Timestamp.now();
    return from(updateDoc(ref, {
      is_active: false,
      updated_on: event.updated_on,
    }));
  }

  private getDateList(start_date: Timestamp, end_date: Timestamp, days: number[]): Date[] {
    if (!start_date || !end_date) {
      return [];
    }
    const list: Date[] = [];
    let current = start_date.toDate();
    while (current.getTime() <= end_date.toMillis()) {
      if (days.includes(current.getDay())) {
        list.push(new Date(current));
      }
      current.setDate(current.getDate() + 1);
    }
    return list;
  }

  private hasParameter<T>(object: T, key: keyof T): boolean {
    return object[key] !== null || object[key] !== undefined;
  }
}

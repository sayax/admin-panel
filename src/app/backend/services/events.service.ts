import { Injectable, inject } from '@angular/core';
import { Firestore, Timestamp, addDoc, collection, doc, getDoc, getDocs, query, setDoc, updateDoc, where } from '@angular/fire/firestore';
import { Collection } from '../model/collections';
import { Observable, from, map, switchMap, throwError } from 'rxjs';
import { ICalendarEvent } from '../model/event';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private firestore: Firestore = inject(Firestore);
  private eventsCollection = collection(this.firestore, Collection.EVENTS);

  getEvents(): Observable<ICalendarEvent[]> {
    const usersQuery = query(this.eventsCollection, where('is_active', '==', true));
    return from(getDocs(usersQuery)).pipe(
      map(data => data.docs.map(doc => doc.data() as ICalendarEvent)),
    )
  }

  addEvent(event: Partial<ICalendarEvent>): Observable<string> {
    if (!event) {
      return throwError(() => new Error('Event is missing'));
    }
    event.created_on = Timestamp.now();
    event.updated_on = Timestamp.now();
    event.is_active = true;
    return from(addDoc(this.eventsCollection, event)).pipe(
      switchMap(doc => this.updateEvent({ uid: doc.id }).pipe(
        map(() => doc.id),
      ))
    );
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
}

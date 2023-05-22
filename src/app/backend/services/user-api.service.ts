import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, doc, getDoc, getDocs, query, where } from '@angular/fire/firestore';
import { Observable, from, map, of } from 'rxjs';
import { ProfileDTO } from '../model/profile';
import { Collection } from '../model/collections';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  private firestore: Firestore = inject(Firestore);
  private profileCollection = collection(this.firestore, Collection.PROFILE);

  getUsersInList(uids: string[]): Observable<ProfileDTO[]> {
    if (!uids || !uids.length) {
      return of([]);
    }
    const usersQuery = query(this.profileCollection, where('uid', 'in', uids));
    const usersSnapshot = from(getDocs(usersQuery));
    return usersSnapshot.pipe(
      map(users => users.docs.map(user => user.data() as ProfileDTO)),
    );
  }

  getUser(uid: string): Observable<ProfileDTO> {
    const ref = doc(this.profileCollection, uid);
    return from(getDoc(ref)).pipe(
      map(data => data.data() as ProfileDTO),
    )
  }
}

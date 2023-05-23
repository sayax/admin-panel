import { Injectable, inject } from '@angular/core';
import { Firestore, Timestamp, addDoc, collection, doc, docSnapshots, getDoc, getDocs, query, setDoc, updateDoc, where } from '@angular/fire/firestore';
import { Observable, from, map, of, switchMap } from 'rxjs';
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

  /**
   *
   * @param uid uid of a user
   * @returns a continuous observer which updates everytime user changes
   */
  getUserChanges(uid: string): Observable<ProfileDTO> {
    const ref = doc(this.profileCollection, uid);
    return docSnapshots(ref).pipe(
      map(doc => doc.data() as ProfileDTO),
    );
  }

  updateUser(user: Partial<ProfileDTO>): Observable<void> {
    const ref = doc(this.profileCollection, user.uid);
    return from(getDoc(ref)).pipe(
      switchMap(doc => {
        user.updated_on = Timestamp.now();
        if (doc.exists()) {
          return from(updateDoc(ref, user))
        }
        user.created_on = Timestamp.now();
        return from(setDoc(ref, user))
      }),
    )
  }
}

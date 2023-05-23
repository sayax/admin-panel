import { Injectable, inject } from '@angular/core';
import { Firestore, documentId } from '@angular/fire/firestore';
import { Storage, UploadResult, UploadTask, getDownloadURL, ref, uploadBytes, uploadBytesResumable } from '@angular/fire/storage';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  private fireStorage = inject(Storage);

  uploadFile(file: File | null, path: string): Observable<UploadResult> {
    if (!file) {
      throw new Error('File not provided');
    }
    const storageRef = ref(this.fireStorage, `${path}/${Date.now()}-${file.name}`);
    const task = uploadBytes(storageRef, file);
    return from(task);
  }

  getMedia(path: string): Observable<string> {
    const storageRef = ref(this.fireStorage, path);
    return from(getDownloadURL(storageRef));
  }
}

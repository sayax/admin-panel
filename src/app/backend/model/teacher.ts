import { Timestamp } from "@angular/fire/firestore";

export interface Teacher {
  created_on: Timestamp;
  updated_on: Timestamp;
  start_date: Timestamp;
  end_date?: Timestamp;
  level: string;
  uid: string; // profile uid
  is_active: boolean;
  styles: DanceStyle[];
}

export interface TeacherDTO {
  uid: string;
  phone: string;
  email: string;
  first_name: string;
  middle_name?: string;
  last_name: string;
  avatar_url: string;
  start_date: Timestamp;
  level: string;
  styles: DanceStyle[];
}

export enum DanceStyle {
  kizomba = 'kizomba',
  salsa = 'salsa',
  bachata = 'bachata',
}

export enum DanceLevel {
  beginner = 'beginner',
  intermediate = 'intermediate',
  advanced = 'advanced',
  pro = 'pro',
}

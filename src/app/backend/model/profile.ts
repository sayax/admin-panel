import { Timestamp } from "@angular/fire/firestore";

export interface ProfileDTO {
  created_on: Timestamp;
  updated_on: Timestamp;
  uid: string;
  phone: string;
  email: string;
  first_name: string;
  middle_name?: string;
  last_name: string;
  gender: Gender;
  description: string;
  address: string;
  is_teacher: boolean;
  is_student: boolean;
  is_blocked: boolean;
  avatar_urls: string[];
}

export enum Gender {
  male = 'male',
  female = 'female',
}

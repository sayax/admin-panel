export interface Teacher {
  created_on: Date;
  updated_on: Date;
  start_date: Date;
  end_date?: Date;
  level: string;
  uid: string;
  profile_uid: string;
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
  start_date: Date;
  styles: DanceStyle[];
}

export enum DanceStyle {
  kizomba = 'kizomba',
  salsa = 'salsa',
  bachata = 'bachata',
}

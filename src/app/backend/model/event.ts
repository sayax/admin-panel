import { Timestamp } from "@angular/fire/firestore";

export interface ICalendarEvent {
  uid: string;
  allDay?: boolean;
  colors: CalendarColor;
  created_on: Timestamp;
  updated_on: Timestamp;
  start_date: Timestamp;
  end_date?: Timestamp;
  meta?: {
    type?: CalendarType;
  };
  cssClass?: string;
  owner_uid: string;
  teacher_uids: string[];
  title: string;
  is_active: boolean;
}

export enum CalendarColor {
  blue = 'blue',
  yellow = 'yellow',
  red = 'red',
}

export enum CalendarType {
  info = 'info',
  warning = 'warning',
  danger = 'danger',
}

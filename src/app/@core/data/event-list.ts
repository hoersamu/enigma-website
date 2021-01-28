import { Observable } from "rxjs";

export interface EventListEntry {
  name: string;
  datum: Date;
  beschreibung: string;
  locked: boolean;
  closed: boolean;
  teilnehmer: number;
  spielerzahl: number;
  anmeldefrist: Date;
}

export abstract class EventListData {
  abstract getData(): Observable<EventListEntry[]>;
}

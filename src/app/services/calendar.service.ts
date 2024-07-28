import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CalendarService {
  private calenderInfo: Date = new Date();

  getCalenderInfo(): Date {
    this.calenderInfo = new Date();
    return this.calenderInfo;
  }
}

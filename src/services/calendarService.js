import RequestService from './requestService';

export default class CalendarService extends RequestService {
  static instance;

  static getInstance() {
    this.instance = this.instance || new CalendarService();
    return this.instance;
  }

  getHolidays() {
    return this.request({ url: 'calendars' });
  }
}

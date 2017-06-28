import RequestService from './requestService';

export default class PeopleService extends RequestService {
  static instance;

  static getInstance() {
    this.instance = this.instance || new PeopleService();
    return this.instance;
  }

  getLoggedUserInformation() {
    return this.request({ url: 'people/me' });
  }


  getOfficePeople() {
    return this.request({ url: 'people/except_me' });
  }
}

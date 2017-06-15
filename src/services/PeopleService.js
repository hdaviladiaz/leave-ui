import RequestService from './requestService';

export default class PeopleService extends RequestService {

  get() {
    return this.request({ url: 'people/me' });
  }
}

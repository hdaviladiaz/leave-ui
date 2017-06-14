import RequestService from './requestService';

export default class PeopleService extends RequestService {

  get() {
    var config = {
      url: 'people/me',
      method: 'GET'
    }
    return this.request(config);
  }
}

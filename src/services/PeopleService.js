import axios from 'axios';

export default class PeopleService {

  get(id){
      return axios.get('http://localhost:3000/people/' + id);
  }
}
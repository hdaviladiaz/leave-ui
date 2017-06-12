import axios from 'axios';

export default class PeopleService {
  get(id) {
    return axios.get('/api/people/' + id)
    .then(response => {return response.data[0]})
    .catch(error =>	Promise.reject(error));    
  }
}

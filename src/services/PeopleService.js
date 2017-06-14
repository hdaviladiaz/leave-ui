import axios from 'axios';

export default class PeopleService {
  get() {
    return axios.get('http://localhost:3000/people/me',{
      headers: {'Token': localStorage.token},
      maxRedirects: 0
    })
    .then(response => {return response.data})
    .catch(error =>	{
      // Promise.reject(error);
    });    
  }
}

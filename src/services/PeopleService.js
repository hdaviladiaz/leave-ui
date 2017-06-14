import axios from 'axios';

export default class PeopleService {
  get() {
    return axios.get('http://localhost:3000/people/me',{
      headers: {
        'Token': localStorage.token
    },
     
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(error =>	{
      var redirectUrl="http://localhost:3000"+error.response.data;
      window.location=redirectUrl;
      // Promise.reject(error);
    });    
  }
}

import axios from 'axios';
import environment from '../conf'

export default class RequestService {
  request(config) {
    return axios({
        headers: { 'Token': localStorage.token || 'undefined' },
        method: config.method || 'GET',
        url: config.url,
        data: config.data
    })
    .then(response => {
        return response.data
    })
    .catch(error => {
        if (error.response && error.response.status === 303) {
            var redirectUrl = environment().hostUrl + error.response.data;
            window.location = redirectUrl;
        }
        else {
            return error;
        }
    });
  }
}

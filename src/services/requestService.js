import axios from 'axios';
import environment from '../conf'

export default class RequestService {
    request(config) {
        return axios({
            headers: { 'Token': localStorage.token || 'undefined' },
            method: config.method || 'GET',
            url: config.url,
            data: config.data
        }).then(response => {
            return response.data
        })
            .catch(error => {
                if (error.response && error.response.status === 303) {
                    var url = environment().hostUrl + error.response.data;
                    this.redirect(url);
                }
                return error;
            });
    }
    redirect(url) {
        window.location = url;
    }
    isAdmin() {
        var token = localStorage.token;
        if(!token)return false;
        return token[token.length - 1] === '1';
    }
}

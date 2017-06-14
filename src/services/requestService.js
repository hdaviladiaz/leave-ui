import axios from 'axios';

export default class RequestService {

    constructor() {
        this.HOST = "http://localhost:3000"
    }

    request(config) {
        return axios({
            headers: { 'Token': localStorage.token },
            method: config.method || 'GET',
            url: config.url,
            data: config.data,
            baseURL: this.HOST
        })
        .then(response => {
            return response.data
        })
        .catch(error => {
            if (error.response.status === 303) {
                var redirectUrl = this.HOST + error.response.data;
                window.location = redirectUrl;
            }
            else {
                return error;
            }
        });
    }
}
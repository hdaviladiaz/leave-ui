import RequestService from './requestService';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import environment from '../conf'

describe('requestService', () => {
  var mock, requestService, path;
  function storageMock() {
    var storage = {};
    return {
      setItem: function (key, value) {
        storage[key] = value || '';
      },
      getItem: function (key) {
        return key in storage ? storage[key] : null;
      }
    };
  }

  beforeEach(() => {
    window.localStorage = storageMock();
    mock = new MockAdapter(axios);
    requestService = new RequestService();
    path = Date.now().toString();
  });


  describe('request method', () => {
    it('should set correct token header', () => {
      localStorage.token = '1234567890de';
      mock.onAny(path).reply(config => {
        return [200, config.headers.Token];
      });
      let requestPromise = requestService.request({ url: path, method: 'GET' });
      return expect(requestPromise).resolves.toEqual(localStorage.token);
    });

    it('should redirect when response status is 303', () => {
      expect.assertions(1);
      mock.onAny(path).reply(config => {
        return [303, '/test/test2'];
      });
      var customWindow = { location: "" };
      requestService.redirect = jest.fn(function (url) {
        customWindow.location = url;
      })
      let requestPromise = requestService.request({ url: path, method: 'GET' });
      return requestPromise.then(error => expect(customWindow.location).toEqual(environment().hostUrl + '/test/test2'));
    });

    it('should get data when response status is 200', () => {
      let expectedData = { data: [Math.random()] };
      mock.onGet(path).reply(config => {
        return [200, expectedData];
      });
      let requestPromise = requestService.request({ url: path, method: 'GET' });
      return requestPromise.then(result => expect(result).toEqual(expectedData));
    });
  });

  describe('isAdmin method', () => {
    it('should return true when token ends with 1', () => {
      localStorage.token = '12345678901';
      let resolvedResult = requestService.isAdmin();
      return expect(resolvedResult).toEqual(true);
    });

    it('should return false when token ends with 0', () => {
      localStorage.token = '12345678900';
      let resolvedResult = requestService.isAdmin();
      return expect(resolvedResult).toEqual(false);
    });
  })


});

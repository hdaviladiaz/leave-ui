import RequestService from './requestService';
import axios from 'axios';

describe('requestService', () => {

  beforeEach(function () {
    window.localStorage = storageMock();
  });

  function storageMock() {
    var storage = {};

    return {
      setItem: function(key, value) {
        storage[key] = value || '';
      },
      getItem: function(key) {
        return key in storage ? storage[key] : null;
      }
    };
  }

  xit('should call correct endpoint', () => {
    const expected = {data: [Math.random()]};
    axios.request = jest.fn(() => new Promise(resolve => resolve(expected)));

    let requestService = new RequestService();
    let personPromise = requestService.request({ url: 'people' });

    expect(axios.request).toHaveBeenCalledWith('http://localhost:3000/people');
  });

});

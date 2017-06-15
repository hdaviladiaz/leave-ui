import PeopleService from './PeopleService';
import axios from 'axios';

describe('PeopleService', () => {

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
    axios.get = jest.fn(() => new Promise(resolve => resolve(expected)));

    let peopleService = new PeopleService();
    let personPromise = peopleService.get();

    expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/people/me');
  });

  xit('should get person information', () => {
    let expected = {data: [Math.random()]};
    axios.get = jest.fn(() => new Promise(resolve => resolve(expected)));
    let peopleService = new PeopleService();
    let personPromise = peopleService.get();

    expect(personPromise).resolves.toBe(expected.data[0]);
  });

  xit('should return an error object when an error ocurred in server', () => {
    const expected = {status: Math.random()};
    axios.get = jest.fn(() => new Promise((resolve, reject) => reject(expected)));
    let peopleService = new PeopleService();
    let personPromise = peopleService.get();

    expect(personPromise).rejects.toEqual(expected);
  });

});

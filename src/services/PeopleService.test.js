import PeopleService from './PeopleService';
import axios from 'axios';

describe('PeopleService', () => {
  
  it('should call correct endpoint', () => {
    const expected = {data: [Math.random()]};
    axios.get = jest.fn(() => new Promise(resolve => resolve(expected)));
    let peopleService = new PeopleService();
    var localStorage={};
    let personPromise = peopleService.get();

    expect(axios.get).toHaveBeenCalledWith('/people/me');
  });

  it('should get person information', () => {
    let expected = {data: [Math.random()]};
    axios.get = jest.fn(() => new Promise(resolve => resolve(expected)));
    let peopleService = new PeopleService();
    let personPromise = peopleService.get();
    return expect(personPromise).resolves.toBe(expected.data[0]);
  });

  it('should return an error object when an error ocurred in server', () => {
    const expected = {status: Math.random()};
    axios.get = jest.fn(() => new Promise((resolve, reject) => reject(expected)));
    let peopleService = new PeopleService();
    let personPromise = peopleService.get();
    return expect(personPromise).rejects.toEqual(expected);
  });

});

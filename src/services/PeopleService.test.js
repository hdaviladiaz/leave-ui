import PeopleService from './PeopleService';
import axios from 'axios';

describe('PeopleService', () => {
  
  it('should call correct endpoint', () => {
    const personId = Math.random();
    const expected = {data: [Math.random()]};
    axios.get = jest.fn(() => new Promise(resolve => resolve(expected)));
    let peopleService = new PeopleService();

    let personPromise = peopleService.get(personId);

    expect(axios.get).toHaveBeenCalledWith('/api/people/' + personId);
  });

  it('should get person information', () => {
    const personId = Math.random();
    let expected = {data: [Math.random()]};
    axios.get = jest.fn(() => new Promise(resolve => resolve(expected)));
    let peopleService = new PeopleService();
    let personPromise = peopleService.get(personId);
    return expect(personPromise).resolves.toBe(expected.data[0]);
  });

  it('should return an error object when an error ocurred in server', () => {
    const personId = Math.random();
    const expected = {status: Math.random()};
    axios.get = jest.fn(() => new Promise((resolve, reject) => reject(expected)));
    let peopleService = new PeopleService();
    let personPromise = peopleService.get(personId);
    return expect(personPromise).rejects.toEqual(expected);
  });

});

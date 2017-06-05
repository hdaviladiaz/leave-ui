import PeopleService from './PeopleService';
import axios from 'axios';

describe('PeopleService', () => {
  it('should get person information', () => {
    let expected = {data: [Math.random()]};
    axios.get = jest.fn(() => new Promise(resolve => resolve(expected)));
    let peopleService = new PeopleService();

    let personPromise = peopleService.get(1);

    expect.assertions(1);
    return expect(personPromise).resolves.toBe(expected.data[0]);
  });
});

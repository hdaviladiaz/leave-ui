import PeopleService from './PeopleService';

describe('PeopleService', () => {
  it('should get person information', () => {
    const httpClientStub = jest.fn();
    let actual = Math.random();
    httpClientStub.mockReturnValue(actual);
    let peopleService = new PeopleService(httpClientStub);
    let pepe = peopleService.get(1);
    expect(pepe).toBe(actual);
  });
});

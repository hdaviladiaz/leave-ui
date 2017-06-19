import PeopleService from './PeopleService';
import axios from 'axios';

describe('PeopleService', () => {
  let peopleService;

  beforeEach(() => {
    peopleService = PeopleService.getInstance();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should call correct endpoint when getLoggedUserInformation is called', () => {
    let expectedUrl = "people/me";
    peopleService.request = jest.fn((config) => {
      return config.url;
    });
    let resolvedUrl = peopleService.getLoggedUserInformation();
    return expect(resolvedUrl).toEqual(expectedUrl);
  });

});

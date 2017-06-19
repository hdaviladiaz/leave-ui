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
    })
    let resolvedUrl = peopleService.getLoggedUserInformation();
    return expect(resolvedUrl).toEqual(expectedUrl);
  });

  xit('should get person information', () => {
    const expectedPerson = { data: [Math.random()] };
    peopleService.getLoggedUserInformation = jest.fn(() => {
      return expectedPerson;
    })
    let resolvedPerson = peopleService.getLoggedUserInformation();
    return expect(resolvedPerson).toEqual(expectedPerson);
  });

  xit('should return an error object when an error ocurred in server', () => {
    const expectedError = { status: Math.random()};
    peopleService.getLoggedUserInformation = jest.fn(() => {
      return expectedError;
    })
    let resolvedPerson = peopleService.getLoggedUserInformation();
    return expect(resolvedPerson).toEqual(expectedError);
  });

});

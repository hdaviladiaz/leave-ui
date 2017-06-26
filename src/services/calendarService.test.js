import CalendarService from './calendarService';

describe('CalendarService', () => {
  let calendarService;

  beforeEach(() => {
    calendarService = CalendarService.getInstance();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should call correct endpoint when getLoggedUserInformation is called', () => {
    let expectedUrl = "calendars";
    calendarService.request = jest.fn((config) => {
      return config.url;
    });
    let resolvedUrl = calendarService.getHolidays();
    return expect(resolvedUrl).toEqual(expectedUrl);
  });
});

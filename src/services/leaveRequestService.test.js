import LeaveRequestService from './leaveRequestService';
import axios from 'axios';

describe('LeaveRequestService', () => {
  let leaveRequestService;

  beforeEach(() => {
    leaveRequestService = LeaveRequestService.getInstance();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should call correct endpoint when getRequestAdminList is called', () => {
    let expectedUrl = "leave_requests";
    leaveRequestService.request = jest.fn((config) => {
      return config.url;
    });
    let resolvedUrl = leaveRequestService.getRequestAdminList();
    return expect(resolvedUrl).toEqual(expectedUrl);
  });

});

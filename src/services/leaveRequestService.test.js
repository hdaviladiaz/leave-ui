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

  it('should call correct endpoint when getRequests is called', () => {
    let expectedUrl = "leave_requests/me/approve";
    leaveRequestService.request = jest.fn((config) => {
      return config.url;
    });
    let resolvedUrl = leaveRequestService.getRequests();
    return expect(resolvedUrl).toEqual(expectedUrl);
  });

});

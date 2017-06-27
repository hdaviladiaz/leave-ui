import LeaveRequestService from './leaveRequestService';
import axios from 'axios';

describe('LeaveRequestService', () => {
  let leaveRequestService;
  let expectedConfig ={};

  beforeEach(() => {
    leaveRequestService = LeaveRequestService.getInstance();
    leaveRequestService.request = jest.fn((config) => {
      expectedConfig=config;
    });

    leaveRequestService.createLeaveRequest();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });
  it('should call correct endpoint when createLeaveRequest is called', () => {
    let expectedUrl = "/leave_requests";

    return expect(expectedConfig.url).toEqual(expectedUrl);
  });

  it('should call post method when createLeaveRequest is called', () => {
    let expectedMethod = "POST";

    return expect(expectedConfig.method).toEqual(expectedMethod);
  });

  it('should send data when createLeaveRequest is called', () => {
    let expectedData = {id:54545};

    leaveRequestService.createLeaveRequest(expectedData);

    return expect(expectedConfig.data).toEqual(expectedData);
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

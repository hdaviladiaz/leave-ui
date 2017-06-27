import RequestService from './requestService';

export default class LeaveRequestService extends RequestService {
  static instance;

  static getInstance() {
    this.instance = this.instance || new LeaveRequestService();
    return this.instance;
  }

  getRequestAdminList() {
    return this.request({ url: 'leave_requests' });
  }

  createLeaveRequest(data) {
    return this.request({ method: "POST" ,url: '/leave_requests', data:data});
  }
}

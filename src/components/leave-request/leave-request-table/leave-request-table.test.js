import React from 'react';
import { mount, shallow } from 'enzyme';
import LeaveRequestTable from './leave-request-table';
import LeaveRequestTableRow from '../leave-request-table-row/leave-request-table-row';

describe('leave-request-table', () => {
    let requests = [];
    let random = 0;
    beforeEach(() => {
        random = (Math.floor(Math.random() * 100));
        for (let i = 1; i <= random; i++) {
            let request = { time: "6:45 PM", name: "Hector" };
            requests.push(request);
        }
    });
    it('should render right number of rows', () => {
        let wrapper = mount(<LeaveRequestTable data={requests} />);
        let rows = wrapper.find('LeaveRequestTableRow');
        expect(rows.length).toEqual(random);
    });

    it('should not render rows when no data', () => {
        let wrapper = mount(<LeaveRequestTable/>);
        let rows = wrapper.find('LeaveRequestTableRow');
        expect(rows.length).toEqual(0);
    });
});

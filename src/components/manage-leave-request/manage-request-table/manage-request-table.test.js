import React from 'react';
import { mount, shallow } from 'enzyme';
import ManageRequestTable from './manage-request-table';
import ManageRequestTableRow from '../manage-request-table-row/manage-request-table-row';

describe('manage-request-table', () => {
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
        let wrapper = mount(<ManageRequestTable data={requests} />);
        let rows = wrapper.find('ManageRequestTableRow');
        expect(rows.length).toEqual(random);
    });

    it('should not render rows when no data', () => {
        let wrapper = mount(<ManageRequestTable/>);
        let rows = wrapper.find('ManageRequestTableRow');
        expect(rows.length).toEqual(0);
    });
});
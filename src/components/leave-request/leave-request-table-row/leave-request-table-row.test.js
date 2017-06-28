import React from 'react';
import { mount, shallow } from 'enzyme';
import LeaveRequestTableRow from './leave-request-table-row';

describe('leave-request-table-row', () => {
    let clickFunction, wrapper, request;
    beforeEach(function () {
        clickFunction = jest.fn();
        request = { time: "6:45 PM", name: "Hector" };
    });
   

    it('should call click event handler when item is clicked', () => {
        wrapper = mount(<LeaveRequestTableRow request={request} onclick={clickFunction} block={false} />);
        let successIcon = wrapper.find('.leave-request-table-item-body').first();
        successIcon.simulate('click')
        expect(clickFunction).toBeCalled();
    });
});






import React from 'react';
import { mount, shallow } from 'enzyme';
import ManageRequestTableRow from './manage-request-table-row';

describe('manage-request-table-row', () => {
    let clickFunction, wrapper, request;
    beforeEach(function () {
        clickFunction = jest.fn();
        request = { time: "6:45 PM", name: "Hector" };
    });
    it('should call success event handler when approve icon is clicked', () => {
        wrapper = mount(<ManageRequestTableRow request={request} onsuccess={clickFunction} block={false} />);
        let successIcon = wrapper.find('.glyphicon-ok-sign').first();
        successIcon.simulate('click')
        expect(clickFunction).toBeCalled();
    });

    it('should call failure event handler when reject icon is clicked', () => {
        wrapper = mount(<ManageRequestTableRow request={request} onfailure={clickFunction} block={false} />);
        let successIcon = wrapper.find('.glyphicon-remove-sign').first();
        successIcon.simulate('click')
        expect(clickFunction).toBeCalled();
    });

    it('should call click event handler when item is clicked', () => {
        wrapper = mount(<ManageRequestTableRow request={request} onclick={clickFunction} block={false} />);
        let successIcon = wrapper.find('.manage-request-table-item-body').first();
        successIcon.simulate('click')
        expect(clickFunction).toBeCalled();
    });
});

describe('manage-request-table-row blocked', () => {
    let clickFunction, wrapper, request;
    beforeEach(function () {
        clickFunction = jest.fn();
        request = { time: "6:45 PM", name: "Hector" };
    });
    it('should call success event handler when approve icon is clicked', () => {
        wrapper = mount(<ManageRequestTableRow request={request} onsuccess={clickFunction} block={true} />);
        let successIcon = wrapper.find('.glyphicon-ok-sign').first();
        successIcon.simulate('click');
        expect(clickFunction.mock.calls.length).toBe(0);
    });

    it('should call failure event handler when reject icon is clicked', () => {
        wrapper = mount(<ManageRequestTableRow request={request} onfailure={clickFunction} block={true} />);
        let successIcon = wrapper.find('.glyphicon-remove-sign').first();
        successIcon.simulate('click')
        expect(clickFunction.mock.calls.length).toBe(0);
    });

    it('should call click event handler when item is clicked', () => {
        wrapper = mount(<ManageRequestTableRow request={request} onclick={clickFunction} block={true} />);
        let successIcon = wrapper.find('.manage-request-table-item-body').first();
        successIcon.simulate('click')
        expect(clickFunction).toBeCalled();
    });
})




import React from 'react';
import LeaveCalendar from './leave-calendar';
import renderer from 'react-test-renderer';

it('should render LeaveCalendar as snapshot', () => {
  const tree = renderer.create(<LeaveCalendar/>).toJSON();
  expect(tree).toMatchSnapshot();
});


xit('should render LeaveCalendar with holidays days as snapshot', () => {
  const component = renderer.create(<LeaveCalendar />).toJSON();
  const holidays = [
    {
        "date": "2017-01-02",
        "isWorkDay": false,
        "isHalfDay": false,
        "office": {
            "name": "Quito",
            "code": "1501"
        }
    },
    {
        "date": "2017-02-27",
        "isWorkDay": false,
        "isHalfDay": false,
        "office": {
            "name": "Quito",
            "code": "1501"
        }
    }
  ]
  component.getInstance().setState({dates: holidays});
  expect(component.toJSON()).toMatchSnapshot();
});

import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import App from './../App';
import DateInput from './../DateInput';
import ReactTestUtils from 'react-dom/test-utils';
import { format, differenceInWeeks } from 'date-fns';
configure({ adapter: new Adapter() });

describe('App', () => {
  const app = shallow(<App />);
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  it('should have initial state of birthDate: null', () => {
    expect(app.state().birthDate).toBe(null);
  });
  it('should store todays date in state', () => {
    expect(app.state().today).toBe(format(Date.now(), 'YYYY-MM-DD'));
  });
});

describe('App interaction tests', () => {
  const expectedDateValue = '01-01-1901';
  let app;
  beforeEach(() => {
    app = mount(<App />);
    app.find('input[type="date"]').instance().value = expectedDateValue;
  });
  it('should update its internal state when handleBirthDateChange called', () => {
    const dateInput = app.find(DateInput);
    dateInput.find('form').simulate('submit', { preventDefault: jest.fn() });
    expect(app.state().birthDate).toBe(expectedDateValue);
  });
  it('should get week difference when birthDate updated', () => {
    const dateInput = app.find(DateInput);
    const expectedWeekDifference = differenceInWeeks(
      Date.now(),
      expectedDateValue
    );
    dateInput.find('form').simulate('submit', { preventDefault: jest.fn() });
    expect(app.state().weeksOld).toBe(expectedWeekDifference);
  });
});

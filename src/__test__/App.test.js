import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import App from './../App';
import DateInput from './../DateInput';
import ReactTestUtils from 'react-dom/test-utils';
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
});

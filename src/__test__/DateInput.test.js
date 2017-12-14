import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import DateInput from './../DateInput';
import ReactTestUtils from 'react-dom/test-utils';
configure({ adapter: new Adapter() });

describe('DateInput shallow tests', () => {
  const input = shallow(<DateInput />);
  it('renders a label', () => {
    expect(input.find('label').exists()).toEqual(true);
  });
  it('renders a numerical input', () => {
    expect(input.find('input[type="date"]').exists()).toEqual(true);
  })
  it('renders a submit input', () => {
    expect(input.find('input[type="submit"]').exists()).toEqual(true);
  })
  it('should have initial state of date: null', () => {
    expect(input.state().date).toBe(null);
  });
});

describe('DateInput interaction tests', () => {
  const expectedDateValue = '01-01-1901';
  let mockOnSubmit;
  let mInput;
  beforeEach(() => {
    mockOnSubmit = jest.fn();
    mInput = mount(<DateInput onSubmit={mockOnSubmit} />);
    mInput.find('input[type="date"]').instance().value = expectedDateValue;
  });
  it('calls its onDateSubmit prop when state changes', () => {
    mInput.find('form').simulate('submit', { preventDefault: jest.fn() });
    expect(mockOnSubmit.mock.calls.length).toBe(1);
  });
  it('updates its internal state when form input submitted', () => {
    mInput.find('form').simulate('submit', { preventDefault: jest.fn() });
    expect(mInput.state().date).toBe(expectedDateValue);
  });
  it('provides input date value as an argument to onDateSubmit prop', () => {
    mInput.find('form').simulate('submit', { preventDefault: jest.fn() });
    expect(mockOnSubmit.mock.calls[0][0]).toBe(expectedDateValue);
  })
  it('should throw if date isnt valid, eg submitted before input filled in', () => {
    /*
      TODO: the DateInput method should probably throw an error which gets handled by an ErrorBoundry & we instead use .shouldThrowError() here
    */
    mInput.find('input[type="date"]').instance().value = 'WRONGVAL';
    mInput.find('form').simulate('submit', { preventDefault: jest.fn() });
    expect(mockOnSubmit.mock.calls.length).toBe(0);
  });
  it('should throw if date is in the future', () => {
    mInput.find('input[type="date"]').instance().value = '3030-01-01';
    expect(mockOnSubmit.mock.calls.length).toBe(0);
  });
});
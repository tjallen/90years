import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import Year from './../Year';
import Week from './../Week';
import ReactTestUtils from 'react-dom/test-utils';
configure({ adapter: new Adapter() });

describe('Year', () => {
  const year = shallow(<Year />);
  it('renders 52 Weeks (as per defaultProps)', () => {
    expect(year.find(Week).length).toBe(52);
  });
});

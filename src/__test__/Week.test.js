import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import Week from './../Week';
import ReactTestUtils from 'react-dom/test-utils';
configure({ adapter: new Adapter() });

describe('Week', () => {
  const week = shallow(<Week />);
  it('renders Week', () => {
    expect(week.find('div').exists()).toEqual(true);
  });
  it('gets className of active--true when active prop provided', () => {
    const weekActive = shallow(<Week active />);
    expect(weekActive.find('.active--true').exists()).toEqual(true);
  });
  it('gets className of active--false when active prop not present', () => {
    expect(week.find('.active--false').exists()).toEqual(true);
  });
});

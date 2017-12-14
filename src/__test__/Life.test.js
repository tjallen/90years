import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import Life from './../Life';
import Year from './../Year';
import Label from './../Label';
import ReactTestUtils from 'react-dom/test-utils';
configure({ adapter: new Adapter() });

describe('Life', () => {
  const life = shallow(<Life />);
  it('renders 90 Years (as per defaultProps)', () => {
    expect(life.find(Year).length).toBe(90);
  });
  it('should render Label as a sibling of Year if y % 5 === 0 (19 Labels for the default 90 year life)', () => {
    expect(life.find(Label).length).toBe(18);
  })
});

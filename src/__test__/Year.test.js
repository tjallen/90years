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

describe('Year interaction tests', () => {
  const year = shallow(<Year value={0} weeksOld={2} weeksInYear={52} />);
  it('when receiving props.weeksOld, calculates if a Week is active when rendering', () => {
    expect(year.find('Week[active=true]').length).toBe(2);
    expect(year.find('Week[active=false]').length).toBe(50);
  });
})
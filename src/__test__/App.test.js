import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import App from './../App';
import Life from './../Life';
import Year from './../Year';
import Week from './../Week';
import Label from './../Label';
import ReactTestUtils from 'react-dom/test-utils';
configure({ adapter: new Adapter() });

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
});

describe('Life', () => {
  const life = shallow(<Life />);
  it('renders 90 Years (as per defaultProps)', () => {
    expect(life.find(Year).length).toBe(90);
  });
  it('should render Label as a sibling of Year if y % 5 === 0')
});

describe('Year', () => {
  const year = shallow(<Year />);
  it('renders 52 Weeks (as per defaultProps)', () => {
    expect(year.find(Week).length).toBe(52);
  });
});

describe('Week', () => {
  const week = shallow(<Week />);
  it('renders Week', () => {
    expect(week.find('div').length).toBe(1);
  });
  it('gets className of active--true when active prop provided', () => {
    const weekActive = shallow(<Week active />);
    expect(weekActive.find('.active--true').length).toBe(1);
  });
  it('gets className of active--false when active prop not present', () => {
    expect(week.find('.active--false').length).toBe(1);
  });
});

describe('Label', () => {
  const label = shallow(<Label>{99}</Label>);
  it('should display its value as props.children', () => {
    expect(label.prop('children')).toEqual(99);
  });
})
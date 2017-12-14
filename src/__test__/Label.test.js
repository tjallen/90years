import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import Label from './../Label';
import ReactTestUtils from 'react-dom/test-utils';
configure({ adapter: new Adapter() });

describe('Label', () => {
  const label = shallow(<Label>{99}</Label>);
  it('should display its value as props.children', () => {
    expect(label.prop('children')).toEqual(99);
  });
})

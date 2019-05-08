// const sum = require('./index');
// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });
import React from 'react';
import About from './index';
import Enzyme, {shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
//smoke testing
test('About component exists', () => {
    const wrapper = shallow(<About/>);
        expect(wrapper.exists()).toBe(true);
})
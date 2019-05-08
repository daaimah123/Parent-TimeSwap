import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

//component to test
import ChatScreen from './ChatScreen'
import { mount } from 'recompose';
//full-render test
test('ChatScreen component renders to page', () => {
    mount(<ChatScreen/>)
})

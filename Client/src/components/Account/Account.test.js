import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

//component to test
import Account from './index'
import { shallowEqual } from 'recompose';
//shallow-render test
test('Account component renders to page', () => {
    shallowEqual(<Account/>)
})

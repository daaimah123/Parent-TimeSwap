import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

//component to test
import About from './components/About/index'
import { shallowEqual } from 'recompose';

// describe('About page renders', () => {
    test('renders to page', () => {
        shallowEqual(<About/>)
    })
// })


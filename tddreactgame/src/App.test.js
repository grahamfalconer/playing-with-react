import React from 'react';
import { shallow } from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });


import App from './App';

it('renders without crashing', () => {
  shallow(<App />)
})
it('App greets the person', () => {
  const wrapper = shallow(<App />)
  const tester = <h1>Hello</h1>
  expect(wrapper).toContainReact(tester)
})



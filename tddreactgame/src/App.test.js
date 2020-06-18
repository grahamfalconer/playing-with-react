import React from 'react';
import { shallow } from 'enzyme'
import App from './App';

it('renders without crashing', () => {
  shallow(<App />)
})

it('App greets the person', () => {
  const wrapper = shallow(<App />)
  const tester = <h1>Hello</h1>
  expect(wrapper).toContainReact(tester)
})



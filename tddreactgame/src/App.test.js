import React from 'react';
import { shallow } from 'enzyme'
import App from './App';

it('renders without crashing', () => {
  shallow(<App />)
})

it('Says Grahams Website on load', () => {
  const wrapper = shallow(<App />)
  const tester = <h1>Grahams Website</h1>
  expect(wrapper).toContainReact(tester)
})



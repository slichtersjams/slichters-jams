import * as React from 'react';
import App from './App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const app = shallow(
    <App/>
  );
  expect(app.text()).toContain("Welcome to Slichter's Jams");
});

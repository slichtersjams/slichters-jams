import * as React from 'react';
import App from './App';
import { render } from 'enzyme';

it('renders without crashing', () => {
  const app = render(
    <App/>
  );
  expect(app.text()).toContain("LET'S JAM");
});

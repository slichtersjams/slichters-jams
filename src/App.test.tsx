import * as React from 'react';
import * as enzyme from 'enzyme';
import App from './App';
import { render } from 'enzyme';

it('renders without crashing', () => {
  const app = render(
    <App/>
  );
  expect(app.text()).toContain("LET'S JAM");
});

describe('onJamChange', () => {
  it('should toggle jam modal', () => {
    const wrapper = enzyme.shallow(<App/>);
    let instance: any | undefined;
    instance = wrapper.instance();
    instance.onJamChange('', '');

    expect(instance.state.showJamModal).toEqual(true);
  });
});

describe('toggleJamModal', () => {
  it('should change the showJamModal state', () => {
    const wrapper = enzyme.shallow(<App/>);
    let instance: any | undefined;
    instance = wrapper.instance();
    instance.setState({showJamModal: true});
    instance.toggleJamModal();

    expect(instance.state.showJamModal).toEqual(false);
  });
});

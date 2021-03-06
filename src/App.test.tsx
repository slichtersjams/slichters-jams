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

  it('should store the jam image', () => {
    const wrapper = enzyme.shallow(<App/>);
    let instance: any | undefined;
    instance = wrapper.instance();
    const jamImg = 'http://somegif.com';
    instance.onJamChange('', '', jamImg);

    expect(instance.state.currentJamImg).toEqual(jamImg);

  })

  it('should store the jam text', () => {
    const wrapper = enzyme.shallow(<App/>);
    let instance: any | undefined;
    instance = wrapper.instance();
    const jamText = 'Not a jam';
    instance.onJamChange('', jamText, '');

    expect(instance.state.currentJamText).toEqual(jamText);

  })
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

import * as React from 'react';
import * as enzyme from 'enzyme';
import {JamModal} from "./jamModal";

describe('jamModal', () => {
  it('should render gif pointed at imgSrc', () => {
    let jamGif = 'http://somegif.com';
    const wrapper = enzyme.shallow(<JamModal show={true} imgSrc={jamGif} close={() => {}}/>);
    expect(wrapper.find('img').prop('src')).toEqual(jamGif);
  });

  it('should not render when show is false', () => {
    const wrapper = enzyme.shallow(<JamModal show={false} imgSrc={''} close={() => {}}/>);
    // const component = ReactDOM.findDOMNode(wrapper.instance());
    expect(wrapper.instance().render()).toBe(null);
  });

  it('should call close callback prop when clicked', () => {
    let got_called = false;
    const wrapper = enzyme.shallow(<JamModal show={true} imgSrc={''} close={() => {
      got_called = true;}
    }/>);

    wrapper.find('.backdrop').simulate( 'click');
    expect(got_called).toBe(true);
  });
});
import * as React from 'react';
import * as enzyme from 'enzyme';
import {JamModal} from "./jamModal";

describe('jamModal', () => {
  it('should render gif pointed at imgSrc', () => {
    let jamGif = 'http://somegif.com';
    const wrapper = enzyme.shallow(<JamModal show={true} imgSrc={jamGif} jamText={''} close={() => {}}/>);
    expect(wrapper.find('img').prop('src')).toEqual(jamGif);
  });

  it('should not render when show is false', () => {
    const wrapper = enzyme.shallow(<JamModal show={false} imgSrc={''} jamText={''} close={() => {}}/>);
    expect(wrapper.instance().render()).toBe(null);
  });

  it('should call close callback prop when clicked', () => {
    let gotCalled = false;
    const wrapper = enzyme.shallow(<JamModal show={true} jamText={''} imgSrc={''} close={() => {
      gotCalled = true;}
    }/>);

    wrapper.find('.backdrop').simulate( 'click');
    expect(gotCalled).toBe(true);
  });

  it('should render jam text', () => {
    const jamText: string = 'Not a jam';
    const wrapper = enzyme.shallow(<JamModal show={true} imgSrc={''} jamText={jamText} close={() => {}}/>);
    expect(wrapper.find('.jam-text').text()).toEqual(jamText);
  });
});
import * as React from 'react';
import * as enzyme from 'enzyme';
import {JamModal} from "./jamModal";

describe('jamModal', () => {
  it('should render gif pointed at imgSrc', () => {
    let jamGif = 'http://somegif.com';
    const wrapper = enzyme.shallow(<JamModal imgSrc={jamGif}/>);
    expect(wrapper.find('img').prop('src')).toEqual(jamGif);
  });
});
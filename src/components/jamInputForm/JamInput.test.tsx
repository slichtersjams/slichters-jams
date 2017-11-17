import * as React from 'react';
import * as enzyme from 'enzyme';
import {JamInput} from "./JamInput";

describe('JamInput', () => {
  describe('TextInput', () => {
    it('should set jam input string to default message', () => {
      const inputBox = enzyme.shallow(<JamInput defaultMessage='Enter a jam' onSubmit={(value => {})}/>);
      expect(inputBox.find(".jamInput").prop("placeholder")).toEqual('Enter a jam')
    });

    it('should update jamString on input change', () => {
      const wrapper = enzyme.shallow(<JamInput defaultMessage='Enter a jam' onSubmit={(value => {})} />);

      let newValue = 'My new value';
      wrapper.find('input').simulate('change', {target: {value: newValue}});
      expect(wrapper.instance().state.jamString).toEqual(newValue)
    });
  });

  describe('Submit button', () => {
    it('should render the submit button', () => {
      const jamInput = enzyme.shallow(<JamInput defaultMessage='Enter a jam' onSubmit={(value => {})} />);
      expect(jamInput.find('button').length).toEqual(1);
    });

    it('should call onSubmit callback prop when button is clicked', () => {
      let called_value = '';
      const wrapper = enzyme.shallow(<JamInput defaultMessage='Enter a jam' onSubmit={(value => {
        called_value = value
      })} />);
      wrapper.find('button').simulate( 'click');
      expect(called_value).toEqual('Enter a jam');
    })
  });
});



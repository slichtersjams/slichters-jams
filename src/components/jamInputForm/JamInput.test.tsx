import * as React from 'react';
import * as enzyme from 'enzyme';
import {spy} from 'sinon';
import {JamInput} from "./JamInput";

describe('JamInput', () => {
  describe('TextInput', () => {
    it('should set jam input string to default message', () => {
      const inputBox = enzyme.shallow(<JamInput defaultMessage='Enter a jam' />);
      expect(inputBox.find(".jamInput").prop("placeholder")).toEqual('Enter a jam')
    });

    it('should call input handler on input change with new input', () => {
      const onInputSpy = spy(JamInput.prototype, 'handleChange');

      const wrapper = enzyme.shallow(<JamInput defaultMessage='Enter a jam' />);

      let newValue = 'My new value';
      wrapper.find('input').simulate('change', {target: {value: newValue}});
      expect(onInputSpy.calledOnce).toBeTruthy();
      expect(onInputSpy.calledWith({target: {value: newValue}})).toBeTruthy();
    });

    it('should update jamString on input change', () => {
      const wrapper = enzyme.shallow(<JamInput defaultMessage='Enter a jam' />);

      let newValue = 'My new value';
      wrapper.find('input').simulate('change', {target: {value: newValue}});
      expect(wrapper.instance().state.jamString).toEqual(newValue)
    });
  });

  describe('Submit button', () => {
    it('should render the submit button', () => {
      const jamInput = enzyme.shallow(<JamInput defaultMessage='Enter a jam' />);
      expect(jamInput.find('button').length).toEqual(1);
    });


    it('should send jam stream with input box when button is clicked', () => {
      const onSubmitSpy = spy(JamInput.prototype, 'handleSubmit');

      const wrapper = enzyme.shallow(<JamInput defaultMessage='Enter a jam' />);
      wrapper.find('button').simulate( 'click');
      expect(onSubmitSpy.calledOnce).toBeTruthy();
      onSubmitSpy.restore();
    });
  });
});



import * as React from 'react';
import * as enzyme from 'enzyme';
import {JamInput} from "./JamInput";

it('should set jam input string to default message', () => {
  const inputBox = enzyme.shallow(<JamInput defaultMessage='Enter a jam' />);
  expect(inputBox.find(".jamInput").prop("placeholder")).toEqual('Enter a jam')
});

it('should render the submit button', () => {
  const jamInput = enzyme.shallow(<JamInput defaultMessage='Enter a jam' />);
  expect(jamInput.find('button').length).toEqual(1);
});
// it('should send jam stream with input box when button is clicked', () => {
//   const jamInput = enzyme.shallow(<JamInput defaultMessage='Enter a jam' />);
//   let newValue = 'My new value';
//   jamInput.find('input').simulate('change', {target: {value: newValue}});
//   jamInput.find('button').simulate( 'click');
//   expect(jamInput.find( '.test-results').first().text()).toEqual(newValue);
// });
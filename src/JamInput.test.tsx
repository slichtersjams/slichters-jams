import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as enzyme from 'enzyme';
import {JamInput} from "./JamInput";

it('should set jam input string to default message', () => {
  const inputBox = enzyme.shallow(<JamInput defaultMessage='Enter a jam' />);
  expect(inputBox.find(".jamInput").prop("placeholder")).toEqual('Enter a jam')
});
import * as React from 'react';
import * as enzyme from 'enzyme';
import {JamInput} from "./JamInput";
import * as fetchMock from "fetch-mock";

function flushPromises() {
  return new Promise(resolve => setImmediate(resolve));
}

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
    const mockJamResponse = 'Chunky Jam';
    const jamUrl = 'https://slichters-jams.appspot.com/?jamText=';
    fetchMock.mock(jamUrl + 'chunky-jelly', {
      body: 'Chunky Jam'
    });

    it('should render the submit button', () => {
      const jamInput = enzyme.shallow(<JamInput defaultMessage='Enter a jam' onSubmit={(value => {})} />);
      expect(jamInput.find('button').length).toEqual(1);
    });

    it('should call onSubmit callback prop when button is clicked', async () => {
      let actualJam = 'not called';
      let actualResult = 'not called';
      const wrapper = enzyme.shallow(<JamInput defaultMessage='chunky-jelly' onSubmit={((jam, result) => {
        actualJam = jam;
        actualResult = result;
      })} />);
      wrapper.find('button').simulate( 'click');
      await flushPromises();
      expect(actualJam).toEqual('chunky-jelly');
      expect(actualResult).toEqual(mockJamResponse);
    });

    it('should update jam text with api response', async () => {
        const jamInput = enzyme.shallow(<JamInput defaultMessage='chunky-jelly' onSubmit={(value => {})} />);

        // --strictNullChecks.... got heem!
        let instance: any | undefined;
        instance = jamInput.instance();

        await instance.handleSubmit();
        expect(jamInput.find('.jamText').text()).toEqual(mockJamResponse);
      });
  });
});



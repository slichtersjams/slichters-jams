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
      const inputBox = enzyme.shallow(<JamInput defaultMessage='Enter a jam' onSubmit={(value => {
      })}/>);
      expect(inputBox.find(".jamInput").prop("placeholder")).toEqual('Enter a jam')
    });

    it('should update jamString on input change', () => {
      const wrapper = enzyme.shallow(<JamInput defaultMessage='Enter a jam' onSubmit={(value => {
      })}/>);

      let newValue = 'My new value';
      wrapper.find('input').simulate('change', {target: {value: newValue}});
      expect(wrapper.instance().state.jamString).toEqual(newValue)
    });

    it('should call onSubmit callback prop when enter is pressed', async () => {
      let actualJam = 'not called';
      const wrapper = enzyme.shallow(<JamInput defaultMessage='chunky-jelly' onSubmit={((jam, result, img) => {
        actualJam = jam;
      })}/>);
      wrapper.find('input').simulate('keyUp', {key: 'Enter', keyCode: 13});
      await flushPromises();
      expect(actualJam).toEqual('chunky-jelly');
    });

  });

  describe('Submit button', () => {
    const jamGif = 'https://media.giphy.com/media/d1ELBcZCFmuWs/giphy.gif';
    const missingGif = 'https://media3.giphy.com/media/xT0BKmtQGLbumr5RCM/giphy.gif';
    const jamText = 'Jam!';
    const mockJamResponse = {JamState: true, JamText: jamText, JamGif: jamGif};
    const jamUrl = 'https://slichters-jams.appspot.com/?jamText=';
    fetchMock.mock(jamUrl + 'chunky-jelly',
      mockJamResponse
    );

    it('should render the submit button', () => {
      const jamInput = enzyme.shallow(<JamInput defaultMessage='Enter a jam' onSubmit={(value => {
      })}/>);
      expect(jamInput.find('button').length).toEqual(1);
    });

    it('should call onSubmit callback prop when button is clicked', async () => {
      let actualJam = 'not called';
      let actualResult = 'not called';
      let actualImg = 'not called';
      const wrapper = enzyme.shallow(<JamInput defaultMessage='chunky-jelly' onSubmit={((jam, result, img) => {
        actualJam = jam;
        actualResult = result;
        actualImg = img;
      })}/>);
      wrapper.find('button').simulate('click');
      await flushPromises();
      expect(actualJam).toEqual('chunky-jelly');
      expect(actualResult).toEqual(jamText);
      expect(actualImg).toEqual(jamGif);
    });

    it('should call onSubmit callback prop with missing data message on bad request', async () => {
      let actualJam = 'not called';
      let actualResult = 'not called';
      let actualImg = 'not called';
      fetchMock.mock(jamUrl + 'chunky-jam',{status:400, body: 'Bad Request'});

      const wrapper = enzyme.shallow(<JamInput defaultMessage='chunky-jam' onSubmit={((jam, result, img) => {
        actualJam = jam;
        actualResult = result;
        actualImg = img;
      })}/>);
      wrapper.find('button').simulate('click');
      await flushPromises();
      expect(actualJam).toEqual('chunky-jam');
      expect(actualResult).toEqual('Bad Request');
      expect(actualImg).toEqual(missingGif);
    })
  });
});



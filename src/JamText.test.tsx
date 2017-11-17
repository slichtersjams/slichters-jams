import * as React from 'react';
import * as enzyme from 'enzyme';
import * as fetchMock from 'fetch-mock';
import {JamText} from './JamText';

const mockJamResponse = 'Chunky Jam';
const jamUrl = 'https://slichters-jams.appspot.com/?jamText=';

it('should call api on jam change', async () => {
  fetchMock.mock(jamUrl + 'chunky-jelly', {
    body: 'Chunky Jam'
  });
  const jamTextWrapper = enzyme.shallow(<JamText/>);

  // --strictNullChecks.... got heem!
  let instance: any | undefined;
  instance = jamTextWrapper.instance();

  await instance.newJam('chunky-jelly');
  expect(jamTextWrapper.find('.jamText').text()).toEqual(mockJamResponse);
});


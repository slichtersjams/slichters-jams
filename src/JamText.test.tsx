import * as React from 'react';
import * as enzyme from 'enzyme';
import * as fetchMock from 'fetch-mock';
import { JamText } from './JamText';

const mockJamResponse = 'Some awesome Jam text ffs';
const jamUrl = 'https://slichters-jams.appspot.com';

it('should display API response text', async () => {
    fetchMock.mock(jamUrl, {
        body: mockJamResponse
    });

    const jamTextWrapper = enzyme.mount(<JamText />);
    // Shallow rendering this comoponent returns a null instance. Wat the crap?
    await jamTextWrapper.instance().componentDidMount();

    expect(jamTextWrapper.find('.jamText').text()).toEqual(mockJamResponse);
});

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

    // Shallow rendering this comoponent returns a null instance. Wat the crap?
    // So... for the time being do a full mount
    const jamTextWrapper = enzyme.mount(<JamText />);

    // --strictNullChecks.... got heem!
    let instance: any | undefined;
    instance = jamTextWrapper.instance();
    await instance.componentDidMount();

    expect(jamTextWrapper.find('.jamText').text()).toEqual(mockJamResponse);
});

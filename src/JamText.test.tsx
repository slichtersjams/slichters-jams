import * as React from 'react';
import * as enzyme from 'enzyme';
import * as fetchMock from 'fetch-mock';
import {JamText} from "./JamText";

const mockJamResponse = 'Some awesome Jam text ffs';
const jamUrl = 'https://slichters-jams.appspot.com';

it('should display API response text', () => {
    fetchMock.mock(jamUrl, {
        body: mockJamResponse
    });
    const jamOutput = enzyme.mount(<JamText/>);
    expect(jamOutput.find(".jamText").text()).toEqual('some awesome Jam text');
    console.log("Restoring fetch");
});

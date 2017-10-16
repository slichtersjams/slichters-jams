///<reference path="interfaces.d.ts"/>
import * as React from 'react';

export class JamText extends React.Component<IJamProps, IJamState> {
    constructor(props: IJamProps) {
        super(props);
        this.state = {jamText: ''};
    }

    public componentDidMount() {
        return fetch('https://slichters-jams.appspot.com').then((response: Response) => {
            return response.text();
        }).then( (value: string) => {
            this.setState({jamText: value});
        });
    }

    public render() {
        return (
            <h3 className="jamText">{this.state.jamText}</h3>
        );
    }
}

///<reference path="interfaces.d.ts"/>
import * as React from 'react';

export class JamText extends React.Component<IJamProps, IJamState> {
    constructor(props: IJamProps) {
        super(props);
        this.state = {jamText: ''};
    }

    public componentDidMount() {
        fetch('https://slichters-jams.appspot.com').then((response: Response) => {
            console.log('Got a response');
            return response.text();
        }).then( (value: string) => {
            console.log(value);
            this.setState({jamText: value});
        });
    }

    public render() {
        console.log('Rendering######')
        return (
            <h3 className="jamText">{this.state.jamText}</h3>
        );
    }
}

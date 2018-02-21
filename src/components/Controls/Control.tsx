import * as React from 'react';

interface Props {
    resetClicked: (ev: React.MouseEvent<HTMLButtonElement>) => void;
    startClicked: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

export class Controls extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return(
            <div>
                <button className="Start" onClick={this.props.startClicked}>Start Game!</button>
                <button className="Reset" onClick={this.props.resetClicked}>Start Game!</button>
            </div>
        );
    }
}
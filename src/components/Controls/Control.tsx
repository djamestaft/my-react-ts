import * as React from 'react';
import Button from 'material-ui/Button';
import './Control.css';
import Typography from 'material-ui/Typography';

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
                <Typography variant="display1">
                    Game Controls
                </Typography>
                <div className="controls">
                    <Button variant="raised" color="primary" onClick={this.props.startClicked}>Start Race</Button>
                    <Button variant="raised" color="secondary" onClick={this.props.resetClicked}>Reset Race</Button>
                </div>
            </div>
        );
    }
}
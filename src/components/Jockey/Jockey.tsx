import * as React from 'react';
import './Jockey.css';
import { LinearProgress } from 'material-ui/Progress';

interface Props {
    name: string;
    callback: Function;
    avatar: string;
    color: string;
}

interface State {
    interval: number;
    progress: number;
}

export class Jockey extends React.Component<Props, State> {
    private intervalId: number;
    constructor(props: Props) {
        super(props);
        this.state = {
            interval: Math.floor(Math.random() * 500) + 100,
            progress: 0,
        };
    }

    componentDidMount() {
        this.intervalId = window.setInterval(this.timer, this.state.interval);
        window.console.log(this.intervalId);
    }

    timer = () => {
        const { callback } = this.props;
        if (this.state.progress !== 100) {
            this.setState({ progress: this.state.progress + 1 });
        } else {
            if (callback) {
                callback(this.state.progress, this.props.name);
            }
        }
    }

    render() {
        return (
            <div>
                <div className="jockey">
                    <img src={this.props.avatar} alt="The Jockey" />
                </div>
                <div className="jockey-details">
                    <LinearProgress variant="determinate" value={this.state.progress}/>
                    <h5>{this.props.name}</h5>
                </div>
            </div>
        );
    }
}
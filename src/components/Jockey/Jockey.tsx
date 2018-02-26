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
    finished: boolean;
}

export class Jockey extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            interval: Math.floor(Math.random() * 50) + 10,
            progress: 0,
            finished: false
        };
    }

    componentDidMount() {
        setInterval(this.timer, this.state.interval);
    }

    timer = () => {
        const { callback } = this.props;
        const { progress, finished } = this.state;
        if (this.state.progress !== 100) {
            this.setState({ progress: progress + 1 });
        } else if (progress === 100 && finished === false) {
            this.setState({ finished: true });
            if (callback) {
                callback(progress, this.props.name);
            }
            window.console.log(progress);
        }
    }

    render() {
        return (
            <div>
                <div className="jockey">
                    <img src={this.props.avatar} alt="The Jockey" />
                </div>
                <div className="jockey-details">
                    <LinearProgress variant="determinate" value={this.state.progress} />
                    <h5>{this.props.name}</h5>
                </div>
            </div>
        );
    }
}
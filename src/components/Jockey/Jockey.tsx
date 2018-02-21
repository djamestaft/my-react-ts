import * as React from 'react';
import './Jockey.css';

interface Props {
    name: string;
    callback: Function;
    avatar: string;
    color: string;
}

interface State {
    interval: number;
    progress: number;
    name: string;
}

export class Jockey extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            interval: Math.floor(Math.random() * 50) + 10,
            progress: 0,
            name: this.props.name
        };
    }

    componentDidMount() {
        setInterval(this.timer, this.state.interval);
    }

    timer = () => {
        const { callback } = this.props;
        if (this.state.progress !== 100) {
            this.setState({ progress: this.state.progress + 0.001 });
        } else {
            if (callback) {
                callback(this.state.progress, this.state.name);
            }
        }
    }

    render() {
        return (
            <div>
                <div className="Jockey" >
                    <img src={this.props.avatar} alt="The Jockey" />
                    <progress
                        value={this.state.progress}
                        color={this.props.color}
                    />
                    <h5>{this.state.name}</h5>
                </div>
            </div>
        );
    }
}
import * as React from 'react';
import './Race.css';
import { Jockey } from '../Jockey';
import { PersonInterface } from '../../utils/interfaces/Person';
import Typography from 'material-ui/Typography';

// Interfaces for Props
interface Props {
    raceWinnerCallback: Function;
    gameStarted: boolean;
    trackRacers: Array<object>;
}

export class Race extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
        this.callback = this.callback.bind(this);
    }
    
    callback(progress: number, winnerName: string) {
        if (progress === 100) {
            let winner = this.props.trackRacers.find((login) => {
                return winnerName = name;
            });
            this.props.raceWinnerCallback(winner);
        }
    }
    
    render() {
        if (this.props.gameStarted) {
            return (
                <div>
                {
                    this.props.trackRacers.map((person: PersonInterface, i: number) => {
                        return (
                            <Jockey
                                key={i}
                                avatar={person.avatar_url}
                                color={'#E57373'}
                                callback={this.callback}
                                name={person.login}
                            />
                        );
                    })
                }
            </div>
        );
    } else {
        return (
            <Typography variant="display2">
                Click "START RACE" to start the game
            </Typography>
        );
    }
}
}
import * as React from 'react';
import './Race.css';
import { Jockey } from '../Jockey';
const jsonData = require('../../team.json');
import { PersonInterface } from './interfaces/Person';
import { shufflearray, selectFirstFive } from '../../utils/ArrayUtilities';
import Typography from 'material-ui/Typography';

// Interfaces for Race component
interface Props {
    raceWinnerCallback: Function;
    gameStarted: boolean;
}

interface State {
    arrayJockeys: Array<object>;
}

// Abstracted utils method
const shuffledArray: Array<object> = shufflearray(jsonData);
const randoms: Array<object> = selectFirstFive(shuffledArray);

export class Race extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.callback = this.callback.bind(this);
        this.resetHandler = this.resetHandler.bind(this);
        
        // Assign randoms array to arrayJockey for Race
        this.state = {
            arrayJockeys: randoms.map((person: PersonInterface, i: number) => (
                { name: person.login, avatar_url: person.avatar_url, complete: false, color: '#E57373' }
            ))
        };
    }
    
    callback(progress: number, winnerName: string) {
        if (progress === 100) {
            let winner = this.state.arrayJockeys.find((login) => {
                return winnerName = name;
            });
            this.props.raceWinnerCallback(winner);
        }
    }
    
    // Method to select new racers when game is reset
    resetHandler() {
        const shuffleArray: Array<object> = shufflearray(jsonData);
        const newRandoms: Array<object> = selectFirstFive(shuffleArray);
        
        this.setState({
            arrayJockeys: newRandoms.map((person: PersonInterface, i: number) => (
                { name: person.login, avatar_url: person.avatar_url, complete: false, color: '#E57373' }
            ))
        });
    }
    
    render() {
        if (this.props.gameStarted) {
            return (
                <div>
                {
                    this.state.arrayJockeys.map((person: PersonInterface, i: number) => {
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
                Click "START GAME" to start the game
              </Typography>
        );
    }
}
}
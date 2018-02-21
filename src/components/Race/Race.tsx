import * as React from 'react';
import './Race.css';
import { Jockey } from '../Jockey';
const jsonData = require('../../team.json');
import { PersonInterface } from './interfaces/Person';
import { shufflearray, selectFirstFive } from '../../utils/ArrayUtilities';

interface Props {
    raceWinnerCallback: Function;
    gameStarted: boolean;
}

interface State {
    arrayJockeys: Array<object>;
}

const shuffledArray: Array<object> = shufflearray(jsonData);
const randoms: Array<object> = selectFirstFive(shuffledArray);

export class Race extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.callback = this.callback.bind(this);

        // assign randoms array to arrayJockey for Race
        this.state = {
            arrayJockeys: randoms.map((person: PersonInterface, i: number) => (
                {name: person.login, avatar_url: person.avatar_url, complete: false, color: '#E57373'}
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
    
    render() {
        if (this.props.gameStarted) {            
            return (
                <div>
                    { 
                    this.state.arrayJockeys.map((person: PersonInterface, i: number ) => {
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
                <h1>Start the race by clicking the "Start Race" button!</h1>
            );
        }
    }
}
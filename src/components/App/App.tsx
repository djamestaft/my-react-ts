import * as React from 'react';
import { Race } from '../Race';
import './App.css';
import { Controls } from '../Controls';

interface Props {
}

interface State {
    sampleStateProp?: string;
    gameStarted: boolean;
    gameFinished: boolean;
    winner?: string;
}

export class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { 
            gameStarted: false,
            gameFinished: false,
            winner: ''
        };

        this.startBtnHandler = this.startBtnHandler.bind(this);
        this.resetBtnHandler = this.resetBtnHandler.bind(this);
        this.handleRaceWinner = this.handleRaceWinner.bind(this);
        
    }

    handleRaceWinner() {
        this.setState({ winner: 'test' });
    }

    startBtnHandler() {
        this.setState({gameStarted: true});
    }
    
    resetBtnHandler() {
        this.setState({gameStarted: false});
    }
    
    render() {
        return (
            <div className="App" >
                <div className="Track">
                    <Race raceWinnerCallback={this.handleRaceWinner} gameStarted={this.state.gameStarted} />
                    {this.state.winner && <p>{this.state.winner}</p>}
                </div>
                <Controls startClicked={this.startBtnHandler} resetClicked={this.resetBtnHandler}/>
            </div>
        );
    }
}
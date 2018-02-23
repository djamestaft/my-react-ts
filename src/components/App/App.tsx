import * as React from 'react';
import { Race } from '../Race';
import './App.css';
import { Controls } from '../Controls';
import Card from 'material-ui/Card';
import { selectNewRacers } from '../../utils/ArrayUtilities';

interface Props {
}

interface State {
    sampleStateProp?: string;
    gameStarted: boolean;
    gameFinished: boolean;
    trackRacers: Array<object>;
    winner?: string;
}

export class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = { 
            gameStarted: false,
            gameFinished: false,
            winner: '',
            trackRacers: selectNewRacers()
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
        this.setState({trackRacers: selectNewRacers()});
        
    }
    
    render() {
        return (
            <div className="App" >
                <div className="Track">
                    <Card className="TrackCard">
                        <Race 
                            raceWinnerCallback={this.handleRaceWinner} 
                            gameStarted={this.state.gameStarted}
                            trackRacers={this.state.trackRacers} 
                        />
                    </Card>
                </div>
                <Controls startClicked={this.startBtnHandler} resetClicked={this.resetBtnHandler}/>
            </div>
        );
    }
}
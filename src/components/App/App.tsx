import * as React from 'react';
import { Race } from '../Race';
import './App.css';
import { Controls } from '../Controls';
import Card from 'material-ui/Card';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import { selectNewRacers } from '../../utils/ArrayUtilities';

interface Props {
}

interface State {
    sampleStateProp?: string;
    gameStarted: boolean;
    gameFinished: boolean;
    trackRacers: Array<object>;
    rankings?: Array<string>;
}

export class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = { 
            gameStarted: false,
            gameFinished: false,
            rankings: [],
            trackRacers: selectNewRacers()
        };

        this.startBtnHandler = this.startBtnHandler.bind(this);
        this.resetBtnHandler = this.resetBtnHandler.bind(this);
        this.handleRankings = this.handleRankings.bind(this);
        this.renderScoreboard = this.renderScoreboard.bind(this);
    }

    handleRankings(addition: string) {
        const { rankings, trackRacers } = this.state;
        if (rankings) {
            if (!rankings.includes(addition)) {
                this.setState({ rankings: [...rankings, addition] });
                window.console.log(this.state.rankings);
            }
            // Finish game when all racers have finished
            if (rankings.length === trackRacers.length) {
                this.setState({ gameFinished: true });
            }
        }
    }

    startBtnHandler() {
        this.setState({gameStarted: true});
    }
    
    resetBtnHandler() {
        window.console.log('reseting');
        this.setState({rankings: []});
        this.setState({gameStarted: false});
        this.setState({gameFinished: true});
        this.setState({trackRacers: selectNewRacers()});
    }
    
    renderWinner() {
        const { rankings } = this.state;
        return (rankings && rankings.length > 0) && <h3>Winner: {rankings[0]}</h3>;
    }

    renderScoreboard() {
        const { rankings, trackRacers } = this.state;
        if (rankings && rankings.length === trackRacers.length) {
           return (
           <Paper>
            <Table>
                <TableHead>
                <TableRow>
                    <TableCell numeric={true}>Position</TableCell>
                    <TableCell>Racer Name</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rankings.map((r: string, i: number) => {
                    return (
                    <TableRow key={i}>
                        <TableCell>{i + 1}</TableCell>
                        <TableCell numeric={true}>{r}</TableCell>
                    </TableRow>
                    );
                })}
                </TableBody>
            </Table>
            </Paper>
           );
        } else {
            return null;
        }
    }
    
    render() {
        const { rankings, trackRacers } = this.state;
        return (
            <div className="App" >
                {
                    (rankings && rankings.length === trackRacers.length)
                        ? this.renderScoreboard()
                        : (
                        <div className="Track">
                            <Card className="TrackCard">
                                <Race 
                                    raceWinnerCallback={this.handleRankings} 
                                    gameStarted={this.state.gameStarted}
                                    trackRacers={this.state.trackRacers} 
                                />
                            </Card>
                            {this.renderWinner()}
                        </div>
                    ) 
                } 
                <Controls startClicked={this.startBtnHandler} resetClicked={this.resetBtnHandler}/>
            </div>
        );
    }
}
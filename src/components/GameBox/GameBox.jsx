import { Component } from "react";
import GameBoxEntry from "../GameBoxEntry";
import ArrowUp from "../ArrowUp";
import ArrowDown from "../ArrowDown";

export default class GameBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scores: [],
            expanded: true
        }
    }

    toggleExpanded = () => {
        this.setState = ({
            expanded: !this.state.expanded
        })
    }

    componentDidMount () {
        this.getGames();
    }

    getGames = () => {
        fetch('http://localhost:3001/rest/fake/games/pacman', {
            method: 'GET',
            // headers: {
            //     'Content-Type': 'application/json',
            // },
            // body: JSON.stringify(data)
        }).then(response => {
            response.json().then(data => {
                this.setState({
                    scores: data.scores
                })
            });
        });
    }

    render() {
        return (
            <div className="card game-box">
                <div className="card-header">
                    <div className="float-start">
                        <h4 className="game-title mt-2">{this.props.gameName}</h4>
                        {this.state.scores.length > 0 && <span className="player-name">{this.state.scores[0].player}</span>}
                    </div>
                    {this.state.scores.length > 0 &&
                        <div className="float-end mt-2 game-best-score">
                            <h5>HighScore</h5>
                            <span>{this.state.scores[0].score}</span>
                        </div>
                    }
                </div>
                    <div className="card-body high-scores-background">
                        {this.state.expanded &&
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Player</th>
                                    <th scope="col">Time</th>
                                    <th scope="col">HighScore</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.scores.map((score, index) => {
                                        return <GameBoxEntry key={index} id={index+1} player={score.player} time={score.time} score={score.score} />
                                    })
                                }
                            </tbody>
                        </table>
                        }
                    </div>
                <div className="card-footer d-grid m-0 p-0">
                    <div className="col-1 mx-auto d-flex justify-content-center">
                        {this.state.expanded ? <ArrowUp toggleExpanded={this.toggleExpanded}/> : <ArrowDown toggleExpanded={this.toggleExpanded} />}
                    </div>
                </div>
            </div>
        )
    }
}
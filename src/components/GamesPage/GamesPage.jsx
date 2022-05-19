import { Component } from "react";
import GameBox from "../GameBox";
import Header from "../Header";
import NavBar from "../NavBar";
import SearchForm from "../SearchForm";

export default class GamesPage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            games: [],
            filterName: "",
            filteredGames: []
        }
    }

    loadGameList = () => {
        fetch('http://localhost:3001/rest/fake/games', {
            method: 'GET',
        }).then(response => {
            response.json().then(data => {
                this.setState({
                    games: data
                })
            });
        });
    }

    componentDidMount() {
        this.loadGameList();
    }

    findGame = (name) => {
        this.setState({
            filterName: name
        })
    }

    renderCompleteGameList = () => {
        // return filtered list
    }

    render () {
        return(
            <div id="games-page">
                <Header title="Games"/>
                <div className="container content m-bottom">
                    <SearchForm placeholder="Find game" label="name" searchFunction={this.findGame} />
                    {this.filterName != null ?
                        this.state.games.filter(game => {
                            if (game.name == this.state.filterName) {
                                return game;
                            }
                        }).map(game => {
                            return <GameBox key={game.id} gameName={game.name} />
                        }):
                        this.state.games.map(game => {
                            return <GameBox key={game.id} gameName={game.name} />
                        })
                    }
                </div>
                <NavBar goToPage={this.props.goToPage}/>
            </div>
        )
    }
}
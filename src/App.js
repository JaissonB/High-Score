import './App.css';
import React, { Component } from 'react';
import GamesPage from './components/GamesPage';
import HighScorePage from './components/HighScorePage';
import PlayersPage from './components/PlayersPage';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gamesPage: 'games',
      playersPage: 'players',
      highScorePage: 'highScore',
      actualPage: 'games',
    };
    this.goToPage = this.goToPage.bind(this);
  }

  goToPage = function (pageName) {
    console.log(this)
    this.setState({
      actualPage: pageName
    })
  }

  render () {
    return (
      <>
        {this.state.actualPage === this.state.gamesPage && <GamesPage name={this.state.gamesPage} goToPage={this.goToPage} />}
        {this.state.actualPage === this.state.highScorePage && <HighScorePage name={this.state.highScorePage} goToPage={this.goToPage} />}
        {this.state.actualPage === this.state.playersPage && <PlayersPage name={this.state.playersPage} goToPage={this.goToPage} />}
      </>
    );
  }
}

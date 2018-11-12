import React, { Component } from 'react';
import './App.css';
import InitiativeList from './InitiativeList';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div id="logoHolder"><img src={require("./d20.png")} className="logo" alt="dice" /></div>
      <h1>roll for initiative!</h1>
      <div className="intro">
      initiative tracker for any tabletop roleplaying game made by <a href="https://github.com/meiyeezy">meiyeezy</a>. 
      characters are sorted automatically by highest initiative. both enemies and allies can be 'downed' by clicking on them. 
      source code is <a href="https://github.com/meiyeezy/rollfor">here</a>. roll high!
      </div>
        <InitiativeList />
      </div>
    );
  }
}

export default App;
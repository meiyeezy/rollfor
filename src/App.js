import React, { Component } from 'react';
import './App.css';
import D20 from './D20.js';
import InitiativeList from './InitiativeList';

class App extends Component {
  render() {
    return (
      <div className="App">
      <D20 />
      <h1>roll for initiative!</h1>
      <div className="intro">
      initiative tracker for any tabletop roleplaying game made in reactJS by <a href="https://github.com/meiyeezy">meiyeezy</a>. 
      characters are sorted automatically by highest initiative. both enemies and allies can be 'downed' by clicking on them. click on the dice for a random initiative.
      source code is <a href="https://github.com/meiyeezy/rollfor">here</a>. roll high!
      </div>
        <InitiativeList />
      </div>
    );
  }
}

export default App;
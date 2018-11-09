import React, { Component } from 'react';
import './App.css';
import InitiativeList from './InitiativeList';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div id="logoHolder"><img src={require("./d20.png")} className="logo" alt="dice" /></div>
      <h1>roll for initiative!</h1>
        <InitiativeList />
      </div>
    );
  }
}

export default App;
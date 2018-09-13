import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterCard from './CharacterCard';

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <CharacterCard value="H"/>
        <CharacterCard value="e"/>
        <CharacterCard value="l"/>
        <CharacterCard value="l"/>
        <CharacterCard value="o"/>
      
      </div>
    );
  }
}

export default App;

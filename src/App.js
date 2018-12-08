import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter/Counter';
import Button from './Button/Button';
import DynamicText from './DynamicText/DynamicText';
import Filter from './Filter/Filter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Code Challenge-1-Counter</h1>
        <Counter />
        <h1>Code Challenge-2-Scrolling</h1>
        <DynamicText />
        <h1>Code Challenge-3-List</h1>
        <Filter />
      </div>
    );
  }
}

export default App;

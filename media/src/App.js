import React, { Component } from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Words from './Component/Words/Words';
import './Component/Words/Words';
import Button from './Component/Button/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Words />
        <Button />
      </div>
    );
  }
}

export default App;

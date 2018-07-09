import React, { Component } from 'react';
import './App.css';
import { PhonProcessor } from './PhonProcessor';
import { Header } from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <PhonProcessor />
      </div>
    );
  }
}

export default App;

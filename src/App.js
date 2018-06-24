import React, { Component } from 'react';
import './App.css';
import { FeaturePicker } from './FeaturePicker';
import { ValuePicker } from './ValuePicker';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ValuePicker />
        <FeaturePicker />
      </div>
    );
  }
}

export default App;

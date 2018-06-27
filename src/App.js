import React, { Component } from 'react';
import './App.css';
import { FeaturePicker } from './FeaturePicker';
import { ValuePicker } from './ValuePicker';
import { AddFeatureButton } from './AddFeature';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ValuePicker />
        <FeaturePicker />
        <AddFeatureButton />
      </div>
    );
  }
}

export default App;

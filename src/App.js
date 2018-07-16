import React, { Component } from 'react';
import { Header } from './Header';
import { Home } from './Home';
import { PickInventory } from './PickInventory';
import { PhonProcessor } from './PhonProcessor';
import { Difference } from './Difference';
import { Switch, Route } from 'react-router-dom';


class App extends Component {

  state = {
    inventory: []
  }

  toggleSegmentSelection(ipa) {
    if (!this.state.inventory.includes(ipa)) {
      this.setState({
        inventory: this.state.inventory.concat([ipa])
      });
    } else {
      let inv = this.state.inventory.filter(x => x !== ipa);
      this.setState({
        inventory: inv
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Header inventory={this.state.inventory} />
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/inventory' render={props => <PickInventory toggleSegmentSelection={this.toggleSegmentSelection.bind(this)} inventory={this.state.inventory} />} />
            <Route path='/processor' render={props => <PhonProcessor inventory={this.state.inventory} />} />
            <Route path='/difference' render={props => <Difference inventory={this.state.inventory} />} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;

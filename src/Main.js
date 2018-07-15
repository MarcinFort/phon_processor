import React from 'react';
import { Home } from './Home';
import { PhonProcessor } from './PhonProcessor';
import { Difference } from './Difference';
import { Switch, Route } from 'react-router-dom';
export const Main = (props) => (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/processor' render={props => <PhonProcessor inventory={props.inventory || []} toggleSegmentSelection={props.toggleSegmentSelection}/>} />
        <Route path='/difference' component={Difference}/>
      </Switch>
    </main>
  )
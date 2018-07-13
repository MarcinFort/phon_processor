import React from 'react';
import { Home } from './Home';
import { PickInventory } from './PickInventory';
import { PhonProcessor } from './PhonProcessor';
import { Difference } from './Difference';
import { Switch, Route } from 'react-router-dom';

export const Main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/inventory' component={PickInventory}/>
        <Route path='/processor' component={PhonProcessor}/>
        <Route path='/difference' component={Difference}/>
      </Switch>
    </main>
  )
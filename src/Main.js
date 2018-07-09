import React from 'react';
import { PhonProcessor } from './PhonProcessor';
import { Switch, Route } from 'react-router-dom';

export const Main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/processor' component={PhonProcessor}/>
        <Route path='/difference' component={Difference}/>
      </Switch>
    </main> 
  )
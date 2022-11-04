import React from 'react';
import page14 from './page14';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App(){
  return (
    <Router>
      <div className=''>
        <Switch>
          <Route path="/">
            <page14 />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App
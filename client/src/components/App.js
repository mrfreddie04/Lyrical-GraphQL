import React from 'react';
import { Router, Route, Switch } from "react-router-dom";

import history from "../history";
import SongList from './SongList';
import SongCreate from './SongCreate';
import SongDetail from './SongDetail';

const App =  () => {
  return (
    <div className="container">
      <Router history={history}> 
        <Switch>
          <Route path="/" exact component={SongList} />
          <Route path="/songs/new" exact component={SongCreate} />
          <Route path="/songs/:id" exact component={SongDetail} />
        </Switch>  
      </Router>       
    </div>
  )
};

export default App;
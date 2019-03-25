import React, { Component } from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

// ---- pages
import Header from './components/header';
import Login from './container/login';

// ----contexts
class App extends Component {


  render() {
    return (
      <HashRouter>
       <Route path='/' component={ Header } />
          <Switch>
              <Route path= '/login' exact component={Login} />
          </Switch>
      </HashRouter>

    )
  }
}

export default App;

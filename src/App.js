import React, { Component } from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

// ---- pages
import Header from './components/header';
import Login from './container/login';
import SignUp from './container/signup';
import Logout from './container/signout';

// ----contexts


class App extends Component {


  render() {
    return (
      <HashRouter>
       <Route path='/' component={ Header } />
          <Switch>
              <Route path= '/login' exact component={Login} />
              <Route path= "/signup" exact component={SignUp} />
              <Route path= "/logout" exact component ={Logout} />
          </Switch>
      </HashRouter>

    )
  }
}

export default App;

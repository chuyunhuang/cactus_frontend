import React, { Component } from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import firebase from './firebase';

// ---- pages
import Header from './components/header';
import Login from './container/login';
import SignUp from './container/signup';
import Logout from './container/signout';

// ----contexts
import AuthContext from './context/auth';

class App extends Component {

  state={
    user: null
  }

  componentDidMount(){
    this.unsubscribe = firebase.auth().onAuthStateChanged((user=>{
      if (user){
        this.setState({user})
      }
      else{
        this.setState({user: null})
      }
    }))
  }

  componentWillUnmount(){
    this.unsubscribe()
  }

  render() {
    return (
      <HashRouter>
        <AuthContext.Provider value={this.state.user}>
          <Route path='/' component={Header} />
          <Switch>
            <Route path='/login' exact component={Login} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/logout" exact component={Logout} />
          </Switch>
        </AuthContext.Provider>
      </HashRouter>

    )
  }
}

export default App;

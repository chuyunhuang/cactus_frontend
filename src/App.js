import React, { Component } from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import firebase from './firebase';

// ---- pages
import Header from './components/header';
import Home from './container/home';
import Login from './container/login';
import SignUp from './container/signup';
import Logout from './container/signout';
import Search from './container/search';

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
            <Route path ="/" exact component={Home} />
            <Route path='/login' exact component={Login} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/logout" exact component={Logout} />
            <Route path="/search" exact component={Search} />
          </Switch>
        </AuthContext.Provider>
      </HashRouter>

    )
  }
}

export default App;

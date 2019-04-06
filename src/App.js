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
import Follower from './components/follower';
import Following from './components/following';
import Notification from './components/notification';
import Newsfeed from './container/newsfeed';
import UserPage from './container/userpage';
import EditUser from './container/editUser';
import CreatePost from './container/createPost';

// ----contexts
import AuthContext from './context/auth';

class App extends Component {

  state={
    user: null, 
    userId: null, 
  }
  
  componentDidMount(){
    this.unsubscribe = firebase.auth().onAuthStateChanged((user=>{
      if (user){
        this.setState({user: user,userId: user.uid})
      }
      else{
        this.setState({user: null, userId: null})
      }
    }))
  }

  componentWillUnmount(){
    this.unsubscribe()
  }


  render() {
    
    return ( this.state.user ?
      <HashRouter>
        <AuthContext.Provider value={this.state.user}>
          <Route path='/' component={Header} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path='/login' exact component={Login} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/logout" exact component={Logout} />
            <Route path="/search" exact component={Search} />
            <Route path="/follower" exact component={Follower} />
            <Route path="/following" exact component={Following} />
            <Route path="/notification" exact component={Notification} />
            <Route path="/newsfeed" exact component={Newsfeed} />
            <Route path="/mypage" render={(props) => <UserPage {...props} user={this.state.user} />} />
            {/* <Route path="/mypage" exact component={UserPage} /> */}
            <Route path="/profile" exact component={EditUser} />
            <Route path="/createpost" exact component={CreatePost}/>
          </Switch>
        </AuthContext.Provider>
      </HashRouter> : <>Loading...</>

    )
  }
}

export default App;

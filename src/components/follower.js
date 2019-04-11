import React from 'react';
import './style/follower.css';
import * as firebase from 'firebase';
import axios from 'axios'

import SideNav from './sideNav';

//to get who follows the logged in user
//by passing logged in user uid and getting the follower_id
class Follower extends React.Component {
  state = {
    user: '',
    userId: '',
    follower: []
  }
  componentDidMount(){
    this.unsubscribe = firebase.auth().onAuthStateChanged((user=>{
      if (user){
        this.setState({
          user: user,  
          userId: user.uid
      }, ()=>{
        axios({
          url: `http://localhost:3100/follower/${this.state.userId}`,
          method: 'get'
        })
        .then((data)=>{
          console.log('my follower here', data)
        })
      })
      }
      else{
        this.setState({user: null})
      }
    }))
  }

  render() {
    return (
      <>
      <h1>These people are stalking me...</h1>
        <div className="follower-page">
            <div className="card-wrapper">
                
                
            </div>
        </div>
      <SideNav />
      </>
    )
  }


}

export default Follower;
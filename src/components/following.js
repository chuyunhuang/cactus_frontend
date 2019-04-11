import React from 'react';
import './style/follower.css';
import * as firebase from 'firebase';
import axios from 'axios';

import SideNav from './sideNav';
import FollowerCard from './followerCard';

//to get the logged in user's following 
//by passing logged in user_uid
class Following extends React.Component {

  state = {
    user: '',
    userId: '',
    following: []
  }

  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged((user => {
      if (user) {
        this.setState({
          user: user,
          userId: user.uid
        },
          () => {
            axios({
              url: `http://localhost:3100/follower/${this.state.userId}`,
              method: 'get',
            })
              .then((data) => {
                this.setState({
                  following: data.data.following
                })
              })
          })
      }
      else {
        this.setState({ user: null, userId: null })
      }
    })
    )
  }

  render() {
    console.log('inside render', this.state)
    return (
      <>
        <h1>Currently Following...</h1>
        <div className="follower-page">
        
            {/* {this.state.following.map((e, i)=>{
              return (
                <div className="card-wrapper" key={i}>
                  <FollowerCard 
                    example = {e.following_id}
                  />
                </div>
              )
            }
              )} */}
            {/* <FollowerCard /> */}

            {/* <div className="one">
                    <img className="avatar-img" src={exampleImg} alt="avatar" />
                    <div className="follower-username">Example User 001</div>
                </div>
                <div className="one">
                    <img className="avatar-img" src={exampleImg} alt="avatar" />
                    <div className="follower-username">Example User 002</div>
                </div> */}
          </div>
        
        <SideNav />
      </>
    )
  }

}


export default Following;
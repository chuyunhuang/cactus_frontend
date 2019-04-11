import React from 'react';
import './style/follower.css';
import * as firebase from 'firebase';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
        <h3>Currently Following...</h3>
        <div className="follower-page">
          <div className="card-wrapper">

            {this.state.following.map((e, i) => {
              console.log('mapping', e)
              return (

                <div className="one-one" key={i}>
                  <Link to={`profile/${e.username}`}
                    style={{ textDecoration: 'none', color: 'black' }} >
                    <FollowerCard
                      image={e.avatar}
                      username={e.username}
                    />
                  </Link>
                </div>
              )
            }
            )}
          </div>
        </div>

        <SideNav />
      </>
    )
  }

}


export default Following;
import React from 'react';
import './style/follower.css';
import * as firebase from 'firebase';
import axios from 'axios'
import {Link} from 'react-router-dom';

import SideNav from './sideNav';
import FollowerCard from './followerCard';

//to get who follows the logged in user
//by passing logged in user uid and getting the follower_id
class Follower extends React.Component {
  state = {
    user: '',
    userId: '',
    followers: []
  }

  componentDidMount(){
    this.unsubscribe = firebase.auth().onAuthStateChanged((user=>{
      if (user){
        this.setState({
          user: user,  
          userId: user.uid
      }, ()=>{
        axios({
          url: `http://localhost:3100/follower/myfollower/${this.state.userId}`,
          method: 'get'
        })
        .then((data)=>{
          this.setState({
            followers: data.data.data
          })
          console.log("HERE", data.data.data)
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
        <h3>My Followers..</h3>
        <div className="follower-page">
          <div className="card-wrapper">

            {this.state.followers.map((e, i) => {
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

export default Follower;
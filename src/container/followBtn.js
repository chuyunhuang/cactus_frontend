import React from 'react';
import * as firebase from 'firebase';
import axios from 'axios';

class FollowBtn extends React.Component{
  constructor(props){
    super(props)
      
      this.state={
        user: '',
        userId: '',  //current loging user
        following_id: '',
        click: false
      }
  }

  componentDidMount(){
    this.unsubscribe = firebase.auth().onAuthStateChanged((user=>{
      if (user){
        this.setState({
          user: user,
          userId: user.uid})
      }
      else{
        this.setState({user: null, userId: null})
      }
    }))
  }

  handleClick = (e) =>{
    console.log(e.target.id)
    this.setState({
      following_id: e.target.id
    },()=>{
      axios({
        url: `http://localhost:3100/follower/`,
        method: 'post',
        data:{
          'follower_id': this.state.userId,
          'following_id': this.state.following_id
        }
      })
      .then((data)=>{
        console.log('follow route was hit', data)
      })
    })
  }

  render (){
    return(
      <div className="follow-btn" 
         
        onClick={this.handleClick} id={this.props.following_id} >
        Follow User
      </div>

    )
  }
}

export default FollowBtn;
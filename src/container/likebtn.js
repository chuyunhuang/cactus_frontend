import React from 'react';
import axios from 'axios';
import * as firebase from 'firebase';

import LikeCount from '../components/likeCount';

class LikeBtn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      post_id: '',
      useruid: '',
      count: '',
      click: false,
    }
  }

  componentDidMount(){
    this.unsubscribe = firebase.auth().onAuthStateChanged((user=>{
      if (user){
        this.setState({useruid: user.uid})
      }
      else{
        this.setState({user: null})
      }
    }))
  }

  handleClick = (e) => {
    this.setState({
      post_id: e.target.id,
      click: true
    }, () => {
      axios({
        url:`http://localhost:3100/like/${this.state.post_id}`,
        method:'post',
        data:{
          'post_id': this.state.post_id,
          'like_author_id': this.state.useruid
        }
      })
      .then((data)=>{
        console.log(data)
      }) 
      // axios({
      //   url: `http://localhost:3100/like/${this.state.post_id}`,
      //   method: 'get',
      //   })
      //   .then((data)=>{
      //     console.log('get likes', data.data.length)
      //   })
      }) 
      
  }

  render() {
    return (
      <>
      <div className="follow-btn" id={this.props.btn_id} author_id={this.props.author_id} onClick={this.handleClick}>
        Like Post
      </div>
      </>
    )
  }
}

export default LikeBtn;
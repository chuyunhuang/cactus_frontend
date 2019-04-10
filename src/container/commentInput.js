import React from 'react';
import * as firebase from 'firebase';
import axios from 'axios';


class CommentInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      post_id: '',
      user: '',
      userId: '',
      comment: ''
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

  handleChange = (e) =>{
    let realID = Number(e.target.id)
    let toMatchPostgres = realID + 1
    // console.log(e.target.id)
    this.setState({
      post_id: toMatchPostgres,
      comment: e.target.value
    })
  }

  clearInput = () =>{
    this.setState({
      comment: ''
    })
  }

  handleClick = (e) =>{
    axios({
      url: `http://localhost:3100/comment/${this.state.post_id}`,
      method: 'post',
      data: {
        'post_id': this.state.post_id,
        'author_id': this.state.userId,
        'comment_text': this.state.comment
      }
    })
    .then((data)=>{
      console.log(data)
    })
  }




  render() {
    
    return (
      <>
        <div className="comment-header">Comment:</div>
        <div><input className="comment-input-field" type="text" placeholder=" Typing....." id={this.props.comment_id} onChange={this.handleChange}></input></div>
        <div>< button onClick={this.handleClick}>Submit Comment</button></div>  
      </>
    )
  }
}

export default CommentInput
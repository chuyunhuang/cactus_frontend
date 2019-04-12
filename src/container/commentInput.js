import React from 'react';
import * as firebase from 'firebase';
import axios from 'axios';

import Comment from '../container/comment';

class CommentInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      post_id: '',
      user: '',
      userId: '',
      comment: '',
      displaycomment: []
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
    console.log('input', e.target.id)
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
      axios({
        url:`http://localhost:3100/comment/${this.state.post_id}`,
        method: 'get'
      })
      .then((data)=>{
        this.setState({
          displaycomment: data.data.data
        })
        console.log('2nd call', data.data.data)
      })
    
  }




  render() {
    
    return (
      <>
        <div className="comment-header">
          Comment:
        </div>
        <div>
          {
            this.state.displaycomment.map((e, i)=>{
              return (
                <>
                <div className="comment-wrapper" key={i} style={{borderBottom: "1px solid #efefef", paddingBottom: '5px'}}>
                  <Comment 
                  username={e.username}
                  avatar={e.avatar}
                  comment={e.comment_text}/>
                </div>
                </>
              )
            })
          }
        </div>
        <div>
          <input className="comment-input-field" type="text" placeholder=" Typing....." 
          id={this.props.comment_id} 
          onChange={this.handleChange}>
          </input>
        </div>
        <div className="comment-btn-only">
          < button className="comment-btn" 
            onClick={this.handleClick}>
            Submit Comment
          </button>
        </div>  
      </>
    )
  }
}

export default CommentInput
import React from 'react';
import axios from 'axios';

class Comment extends React.Component{
  constructor(props){
    super(props)

    this.state ={
        post_id: 1,
        username: 'Yun',
        text: 'testing'
        } 
    }
  

  
  componentDidMount(){
    const BASED_API = 'http://localhoat:3100/comment'
    
    axios.get(`${BASED_API}/${this.state.post_id}`)
    .then((data)=>{
      console.log('comment here', data)
    })
  }


  render(){
    return(
      <>
        <div className="commenter">{this.state.username}</div>
        <div className="comment-text">{this.state.text}</div>
      </>
    )
  }

}



export default Comment;
import React from 'react';
import axios from 'axios';

const Comment = (props) =>{
  return(
    <>
      <div className="wrapper">
        <img src={props.avatar} style={{width: "40px", borderRadius: '50%'}} />
      </div>
  
    <div className="wrapper-2">
    <div className="commenter">{props.username}</div>
        <div className="comment-text">{props.comment}</div>
    </div>
    </>
  )
}   


export default Comment;
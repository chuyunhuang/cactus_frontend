import React from 'react';

import SingleView from './image_single';
import Avatar from './avatar';
// import Comment from './comment';
// import CommentInput from './commentInput';
import LikeBtn from './likebtn';
import FollowBtn from './followBtn';

const OneCardElement = (props) => {

  let {username, avatar, image_url, caption } = props
  return (
    <>
    
      <div>
         <div className="header-row">
          <Avatar username = {username} image = {avatar} />
        </div> 
        <SingleView image ={image_url} text ={caption} />
      </div>

      <div className="single-card-content">

        <div className="content-row">
          <div className="btn-row">
            <LikeBtn 
            btn_id={props.btn_id} 
            author_id={props.author_id} />
            <FollowBtn 
            follow_btn_id={props.follower_btn_id} 
            following_id={props.following_id}/>
          </div>
        </div>
        {/* <div className="comment-wrapper">
          <div className="wrapper">
            <Avatar />
          </div>
          <div className="wrapper-2">
            <Comment />
          </div>
        </div>
        <div className="content-row comment-input-wrapper">
          <CommentInput />
        </div> */}

      </div>
  
</>
  )

}

export default OneCardElement;
import React from 'react';

import SingleView from './image_single';
// import Avatar from './avatar';
// import Comment from './comment';
// import CommentInput from './commentInput';
import LikeBtn from './likebtn';

const oneCardElement = (image_url, caption) => {
  return (
    <div className="single-card-view">
      <div>
        {/* <div className="header-row">
          <Avatar user_avatar={avatar} />
          <div className="username">{username}</div>
        </div> */}
        <SingleView image ={image_url} text ={caption} />
      </div>

      <div className="single-card-content">

        <div className="content-row">
          <div className="btn-row">
            <LikeBtn />
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
    </div>

  )

}

export default oneCardElement
import React from 'react';
import { Link } from 'react-router-dom';

import SingleView from './image_single';
import Avatar from './avatar';
import Comment from './comment';
import CommentInput from './commentInput';
import LikeBtn from './likebtn';
import FollowBtn from './followBtn';

import LikeCount from '../components/likeCount';
const OneCardElement = (props) => {

  let { username, avatar, image_url, caption } = props
  return (
    <>
      <div>
        <div className="header-row">
          <Link to={`/profile/${username}`}
          style={{textDecoration: 'none', color: 'black'}} 
          username={username} 
          image={avatar}>
            <Avatar
              username={username}
              image={avatar} />
         </Link>
        </div>

        <SingleView
          image={image_url}
          text={caption} />
      </div>

      <div className="single-card-content">
        <div className="content-row">
          <div className="btn-row">
            {/* <LikeBtn
              btn_id={props.btn_id}
              author_id={props.author_id} /> */}
            <FollowBtn
              following_id={props.author_id} />
          </div>
        </div>
        
        <div className="content-row comment-input-wrapper">
          <CommentInput
            comment_id={props.comment_id} />
        </div>
      </div>

    </>
  )

}

export default OneCardElement;
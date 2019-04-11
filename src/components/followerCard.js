import React from 'react';

const FollowerCard = (username, avatar) =>{

  return (
            <div className="one">
              <img className="avatar-img" src={avatar} alt="avatar" />
              <div className="follower-username">{username}</div>
            </div>
  )
}

export default FollowerCard;
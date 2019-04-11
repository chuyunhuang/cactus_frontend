import React from 'react';


const FollowerCard = (props) =>{

  return (
          <>
             <div className="one">
              <img className="avatar-img" src={props.image} alt="avatar" />
              <div className="follower-username">{props.username}</div>
            </div>
            </>
  )
}

export default FollowerCard;
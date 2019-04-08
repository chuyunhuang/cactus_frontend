import React from 'react';
import './style/newsfeed.css';

const Avatar = (props) =>{
    return (
        <>
        <img className="profile-avatar" src={props.image} alt="avatar" />
        <div className="username">{props.username}</div>                        
        </>
    )
}

export default Avatar;
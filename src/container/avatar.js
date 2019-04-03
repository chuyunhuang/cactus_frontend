import React from 'react';
import './style/newsfeed.css';


const Avatar = (props) =>{
    return (
        <img className="profile-avatar" src={props.user_avatar} alt="avatar" />                        
    )
}

export default Avatar;
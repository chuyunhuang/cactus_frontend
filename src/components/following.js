import React from 'react';
import './style/follower.css';

import exampleImg from '../container/image/user.jpg';

const Following = (props) => {
    return (
    <>
    <h1>Following</h1>
        <div className="follower-page">
            <div className="card-wrapper">
                <div className="one">
                    <img className="avatar-img" src={exampleImg} alt="avatar" />
                    <div className="follower-username">Example User 001</div>
                </div>
                <div className="one">
                    <img className="avatar-img" src={exampleImg} alt="avatar" />
                    <div className="follower-username">Example User 002</div>
                </div>
            </div>
        </div>

    </>
    )
}

export default Following;
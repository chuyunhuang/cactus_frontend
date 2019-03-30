import React from 'react';
import './style/newsfeed.css';

import exampleImg from './image/005.png';
import userImg from './image/userImg.jpg';
import fakeUserImg from './image/user.jpg';

class Newsfeed extends React.Component{

    //make API call to get posts, comments, user info and do e.map to show on page

    render(){
        return(<>   
    <h1>Here are the latest feeds...</h1>
    <div className="entire-view">
        <div className="single-card-view">
            <div>
                <div className="header-row">
                    <img className="profile-avatar" src={fakeUserImg} alt="avatar" /> 
                    <div className="username">Example User</div>
                </div>
                    <img className="single-img"src={userImg}alt="example" />    
                </div>

            <div className="single-card-content">

                <div className="content-row">
                    <div className="btn-row">
                        <div className="follow-btn">Like Post </div>
                        <div className="follow-btn">Follow</div>
                    </div>

                    <div className="content-content"></div>
                        <div className="body-text content-row">This can be one sentence or two sentence...</div>
                </div>

                <div className="comment-wrapper">
                    <div className="wrapper">
                        <img className="profile-img" src={exampleImg} alt="avatar" />
                    </div>
                    <div className="wrapper-2">
                        <div className="commenter">Username</div>
                        <div className="comment-text">Comment go here</div>
                    </div>
                </div>
                {/* <div className="comment-wrapper">

                        <div className="wrapper">
                            <img className="profile-img" src={exampleImg} alt="avatar" />
                        </div>
                        <div className="wrapper-2">
                            <div className="commenter">Username2</div>
                            <div className="comment-text">Comment go here</div>
                        </div>
                    </div> */}

 {/* Need some handle submit here!! */}
                <div className="content-row comment-input-wrapper">
                    <div className="comment-header">Comment:</div>
                    <div><textarea className="comment-input-field" type="text" placeholder=" Typing....."></textarea></div>
                </div>

            </div>
        </div>
    </div>
        </>
        )
    }
}

export default Newsfeed;
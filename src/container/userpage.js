import React from 'react';
import './style/userpage.css';
import './style/newsfeed.css';
import CreatePost from './createPost';

import exampleImg from './image/user.jpg';
import userImg from './image/userImg.jpg';

class UserPage extends React.Component {

    render() {
        return (
            <>

                <div className="user-section">
                    <div>
                        <img className="user-img" src={exampleImg} alt="avatar" />
                    </div>
                    <div className="user-info">
                        <div className="user-username">Username</div>
                        <div className="post-detail">180 Posts</div>
                        <div className="post-detail">180 Followers</div>
                        <div className="post-detail">180 Following</div>
                    </div>
                    <div className="create-post">
                        <div><CreatePost /></div>
                    </div>
                </div>



                <div className="entire-view">
                    <div className="single-card-view">
                        <div>
                            <div className="header-row">
                                <img className="profile-avatar" src={exampleImg} alt="avatar" />
                                <div className="username">Example User</div>
                            </div>
                            <img className="single-img" src={userImg} alt="example" />
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

export default UserPage;
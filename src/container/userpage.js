import React from 'react';
import { Link } from 'react-router-dom';
import './style/userpage.css';
import './style/newsfeed.css';

import userImg from './image/user.jpg';
import plantImg from './image/userImg.jpg';

class UserPage extends React.Component {

    state = {

        username: 'Yun',
        user_avatar: userImg,
        post_count: 180,
        follower_count: 1,
        following_count: 1,
        post: [
            {
                username: 'Yun',
                user_avatar: userImg,
                post_img: plantImg,
                post_caption: 'My plant is awesome and beautiful.',
                comment: [
                    {
                        username: 'Yun',
                        user_avatar: userImg,
                        text: 'Hello!'
                    },
                    {
                        username: 'Mie',
                        user_avatar: userImg,
                        text: 'World!'
                    }
                ]
            }
        ]
    }


    render() {
        return (
            <>

                <div className="user-section">
                    <div>
                        <img className="user-img" src={this.state.user_avatar} alt="avatar" />
                    </div>
                    <div className="user-info">
                        <div className="user-username">{this.state.username}</div>
                        <div className="post-detail">{this.state.post_count}Posts</div>
                        <div className="post-detail">{this.state.follower_count} Followers</div>
                        <div className="post-detail">{this.state.following_count} Following</div>
                    </div>
                    <div className="create-post">
                        <div><Link to="/createpost" className="link-to-create" style={{ textDecoration: 'none', color: "black" }} >Create Post</Link>
                        </div>
                    </div>
                </div>



                <div className="entire-view">
                    <div className="single-card-view">
                        <div>
                            <div className="header-row">
                                <img className="profile-avatar" src={this.state.user_avatar} alt="avatar" />
                                <div className="username">{this.state.username}</div>
                            </div>
                            <img className="single-img" src={this.state.post[0].post_img} alt="example" />
                        </div>

                        <div className="single-card-content">

                            <div className="content-row">
                                {/* <div className="btn-row">
                                    <div className="follow-btn">Like Post </div>
                                    <div className="follow-btn">Follow</div>
                                </div> */}

                                <div className="content-content"></div>
                                <div className="body-text content-row">{this.state.post[0].post_caption}</div>
                            </div>

                            <div className="comment-wrapper">
                                <div className="wrapper">
                                    <img className="profile-img" src={this.state.post[0].comment[0].user_avatar} alt="avatar" />
                                </div>
                                <div className="wrapper-2">
                                    <div className="commenter">{this.state.post[0].comment[0].username}</div>
                                    <div className="comment-text">{this.state.post[0].comment[0].text}</div>
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
                            {/* <div className="content-row comment-input-wrapper">
                                <div className="comment-header">Comment:</div>
                                <div><textarea className="comment-input-field" type="text" placeholder=" Typing....."></textarea></div>
                            </div> */}

                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default UserPage;
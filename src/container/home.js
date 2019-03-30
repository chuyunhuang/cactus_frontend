import React from 'react';
import AuthContext from '../context/auth';
import {Link} from 'react-router-dom';

import './style/home.css';

import ExploreIcon from './image/explore.png';
import NotificationIcon from './image/notification.png';
import MypageIcon from './image/mypage.png';
import EditIcon from './image/edit.png';
import FollowerIcon from './image/follower.png';
import FollowingIcon from './image/following.png';

class Home extends React.Component {

    handleClick = (e)=>{
        console.dir(e.target)
        // if (e.target.name === 'newsfeed'){
        //     <Redirect to="/newsfeed" />    
        // }
    }



    render() {
        return (
            <AuthContext.Consumer>
                {
                    (user)=>{
                        if(user){
                            return(
                                <>
                                <div className="homepage-wrapper">
                                    <div className="homepage-msg">Welcome Back!</div>
                                    <div className="user">{user.email}</div>
                                </div>

                                <div className="userFunction-wrapper">
                                    <div className="single">
                                      <Link style={{ textDecoration: 'none' }} className="userFunction" to="/newsfeed">Explore Newsfeed
                                        <div className="single-img"><img src={ExploreIcon} className="img-logo" /></div>
                                      </Link>
                                    </div>

                                    <div className="single">
                                       <Link style={{ textDecoration: 'none' }} className="userFunction" to="/mypage">View My Page
                                            <div className="single-img"><img src={MypageIcon} className="img-logo" /></div>
                                        </Link>
                                    </div>

                                  
                                    <div className="single">    
                                        <Link style={{ textDecoration: 'none' }} className="userFunction" to="/profile">Edit My Profile
                                            <div className="single-img"><img src={EditIcon} className="img-logo" /> </div>
                                        </Link>
                                    </div> 

                                    <div className="single">
                                        <Link style={{ textDecoration: 'none' }} className="userFunction" to="/notification">Notifications
                                            <div className="single-img"><img src={NotificationIcon} className="img-logo" /></div>
                                       </Link>
                                    </div>
                                    <div className="single">
                                        <Link style={{ textDecoration: 'none' }} className="userFunction" to="/follower">My Followers
                                            <div className="single-img"><img src={FollowerIcon} className="img-logo" /> </div>
                                        </Link>
                                    </div>
                                    <div className="single">    
                                        <Link style={{ textDecoration: 'none' }} className="userFunction" to="/following"> My Followings
                                            <div className="single-img"><img src={FollowingIcon} className="img-logo" /> </div>
                                        </Link>
                                    </div>     
                                </div>
                                </>
                            )
                        } else{
                            return(
                                <>
                                <div className="logout-wrapper">
                                    <div>OH NO! You're not logged in!</div>
                                </div>
                                </>
                            )
                        }
                    }
                }
            </AuthContext.Consumer>
        )
    }
}

export default Home;
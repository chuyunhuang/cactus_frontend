import React from 'react';
import AuthContext from '../context/auth';
import {Link} from 'react-router-dom';

import './style/home.css';
import exploreImg from './image/edit.png';


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
                                      <div className="single-img"><img src={exploreImg} className="img-logo" /></div>
                                      <Link style={{ textDecoration: 'none' }} className="userFunction" to="/newsfeed">Explore Newsfeed</Link>
                                    </div>

                                    <div className="single">
                                        <div className="single-img"><img src={exploreImg} className="img-logo" /></div>
                                        <Link style={{ textDecoration: 'none' }} className="userFunction" to="/notification">Notifications</Link>
                                    </div>
                                  
                                    <div className="single">
                                        <div className="single-img"><img src={exploreImg} className="img-logo" /></div>
                                        <Link style={{ textDecoration: 'none' }} className="userFunction" to="/mypage">View My Page</Link>
                                    </div>
                                    <div className="single">    
                                        <div className="single-img"><img src={exploreImg} className="img-logo" /> </div>
                                        <Link style={{ textDecoration: 'none' }} className="userFunction" to="/profile">Edit My Profile</Link>
                                    </div> 
                                    <div className="single">
                                        <div className="single-img"><img src={exploreImg} className="img-logo" /> </div>
                                        <Link style={{ textDecoration: 'none' }} className="userFunction" to="/follower">My Followers</Link>
                                    </div>
                                    <div className="single">    
                                        <div className="single-img"><img src={exploreImg} className="img-logo" /> </div>
                                        <Link style={{ textDecoration: 'none' }} className="userFunction" to="/following">Followings</Link>
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
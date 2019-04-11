import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
  return (
    <>
      <div className="userFunction-wrapper">
        <div className="single">
          <Link style={{ textDecoration: 'none' }} className="userFunction" to="/newsfeed">
            Explore Newsfeed
          </Link>
        </div>

        <div className="single">
          <Link style={{ textDecoration: 'none' }} className="userFunction" to="/mypage">
            View My Page
          </Link>
        </div>


        <div className="single">
          <Link style={{ textDecoration: 'none' }} className="userFunction" to="/editprofile">
            Edit My Profile
          </Link>                              
        </div>

        <div className="single">
          <Link style={{ textDecoration: 'none' }} className="userFunction" to="/createpost">
            Create New Post                              
          </Link>
        </div>
        <div className="single">
          <Link style={{ textDecoration: 'none' }} className="userFunction" to="/myfollower">
            My Followers                              
          </Link>
        </div>
        <div className="single">
          <Link style={{ textDecoration: 'none' }} className="userFunction" to="/following"> 
            My Followings
          </Link>
        </div>
      </div>
    </>
  )
}

export default SideNav;
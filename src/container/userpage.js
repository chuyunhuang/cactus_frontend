import React from 'react';
import './style/userpage.css';
import './style/newsfeed.css';

import axios from 'axios';
import {Link} from 'react-router-dom';

import SideNav from '../components/sideNav'
import AuthContext from '../context/auth';
import UserOneCard from '../container/userOneCard';

import ExploreIcon from './image/explore.png';
import NotificationIcon from './image/notification.png';
import EditIcon from './image/edit.png';
import FollowerIcon from './image/follower.png';
import FollowingIcon from './image/following.png';

class UserPage extends React.Component {

	static contextType = AuthContext;

	constructor(props) {
		super(props);

		this.state = {
			useruid: '',
			username: '',
			avatar: '',
			posts: []

		}
	}

	componentDidMount() {
		if (this.context) {
			this.setState({ useruid: this.context.uid }, () => {
				const { useruid } = this.state

				axios({
					url: `http://localhost:3100/user/userprofile/${useruid}`,
					method: 'get'
				})
					.then((data) => {
						this.setState({
							username: data.data.data[0].username,
							avatar: data.data.data[0].avatar
						})
					})
					axios({
						url: `http://localhost:3100/post/userpost/${useruid}`,
						method: 'get'
					})
						.then((data)=>{
							this.setState({posts: data.data.data})
						})
					.catch((err) => {
						console.log(err)
					})
			})
		}
	}



	render() {
	
		return (
			<>
				<div className="user-section">
					<div>
						<img className="user-img" src={this.state.avatar} alt="avatar" />
					</div>
					<div className="user-username">
						My username: {this.state.username}
					</div>
					<div className="userFunction-wrapper">
									<div className="single">
                      <Link style={{ textDecoration: 'none' }} className="userFunction" to="/editprofile">Edit My Profile
                        <div className="single-img"><img src={EditIcon} alt="icon" className="img-logo" /> </div>
                      </Link>
                    </div>

                    <div className="single">
                      <Link style={{ textDecoration: 'none' }} className="userFunction" to="/createpost">Create New Post
                        <div className="single-img"><img src={NotificationIcon} alt="icon" className="img-logo" /></div>
                      </Link>
                    </div>
                    <div className="single">
                      <Link style={{ textDecoration: 'none' }} className="userFunction" to="/myfollower">My Followers
                        <div className="single-img"><img src={FollowerIcon} alt="icon" className="img-logo" /> </div>
                      </Link>
                    </div>
                    <div className="single">
                      <Link style={{ textDecoration: 'none' }} className="userFunction" to="/following"> My Followings
                        <div className="single-img"><img src={FollowingIcon} alt="icon" className="img-logo" /> </div>
                      </Link>
                    </div>
										<div className="single">
                      <Link style={{ textDecoration: 'none' }} className="userFunction" to="/newsfeed">Explore Newsfeed
                        <div className="single-img"><img src={ExploreIcon} alt="icon" className="img-logo" /></div>
                      </Link>
											</div>
                    </div>
										</div>
			
				
				{/* <h3>My posts...</h3> */}
				<div className="entire-view">

        {this.state.posts.map((e, i) => {
          return (
						<div className="single-card-view" >
							< UserOneCard
							image_url={e.image_url}
							caption={e.caption} />
						</div>
							)
        })}

      </div>
			
				{/* <SideNav /> */}
			</>
		)
	}





}


export default UserPage;
import React from 'react';
import { Link } from 'react-router-dom';
import './style/userpage.css';
import './style/newsfeed.css';

import axios from 'axios';

import SideNav from '../components/sideNav'
import oneCardElement from '../container/oneCard';
import AuthContext from '../context/auth';

class UserPage extends React.Component {

	static contextType = AuthContext;

	constructor(props) {
		super(props);

		this.state = {
			useruid: '',
			username: '',
			avatar: '',
			post: []

		}
	}

	componentDidMount() {
		if (this.context) {
			console.log('hello', this.context)
			this.setState({ useruid: this.context.uid }, () => {
				const { useruid } = this.state
				console.log('useruid', useruid)
				axios({
					url: `http://localhost:3100/user/userprofile/${useruid}`,
					method: 'get'
				})
					.then((data) => {
						this.setState({
							username: data.data.data[0].username,
							avatar: data.data.data[0].avatar
						})
						console.log('data!!!!!!', data.data.data[0].username)
						console.log('data!!!!!!', data.data.data[0].avatar)
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
						<div>Your UID is: {this.state.useruid}</div>
						<div>Username: {this.state.username}</div>
						<img className="user-img" src={this.state.avatar} alt="avatar" />
					</div>
					<div className="user-info">
						{/* <div className="user-username">{this.state.username}</div> */}
						{/* <div className="post-detail">{this.state.post_count}Posts</div>
						<div className="post-detail">{this.state.follower_count} Followers</div>
						<div className="post-detail">{this.state.following_count} Following</div> */}
					</div>
					<div className="create-post">
						<div>
							<Link to="/createpost" className="link-to-create" style={{ textDecoration: 'none', color: "black" }} >
								Create Post
												</Link>

						</div>
					</div>
				</div>
				<SideNav />
			</>
		)
	}





}


export default UserPage;
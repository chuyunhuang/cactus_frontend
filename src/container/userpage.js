import React from 'react';
import { Link } from 'react-router-dom';
import './style/userpage.css';
import './style/newsfeed.css';

import axios from 'axios';

import SideNav from '../components/sideNav'
import AuthContext from '../context/auth';
import userOneCard from '../container/userOneCard';

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
			console.log('hello', this.context)
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
							console.log('post data', data.data.data)
							this.setState({posts: data.data.data})
						})
					.catch((err) => {
						console.log(err)
					})
			})
		}
	}



	render() {
		console.log('my state', this.state)
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
				<h1>My posts...</h1>
				<div className="entire-view">

        {this.state.posts.map((e, i) => {
          return userOneCard(e.image_url, e.caption)
        })}

      </div>
				<SideNav />
			</>
		)
	}





}


export default UserPage;
import React from 'react';
import { Link } from 'react-router-dom';
import './style/userpage.css';
import './style/newsfeed.css';
import AuthContext from '../context/auth';
import axios from 'axios';

import oneCardElement from '../container/oneCard';

class UserPage extends React.Component {

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
		console.log(this.props.user.uid)

		axios.get('http://localhost:3100/user/')
			.then((userResponse) => {
				this.setState({
					useruid: this.props.user.uid
				})
				for(let i =0; i < userResponse.data.data.length; i++){
					if (userResponse.data.data[i].useruid === this.state.useruid){
						this.setState({username: userResponse.data.data.username})
						}
						console.log(this.state.username)
					}
				}
			// 	axios.get('http://localhost:3100/post/')
			// 		.then((postResponse) => {
			// 			console.log('post', postResponse)
			// 		})
			// })
			.catch((err) => {
				console.log(err)
			})
	}



	render() {
		return (
			<>
				<div className="user-section">
					<div>
						<div>Your UID is: {this.state.useruid}</div>
						<img className="user-img" src={this.state.avatar} alt="avatar" />
					</div>
					<div className="user-info">
						<div className="user-username">{this.state.username}</div>
						{/* <div className="post-detail">{this.state.post_count}Posts</div>
						<div className="post-detail">{this.state.follower_count} Followers</div>
						<div className="post-detail">{this.state.following_count} Following</div> */}
					</div>
					<div className="create-post">
						<div><Link to="/createpost" className="link-to-create" style={{ textDecoration: 'none', color: "black" }} >Create Post</Link>
						</div>
					</div>
				</div>

				{/* <div className="entire-view">
				{
					this.state.posts.map((e, i)=>{
						return oneCardElement(e.image_url, e.caption)
					})
				}
				</div> */}
			</>
		)
	}


}

export default UserPage;
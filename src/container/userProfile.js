import React from 'react';
import axios from 'axios';
import './style/userpage.css';
import './style/newsfeed.css';

import UserOneCard from '../container/userOneCard';
import SideNav from '../components/sideNav';


class UserProfile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      useruid: '',
      avatar: '',
      posts: []

    }
  }

  

  componentDidMount(){
    this.setState({
      username: this.props.match.params,
    }, ()=>{
      axios({
        url: `http://localhost:3100/user/readuserprofile/${this.state.username.username}`,
        method: 'get'
      })
      .then((data)=>{
        console.log(data.data.data[0].useruid)
        this.setState({
          useruid: data.data.data[0].useruid,
          avatar: data.data.data[0].avatar
        }, ()=>{
          axios({
						url: `http://localhost:3100/post/userpost/${this.state.useruid}`,
						method: 'get'
					})
						.then((data)=>{
							this.setState({posts: data.data.data})
						})
        })
      })
    })
  }

render(){
  // console.log('HERE', this.state.avatar)
   
  return(
    <>
    {this.state.useruid.length > 0 ?
      <>
      <div className="user-section">
          <div>
            <img className="user-img" src={this.state.avatar} alt="avatar" />
          </div>
          <div className="user-username">
             {this.state.username.username} 
          </div>
        </div>
        <h1>{this.state.username.username}'s posts...</h1>
        
        <div className="entire-view">
    
        {this.state.posts.map((e, i) => {
          console.log('MAPPING', e)
          return (
            <div className="single-card-view" key={i}> 
             <UserOneCard 
             image_url={e.image_url} 
             caption={e.caption} />
             </div>
          )
        })}
    
      </div>
      <SideNav />
      </>
      :<p>loading</p>}
    
    </>
  )
}
}


export default UserProfile;

// this.props.history.push("/profile/${}")
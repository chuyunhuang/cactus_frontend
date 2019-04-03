import React from 'react';
import './style/newsfeed.css';
import axios from 'axios';

import Avatar from '../container/avatar';
import SingleView from '../container/image_single';
import Comment from '../container/comment';
import CommentInput from '../container/commentInput';
import LikeBtn from '../container/likebtn';


class Newsfeed extends React.Component {
  constructor(props) {
    super(props)

    this.state = [
        {
          username: '',
          user_avater: '',
        }
      ]
    }
  

  componentDidMount() {
      axios.get('http://localhost:3100/user')
      .then((data) => {
    
        this.setState({
          'username':data.data.data[0].username,
          'user_avatar': data.data.data[0].avatar,
        })
      })
      .catch(err=>{
        console.log('err', err)
      })
  }

  render() {
    return (<>
      <h1>Here are the latest feeds...</h1>
      <div className="entire-view">
        <div className="single-card-view">
          <div>
            <div className="header-row">
              <Avatar />
              <div className="username">{this.state.username}</div>
            </div>
            <SingleView />
          </div>

          <div className="single-card-content">

            <div className="content-row">
              <div className="btn-row">
                <LikeBtn />
              </div>
            </div>

            <div className="comment-wrapper">
              <div className="wrapper">
                <Avatar />
              </div>
              <div className="wrapper-2">
                <Comment />
              </div>
            </div>
            <div className="content-row comment-input-wrapper">
              <CommentInput />
            </div>

          </div>
        </div>
      </div>
    </>
    )
  }
}

export default Newsfeed;
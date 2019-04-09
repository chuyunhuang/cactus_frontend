import React from 'react';
import axios from 'axios';

class LikeBtn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      post_id: '',
      like_author_id: '',
      click: false,
    }
  }

  handleClick = (e) => {
    console.log('before', e.target.id)
    console.log('before author', e.target.attributes[2].value)

    this.setState({
      post_id: e.target.id,
      like_author_id: e.target.attributes[2].value,
      click: true
    }, () => {
      axios({
        url:`http://localhost:3100/like/${this.state.post_id}`,
        method:'post',
        data:{
          'post_id': this.state.post_id,
          'like_author_id': this.state.like_author_id
        }
      }).then(data=>{
        console.log(data)
      },err => {
        console.log(err)
      })
    })
  }

  render() {
    return (
      <div className="follow-btn" id={this.props.btn_id} author_id={this.props.author_id} onClick={this.handleClick}>
        Like Post
      </div>
    )
  }
}

export default LikeBtn;
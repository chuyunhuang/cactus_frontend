import React from 'react';
import './style/newsfeed.css';
import axios from 'axios';

import SideNav from '../components/sideNav';
import oneCardElement from '../container/oneCard';

class Newsfeed extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [],
    }
  }


  componentDidMount() {
      axios.get('http://localhost:3100/post')
      .then((data) => {
        console.log('here', data.data.data)
        this.setState({
          'posts': data.data.data
        })
      })
      .catch(err => {
        console.log('err', err)
      })
  }

  render() {

    return (<>
      
      <h1>Here are the latest feeds...</h1>
      <div className="entire-view">

        {this.state.posts.map((e, i) => {
          return oneCardElement(e.image_url, e.caption)
        })}

      </div>
      <SideNav />
    </>
    )
  }
}

export default Newsfeed;
import React from 'react';
import './style/newsfeed.css';
import axios from 'axios';

import SideNav from '../components/sideNav';
import OneCardElement from '../container/oneCard';


class Newsfeed extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [],
    }
  }

  componentDidMount() {
      axios.get('http://localhost:3100/post/')
      .then((data) => {
        this.setState({
          'posts': data.data.data
        })
      })
      .catch(err => {
        console.log('err', err)
      })
  }

  // getUserUid = () =>{
  //   const postArr = this.state.posts
  //   const uid = []
  //   for(let i = 0 ; i< postArr.length ; i++){
  //     uid.push(postArr[i].useruid)
  //   }
  //   return console.log('DATA!!', uid)
  // }

 


  render() {

    return (<>
      
      <h1>Here are the latest feeds...</h1>
      <div className="entire-view">
      
       {this.state.posts.map((e, i) => {
          return(
          <div className="single-card-view" key={i}> 
            <OneCardElement 
            username= {e.username} 
            avatar = {e.avatar} 
            image_url = {e.image_url} 
            caption = {e.caption} 
            btn_id={i} 
            author_id={e.author_id}
            following_id ={e.author_id}
            comment_id = {i}/>
        </div>
      )
        })}
 
    </div>
    
      <SideNav />
    </>
    )
  }
}

export default Newsfeed;
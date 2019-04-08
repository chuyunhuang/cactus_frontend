import React from 'react';

class LikeBtn extends React.Component{
  constructor(props){
    super(props)

    this.state={
      post_id : '',
      like_author_id: '',
      click : false,
    }
  }

  // handleClick = (e) =>{
    
  // }

  render(){
    return(
      <div className="follow-btn" >Like Post</div>
    )
  }
}

export default LikeBtn;
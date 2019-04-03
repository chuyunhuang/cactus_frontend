import React from 'react';

class LikeBtn extends React.Component{
  constructor(props){
    super(props)

    this.state={
      click : false,
    }
  }

  render(){
    return(
      <div className="follow-btn">Like Post</div>
    )
  }
}

export default LikeBtn;
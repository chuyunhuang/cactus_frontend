import React from 'react';

class FollowBtn extends React.Component{
  constructor(props){
    super(props)
      
      this.state={
        click: false
      }
  }
  render (){
    return(
      <div className="follow-btn" onClick={this.onClickFollow}>Follow</div>

    )
  }
}

export default FollowBtn;
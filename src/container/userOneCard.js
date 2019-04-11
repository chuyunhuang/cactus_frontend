import React from 'react';
import './style/userpage.css';
import './style/newsfeed.css';


const UserOneCard = ({image_url, caption}) => {

  return (
    <>
      <img className="single-img" src={image_url} alt="example" />
      <div className="content-content"></div>
      <div className="body-text content-row">{caption}</div>
    </>
    
  )
}

export default UserOneCard;
import React from 'react';

const SingleView = (props) => {
  return (
    <>
      <img className="single-img" src={props.image} alt="example" />
      <div className="content-content"></div>
      <div className="body-text content-row">{props.text}</div>
    </>
  )

}

export default SingleView;
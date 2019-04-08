import React from 'react';

const ImageUpload = ( props ) => {
  return (
    <div style={{ width: '30%', height: 'auto', marginLeft: 'auto', marginRight: 'auto' , decoration: 'none'}}>
      <img src={props.image} className="card-img" alt="..." />
      {/* <div className="card-img-overlay">
        <span className="card-text" style={ { backgroundColor: 'rgba(0, 0, 0, 0.3)' } }>Uploaded {moment(props.timestamp).fromNow()}</span>
      </div> */}
    </div>
  )
}

export default ImageUpload;
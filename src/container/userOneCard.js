import React from 'react';

import SingleView from './image_single';

const userOneCard = (image_url, caption) => {
  return (
    <div className="single-card-view">
      <div>
        <SingleView image={image_url} text={caption} />
      </div>
    </div>
  )
}

export default userOneCard;
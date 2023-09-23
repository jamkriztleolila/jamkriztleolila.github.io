import React from 'react';

function CardContentItem ({ leftText, rightText, thumbnail, description }) {
  return (
    <div className='card'>
      <div className='card-content'>
        <div className='subtext'>
          <span className='left'>
            {leftText}
          </span>
          <span className='right'>
            {rightText}
          </span>
        </div>
        <div className='thumbnail'>
          <img src={thumbnail} />
        </div>
        <div className='description'>
          {description}
        </div>
      </div>
    </div>
  );
};

export default CardContentItem;
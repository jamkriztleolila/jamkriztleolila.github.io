import React from 'react';

function ProductView ({ name, date, type, description }) {
  return (
    <div className='product'>
      <div className='details'>
        <div className='name'><span>{name}</span></div>
        <div className='date'><span>{date}</span></div>
      </div>
      <div className='type'><span>{type}</span></div>
      <div className='description'><span>{description}</span></div>
    </div>
  );
};

export default ProductView;
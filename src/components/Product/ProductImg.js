import React from 'react';

function ProductImg ({ img }) {
  return (
    <div>
      <div className='dummy-border'>

      </div>
      <div className='product-image'>
        <img src={img} />
      </div>
    </div>
  );
};

export default ProductImg;
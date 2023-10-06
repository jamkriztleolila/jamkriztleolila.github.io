import React from 'react';
import { motion } from 'framer-motion';
function CardContentItem ({ leftText, rightText, thumbnail, description, redirect }) {

  const thumbnailMotion = {
    initial: { scale: 1 },
    animate: { scale: 1.1,transition: { ease: 'easeOut', duration: 0.3 } }
  }
  const titleMotion = {
    animate: {color: '#fcf8f0'}
  };
  return (
    <motion.div whileHover='animate' className='card' onClick={redirect}>
      <div className='card-content'>
        <div className='subtext'>
          <motion.span variants={titleMotion} className='left'>
            {leftText}
          </motion.span>
          <span className='right'>
            {rightText}
          </span>
        </div>
        <div className='thumbnail'>
        <motion.div variants={thumbnailMotion}>
          <img src={thumbnail} />
        </motion.div>
        </div>
        <div className='description'>
          {description}
        </div>
      </div>
    </motion.div>
  );
};

export default CardContentItem;
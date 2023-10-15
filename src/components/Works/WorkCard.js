import React from 'react';
import { motion } from 'framer-motion';
import { Skeleton } from '@mui/material';

function WorkCard({ i, type, thumbnail, title, handleOpen }) {

  const thumbnailMotion = {
    initial: { scale: 1 },
    animate: { scale: 1.1,transition: { ease: 'easeOut', duration: 0.3 } }
  };
  const textMotion = {
    animate: {
      backgroundColor: '#9a0016',
      transition: {
        duration: 0.4,
        type: 'tween',
        ease: 'easeOut'
      }
    }
  }
  return (
    <motion.div className='work-card' onClick={handleOpen} whileHover='animate'>
      <div className='parent'><div className='thumbnail'>
        {thumbnail ? 
        <motion.div variants={thumbnailMotion}>
        <img src={thumbnail} alt={`${title} thumbnail`}/>
      </motion.div> : 
      <Skeleton variant="rectangular" className='skeleton'
        sx={{ bgcolor: 'grey.900' }}
        width={355}
        height={383} />} 
      </div></div>
      <motion.div className='title' variants={textMotion}>
        <div className='project-type'>
          <span>{`#${i} ${title}`}</span>
          <span>{type}</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WorkCard;
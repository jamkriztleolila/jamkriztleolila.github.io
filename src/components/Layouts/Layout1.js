import { Container } from '@mui/material';
import React from 'react';

const Layout1 = ({header, description, images }) => {
  return (
    
    <Container className='layout1'>
      <Container maxWidth='md' className='p-t-10'>
        <h1>{header && header}</h1>
        <p>{description && description}</p>
      </Container>
      <div className='border-t m-t-30'>
        {images && images.map((item) => (
          <img src={item} alt={`${header}`} />
        ))}
      </div>
    </Container>
  )
}

export default Layout1;
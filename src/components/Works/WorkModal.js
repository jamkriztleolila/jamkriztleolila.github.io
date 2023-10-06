import React from 'react';
import {IconButton, Dialog, DialogContent} from '@mui/material';
import { fullCollection } from '../../data/Works';
import Layout1 from '../Layouts/Layout1';


function WorkModal({ id, open, handleClose }) {
  const data = fullCollection.filter(x => x.id === id)[0] || null;
  if (data) {
    const isPoster = data.tags.includes('poster') ? true : false;
    return (
      <Dialog
        open={open}
        onClose={handleClose}
        className='modal'
        scroll='body'
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        fullWidth={!isPoster}
        maxWidth='lg'
      >
        <div className='modal-header'>
          <div className='title'>
           {data.title}
          </div>
          <IconButton className='exit' aria-label="close" onClick={handleClose}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
              <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
            </svg>
          </IconButton>
        </div>
        <DialogContent className='modal-body'>
         {!isPoster ? 
          <Layout1 
            header={data.title}
            description={data.text}
            images={data.pictures}
            props={data.properties} />
            :
        <img src={data.pictures[0]} alt={`${data.title} poster`} />}
        </DialogContent>
        <div className='modal-footer'>
          <div className='date'>{data.date}</div>
          </div>
      </Dialog>
    )
  }
}

export default WorkModal;
import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Container, Grid } from '@mui/material';
import WorkCard from '../components/Works/WorkCard';
import WorkModal from '../components/Works/WorkModal';
import { motion } from 'framer-motion';
import { collection } from '../data/Works';
import splitToNChunks from '../scripts/methods';


const Works = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selected, setSelected] = React.useState(null);
  let filter = searchParams.get('filter') ?  searchParams.get('filter').toLowerCase() : null;
  const [open, setOpen] = React.useState(false);
  const handleOpen = (id) => {
    setSelected(id);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const temp = [...collection].filter(x => x.type.toLowerCase().includes(filter) || filter === 'all' || filter === null || filter === '');
  const gallery = splitToNChunks([...temp], 4);
  let count = 0;
  return (
    <React.Fragment>
      <Container id='works' maxWidth='xl' className='m-t-20'>
        <Grid container className='heading'>
          <Grid item md={5} xs={12}>
            <motion.div
            initial={{ opacity: 0, y:-20 }}
            animate={{ opacity: 1, y:0 }}
            transition={{
              duration: 0.9,
            }}>
              <h1>Portfolio</h1>
              <p className='font-size-md'>From logos, posters, graphic materials to UI/UX designs and development. Below are some of the works I've done over time. Select a filter if you only want to see a specific project type. <br/><br/>
              </p>
              <Link to={{  pathname: '/works', search: '?filter=all' }} className={`tags link  ${filter === 'all' || filter == null ? 'selected round' : ''}`}>All</Link> 
              <Link to={{  pathname: '/works', search: '?filter=Graphic design' }} className={`tags link  ${filter === 'graphic design' ? 'selected round' : ''}`}>Graphic Design</Link> 
              <Link to={{  pathname: '/works', search: '?filter=UI/UX design' }} className={`tags link ${filter === 'ui/ux design' ? 'selected round' : ''}`}>UI/UX Design</Link> 
              <Link to={{  pathname: '/works', search: '?filter=Development' }} className={`tags link ${filter === 'development' ? 'selected round' : ''}`}>Development</Link>  
             
            </motion.div>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth='xl' disableGutters id='gallery'>
        <motion.div
        key={filter}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.9,
        }}>
          {gallery.map((row, i) => (
            <Grid container spacing={1}>
              {row.map((item, j) => {
                count++;
                return (
                <Grid className='item-grid' item md={3} xs={6}>
                  <WorkCard 
                    i={count}
                    type={item.type}
                    thumbnail={item.thumbnail}
                    title={item.title}
                    handleOpen={() => handleOpen(item.id)}
                    />
                </Grid>
              )})}
            </Grid>
          ))}
        </motion.div>
      </Container>
      <WorkModal
        id={selected}
        open={open}
        handleClose={handleClose}
        />
    </React.Fragment>
  );
};

export default Works;
import React, { useLayoutEffect } from 'react';
import { Container, Grid, IconButton, Tooltip } from '@mui/material';
import { useParallax } from "react-scroll-parallax";
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import CardContentItem from '../components/CardContentItem';
import phone from '../imgs/21.png';
import poster from '../imgs/22.png';
import me from '../imgs/intro-me.jpg';

import { cardContentItems, imageGridOptions } from '../data/Landing';
import ImageGrid from '../scripts/ImageGrid';

const Home = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    ImageGrid(imageGridOptions);
  }, []);
  const parallax = useParallax({
    speed: -20,
  });
  const navigate = useNavigate();
  function redirectToWork(path){
    navigate(`works?filter=${path}`, {state: '/works'});
  };
  return (
    <Container id='main' maxWidth='xl' ref={parallax.ref}>
      <div id='home'>
      <section id='landing'>
        <Grid container spacing={0}>
          <Grid item xl={7} md={6} sm={6} xs={12} order={{ xs: 1, sm: 2, md: 2 }}>
            <motion.div
              initial={{ opacity: 0, y:-30 }}
              animate={{ opacity: 1, y:0 }}
              transition={{
                duration: 1.2,
              }}
            >
              <div className='black-brd-img'>
                <div className='me-placeholder'></div>
              </div>
            </motion.div>
          </Grid>
          <Grid item xl={5} md={6} sm={6} xs={12} order={{ xs: 2, sm: 1, md: 1 }} className='landing-container'>
            <Container maxWidth='sm'>
                <div className='heading'>
                <motion.div initial={{ opacity: 0, y:-30 }} animate={{ opacity: 1, y:0 }}
                  transition={{ duration: 1.5 }} >
                    <h1>HI! I'M JAM</h1>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y:-50 }} animate={{ opacity: 1, y:0 }}
                  transition={{ duration: 2 }} >
                    <div className='subtext'>A fullstack developer and <span className='miniver red'>multimedia designer</span> in the Philippines</div>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y:-70 }} animate={{ opacity: 1, y:0 }}
                  transition={{ duration: 2 }} >
                    <div className='btn-grp'>
                      <button className='primary-btn' onClick={() => redirectToWork('all')}>View my works</button>
                      <button className='secondary-btn' onClick={() => window.location = 'mailto:instructionlessbyjko@gmail.com'}>Contact me</button>
                    </div>
                  </motion.div>
                </div>
            </Container>
          </Grid>
        </Grid>
      </section>
      <section id='products'>
        <div className='black-heading'>
          <div>products products products <span className='red'>products</span> products products products products products products products products products products products products products products products products products products products products products products products </div>
        </div>
        <Grid container spacing={0} className='services left'>
          <Grid item md={6} sm={6}>
            <div class='sample'>
              <img src={phone} alt='sample work' />
            </div>
          </Grid>
          <Grid item md={6} sm={6}>
            <div className='content'>
              <div className='subheading'>What we offer &#11835; v.1</div>
              <h2>Design solutions</h2>
              <p>From graphic materials, logo design, posters, branding to web & mobile design. As a multimedia designer, we will help your product or business find its face. </p>
              <div className='btn-grp'>
                <button className='contained-btn' onClick={() => redirectToWork('all')}>View my works</button>
              </div>
            </div>
          </Grid>

        </Grid>
        <Grid container spacing={0} className='services right'>
          <Grid item md={6} sm={6} order={{ xs: 2, sm: 1, md: 1 }}> 
          <div className='content'>
              <div className='subheading'>Let's collaborate &#11835; v.1</div>
              <h2>Design Solutions</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex</p>
              <div className='btn-grp'>
                <button className='contained-btn' onClick={() => redirectToWork('all')}>View my works</button>
              </div>
            </div>
          </Grid>
          <Grid item md={6} sm={6}  order={{ xs: 1, sm: 2, md: 2 }}>
            <img src={poster} alt='poster sample'/>
          </Grid>
          
        </Grid>
      </section>
      <section id='services'>
      <div className='black-heading'>
          <div>services services services services services <span className='red'>services</span> services services services services services services services services services services services services services services services services services services services services services services services services services services services services services services services services services services services</div>
        </div>
       <div className='skillset'>
        {cardContentItems && cardContentItems.map((item, i) => (
          <CardContentItem 
            leftText={item.leftText}
            rightText={item.rightText}
            thumbnail={item.thumbnail}
            description={item.description}
            redirect={()=> redirectToWork(item.filter)}
            />
        ))}
        </div> 
      </section>
      <section id='contact'>
        <Grid container spacing={0}  className='business-card'>
          <Grid item md={5}>
            <img src={me} style={{ width: '100%' }} alt='me' />
          </Grid>
          <Grid item md={7}>
            <div className='content'>
              <div>
                <span className='miniver'>hello,</span>
                <div>My pen name is J.Ko but you can also call me Jam. I'm a fullstack developer based in the Philippines. Frontend development is my forte (in coding). <br/><br/> I'm also a self-taught multimedia designer. I used to create for leisure and fandoms I love but now I'm looking forward to share my skills to you!<br/><br/><br/></div>
              <div className='primary-font'>LET'S WORK TOGETHER</div>Email me at: <a href="mailto: instructionlessbyjko@gmail.com">instructionlessbyjko@gmail.com</a>
              <div className='socials'>
                <Tooltip arrow title='Behance'><IconButton color='black' size='small' onClick={() => window.open('https://www.behance.net/paperJammed', '_blank')}><i class="fa fa-behance"></i></IconButton></Tooltip>
                <Tooltip arrow title='LinkedIn'><IconButton color='black' size='small' onClick={() => window.open('https://www.linkedin.com/in/jamkriztleolila', '_blank')}><i class="fa fa-linkedin"></i></IconButton></Tooltip>
                <Tooltip arrow title='Instagram'><IconButton size='small' onClick={() => window.open('https://www.instagram.com/by.jko/', '_blank')}><i class="fa fa-instagram"></i></IconButton></Tooltip>
              </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </section>
      </div>

    </Container>
  );
};

export default Home;
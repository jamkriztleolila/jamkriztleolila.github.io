import React, { useLayoutEffect } from 'react';
import {  Button, Container, Grid, IconButton, Tooltip } from '@mui/material';
import { useParallax } from "react-scroll-parallax";
import Slider from "react-slick";
import { motion } from "framer-motion";
import CardContentItem from '../components/CardContentItem';
import ProductView from '../components/Product/ProductView';
import ProductImg from '../components/Product/ProductImg';
import { cardContentItems, imageGridOptions, carouselSettings, productCarousel } from '../data/Landing';
import ImageGrid from '../scripts/ImageGrid';

const Home = () => {
  useLayoutEffect(() => {
    ImageGrid(imageGridOptions);
  }, []);
  const parallax = useParallax({
    speed: -20,
  });
  return (
    <Container id='main' maxWidth='xl' ref={parallax.ref}>
      <div id='home'>
      <section id='landing'>
        <Grid container spacing={0}>
          <Grid item md={6} sm={6} xs={12} order={{ xs: 1, sm: 2, md: 2 }}>
            <motion.div
              initial={{ opacity: 0, y:-30 }}
              animate={{ opacity: 1, y:0 }}
              transition={{
                duration: 1.2,
              }}
            >
              <div className='black-brd-img'>
                {/* <img src={img} /> */}
                <div className='me-placeholder'></div>
              </div>
            </motion.div>
          </Grid>
          <Grid item md={6} sm={6} xs={12} order={{ xs: 2, sm: 1, md: 1 }}>
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
                      <button className='primary-btn'>View my works</button>
                      <button className='secondary-btn'>Contact me</button>
                    </div>
                  </motion.div>
                </div>
            </Container>
          </Grid>
        </Grid>
      </section>
      <section id='products'>
        <div className='border'>
          <div className='line-t'></div>
          <div className='line-l'></div>
          <div className='line-r'></div>
           <div className='line-b'></div>
        </div>
        <div className='border-text'>
          <span>Some of my projects</span>
        </div>
        <Slider {...carouselSettings} className='product-slider'>
          {productCarousel && productCarousel.map((item) => (
            <Container xl className='product-carousel'>
              <Grid container spacing={0}>
                <Grid item md={5} xs={12}  order={{ sm: 1, md: 2 }}>
                  <ProductImg img={item.img} />
                </Grid>
                <Grid item md={7} xs={12}  order={{ sm: 2, md: 1 }}>
                  <ProductView
                    name={item.name}
                    date={item.date}
                    type={item.type}
                    description={item.description} />
                </Grid>
              </Grid>
            </Container>
          ))}
        </Slider>
      </section>
      <section id='intro'>
      <div className='header'>
        <span>Check out my works</span>
      </div>
      <div className='skillset'>
        {cardContentItems && cardContentItems.map((item, i) => (
          <CardContentItem 
            leftText={item.leftText}
            rightText={item.rightText}
            thumbnail={item.thumbnail}
            description={item.description}
            />
        ))}
        </div>
      </section>
      <section id='contact'>
        {/* <Grid container spacing={0}>
          <Grid item md={5}> */}
            <div className='business-card'>
              <div className='heading'>— reach me at</div>
            <div className='info'>
              <span className='name'>Jam Kriztle Olila</span><br/>
              <div className='details'>
              <span>instructionlessbyjko@gmail.com</span><br/>
                <span>jko.github.io</span>
              </div>
              <div className='socials'>
                <Tooltip arrow title='Behance'><IconButton color='black' size='small'><i class="fa fa-behance"></i></IconButton></Tooltip>
                <Tooltip arrow title='LinkedIn'><IconButton color='black' size='small'><i class="fa fa-linkedin"></i></IconButton></Tooltip>
                <Tooltip arrow title='Instagram'><IconButton size='small'><i class="fa fa-instagram"></i></IconButton></Tooltip>
                {/* <a href="#" class="fa fa-behance"></a> */}
              </div>
            </div>
            </div>
          {/* </Grid>
          <Grid item md={7}>
            {/* <div className='contact-form'>
              ass
            </div> 
          </Grid> 
        </Grid>*/}
      </section>

{/*}                <div className='thumbnail'>
                  <img src={intro} />
                </div>
                <div className='description'>
                  <div className='title'>Posters</div>
                  <div className='short-text'>Lorem ipsum yada yada yada yada yada</div>
                </div>
              </div>
              <div className='item m-t-30'>
                <div className='thumbnail'>
                  <img src={intro} />
                </div>
                <div className='description'>
                  <div className='title'>Posters</div>
                  <div className='short-text'>Lorem ipsum yada yada yada yada yada</div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item md={6}>
          <div className='m-100'>
              <div className='item'>
                <div className='thumbnail'>
                  <img src={intro} />
                </div>
                <div className='description'>
                  <div className='title'>Posters</div>
                  <div className='short-text'>Lorem ipsum yada yada yada yada yada</div>
                </div>
              </div>
              <div className='item m-t-30'>
                <div className='thumbnail'>
                  <img src={intro} />
                </div>
                <div className='description'>
                  <div className='title'>Posters</div>
                  <div className='short-text'>Lorem ipsum yada yada yada yada yada</div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </section> */}
      {/* <section id='intro'>
        <Grid container spacing={0}>
          <Grid item md={2} sm={12}>
              <div className='title'>
                <span><h1>Introduction asdads Introduction Introduction  </h1></span>
              </div>
          </Grid> 
          <Grid item md={5} sm={12}>
              <div className='img'>
                <img src={intro} />
              </div>
          </Grid>
          <Grid item md={5} sm={12}>
              <div className='content'>
                
              </div>
          </Grid>
        </Grid>
      </section> */}
      </div>

    </Container>
  );
};

export default Home;
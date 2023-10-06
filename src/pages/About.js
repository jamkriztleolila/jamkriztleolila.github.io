import React, { useEffect } from 'react';
import { Container, Grid, Tooltip, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import me1 from '../imgs/me/1.png';
import me2 from '../imgs/me/2.png';
import me3 from '../imgs/me/3.png';
import me4 from '../imgs/me/4.png';
import { otherSkills, skills, software, softSkills } from '../data/About';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container id='about' maxWidth='md'>
      <div className='subheading'>
        October 2023
      </div>
      <div className='heading'>
        <div className='content'>
          <motion.div
            className='text'
            initial={{ opacity: 0, x:-30 }}
            animate={{ opacity: 1, x:0 }}
            transition={{
              duration: 1.2,  
            }}>About me</motion.div>
          </div>
          <div className='content'>
          <motion.div
            className='text'
            initial={{ opacity: 0, x:30 }}
            animate={{ opacity: 1, x:0 }}
            transition={{
              duration: 1.2,  
            }}>And what you need to know</motion.div>
          </div>
      </div>
      <Grid container spacing={0} className='images'>
        <Grid item md={3} xs={3}>
          <img src={me1} alt='cute pic of me' />
        </Grid>
        <Grid item md={3} xs={3}>
          <img src={me3} alt='pic of me with red filter'  />
        </Grid>
        <Grid item md={3} xs={3}>
          <img src={me2} alt='another black and white pic of me' />
        </Grid>
        <Grid item md={3} xs={3}>
          <img src={me4} alt='and another cute one' />
        </Grid>
      </Grid>
      <Grid container spacing={0}  className='basic-details'>
        <Grid item md={8} xs={6} className='name'><span className='highlight'>Name:</span> Jam Kriztle Olila</Grid>
        <Grid item md={4} xs={6} className='location'><span className='highlight'>Location:</span>Mandaluyong, PH</Grid>
      </Grid>
      <Grid container spacing={5} className='text-justify'>
        <Grid item md={3} >
          <h2>Hello, I'm Jam!</h2>
          <p> I've been working in the industry as a fullstack developer for nearly five years, although my love for designing already started since the days of Windows Vista. I enjoy being outside of my comfort zone which eventually led me to learning new skills. However, my strongest expertise are graphic design, UI/UX design, and frontend development. <br/><br/>

          After being in the corporate world for a couple of years, I want to ignite the creative spark I once have and want to share my skills with you. Let's work together!</p> <br/>
        </Grid>
        <Grid item md={6} className='skills'>
            <div className='section-title'>Software Proficiency</div>
              <div className='section software'>
                {software && software.map((item) => (
                  <Tooltip arrow title={item.title}><IconButton size='small'> <img src={item.icon} style={{ width: '35px'}} alt={`${item.title} icon`}/></IconButton></Tooltip>
              ))}
              </div>
            <div className='section-title'>Skills</div>
            {skills && skills.map((item) => (
              <div className='section-title skill-bar'>
                <motion.div initial={{ width: item.initial }}
                  animate={{ width: item.percentage }}
                  transition={{
                    duration: 1.2,  
                  }} className='percent'>
                  {item.skill}
                </motion.div>
            </div>
            ))}
            <div className='section-title'>Other Skills</div>
            {otherSkills && otherSkills.map((item) => (
              <span className='tags round'>
                  {item.skill}
            </span>
            ))}

            <div className='section-title'>Soft Skills</div>
            {softSkills && softSkills.map((item) => (
              <span className='tags round'>
                  {item}
            </span>
            ))}
            <div className='section-title m-b-10'>Socials</div>
            <div className='socials'>
              <Tooltip arrow title='Behance'><IconButton color='black' size='small' onClick={() => window.open('https://www.behance.net/paperJammed', '_blank')}><i class="fa fa-behance"></i></IconButton></Tooltip>
              <Tooltip arrow title='LinkedIn'><IconButton color='black' size='small' onClick={() => window.open('https://www.linkedin.com/in/jamkriztleolila', '_blank')}><i class="fa fa-linkedin"></i></IconButton></Tooltip>
              <Tooltip arrow title='Instagram'><IconButton size='small' onClick={() => window.open('https://www.instagram.com/by.jko/', '_blank')}><i class="fa fa-instagram"></i></IconButton></Tooltip>
            </div>
        </Grid>
        <Grid item md={3} className='experience'>
        <div className='section-title'>Experience</div>
          <div className='section'>
            <div className='title red'><b>Consultant (Fullstack Developer)</b></div>
            <div className='description'>
              RCG, Philiippines - Project Elavon
            </div>
            <div className='dates'>2021-present</div>
          </div>
           <div className='section'>
            <div className='title'><b>Fullstack Developer</b></div>
            <div className='description'>
              Zencomputes, Singapore
            </div>
            <div className='dates'>2019-2020</div>
          </div>  
          <div className='section'>
            <div className='title'><b>Junior Software Developer</b></div>
            <div className='description'>
              Synerteq, Philippines
            </div>
            <div className='dates'>2018-2019</div>
          </div>
          <div className='section'>
            <div className='title'><b>Creative Team Lead</b></div>
            <div className='description'>
              FEU Tech, Philippines
            </div>
            <div className='dates'>2017-2018</div>
          </div>  
          <div className='divider'></div>
          <div className='section-title'>Education</div>
          <div className='section'>
            <div className='title'><b>BS Computer Science with specialization in Software Engineering</b></div>
            <div className='description'>
            Far Eastern University - Institute of Technology
            </div>
            <div className='dates'>2014-2018</div>
          </div>  
          <div className='section'>
            <div className='title'><b>High School</b></div>
            <div className='description'>
              International School for Better Beginnings
            </div>
            <div className='dates'>2010-2014</div>
          </div>
        </Grid>
      </Grid>
      <div>
        <div className='divider'></div>
        <div className='p-l-10 p-b-20 font-size-xs primary-font transform-uppercase'>LET'S WORK TOGETHER <a href="mailto: instructionlessbyjko@gmail.com">instructionlessbyjko@gmail.com</a></div>
      </div>
    </Container>
  );
};

export default About;
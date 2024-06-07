import React from 'react';

// import images
import MeImg from '../img/about/ryan.png'

// import Link
import { Link } from 'react-router-dom';

// import motion
import { motion } from 'framer-motion';

// import transition
import { transition1 } from '../transitions';

const About = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: '100%' }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: '100%' }}
      transition={ transition1 }
      className='section'
    >
      <div className='container mx-auto h-full relative'>
        {/* text and img wrapper */}
        <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
          {/* img */}
          {/* <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'> */}
          <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none'>
            <img src={MeImg} alt='' />
          </div>

          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: '-80%' }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: '-80%' }}
            transition={ transition1 }
            className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'
          >
            <h1 className='h1'>About me</h1>
            <p className='mb-12 max-w-sm'>
              Professionally shooting museum object images, I have years of 
              experience to highlight the best angles for many product types.
              <br />
              <br />
              Compassion guides my process. I forge strong relationships with those
              I work to best understand what they need for the project.
            </p>

            <Link to={'/portfolio'} className='btn'>
              View my work
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;

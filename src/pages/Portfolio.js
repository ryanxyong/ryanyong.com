import React from 'react';

// import images
import Img1 from '../img/portfolio/1.jpg';
import Img2 from '../img/portfolio/2.jpg';
import Img3 from '../img/portfolio/3.jpg';
import Img4 from '../img/portfolio/4.jpg';
import Img5 from '../img/portfolio/5.jpg';
import Img6 from '../img/portfolio/6.jpg';
import Img7 from '../img/portfolio/7.jpg';
import Img8 from '../img/portfolio/8.jpg';
import Img9 from '../img/portfolio/9.jpg';
import Img10 from '../img/portfolio/10.jpg';
import Img11 from '../img/portfolio/11.jpg';
import Img12 from '../img/portfolio/12.jpg';
import Img13 from '../img/portfolio/13.jpg';
import Img14 from '../img/portfolio/14.jpg';

// import Link
import { Link } from 'react-router-dom';

// import motion
import { motion } from 'framer-motion';

// import transition
import { transition1 } from '../transitions';

const Portfolio = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: '100%' }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: '100%' }}
      transition={ transition1 }
      className='section'
    >
      <div className='container mx-auto h-full relative'>
        {/* <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'> */}
        <div className='flex flex-col lg:flex-row h-full justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: '-80%' }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: '-80%' }}
            transition={ transition1 }
            className='flex flex-col lg:items-start'
          >
            <h1 className='h1'>Portfolio</h1>
            <p className='mb-12 max-w-sm'>
              I am an object photographer by trade. I have spent the past 3 years
              taking archival-quality photographs for the Dartmouth College Hood 
              Museum of Art. Now, I bring my specialties to the world of product
              photography.
              <br />
              <br />
              Feel free to send me an inquiry if interested for a shoot!
            </p>

            <Link to={'/contact'} className='btn mb-[30px] mx-auto lg:mx-0'>
              book me
            </Link>
          </motion.div>

          {/* img grid */}
          <div className='grid grid-cols-2 gap-4'>
            {/* img */}
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' 
                src={Img1} 
                alt='' 
              />
            </div>

            {/* img */}
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' 
                src={Img2} 
                alt='' 
              />
            </div>

            {/* img */}
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' 
                src={Img3} 
                alt='' 
              />
            </div>

            {/* img */}
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' 
                src={Img4} 
                alt='' 
              />
            </div>

            {/* img */}
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' 
                src={Img5} 
                alt='' 
              />
            </div>

            {/* img */}
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' 
                src={Img6} 
                alt='' 
              />
            </div>

            {/* img */}
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' 
                src={Img7} 
                alt='' 
              />
            </div>

            {/* img */}
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' 
                src={Img8} 
                alt='' 
              />
            </div>

            {/* img */}
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' 
                src={Img9} 
                alt='' 
              />
            </div>

            {/* img */}
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' 
                src={Img10} 
                alt='' 
              />
            </div>

            {/* img */}
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' 
                src={Img11} 
                alt='' 
              />
            </div>

            {/* img */}
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' 
                src={Img12} 
                alt='' 
              />
            </div>

            {/* img */}
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' 
                src={Img13} 
                alt='' 
              />
            </div>

            {/* img */}
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' 
                src={Img14} 
                alt='' 
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;

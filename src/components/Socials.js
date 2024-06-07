import React from 'react';

// import icons
import {
  ImFacebook,
  // ImTwitter,
  // ImPinterest,
  ImInstagram,
  // ImYoutube,
} from 'react-icons/im';

const Socials = () => {
  return <div className='hidden xl:flex ml-24'>
    <ul className='flex gap-x-4'>
      <li>
        <a href="http://www.instagram.com/the.ryan.yong" target='_blank'>
          <ImInstagram />
        </a>
      </li>
      <li>
        <a href="http://www.facebook.com" target='_blank'>
          <ImFacebook />
        </a>
      </li>
    </ul>
  </div>;
};

export default Socials;

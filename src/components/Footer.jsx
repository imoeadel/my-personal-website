import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="flex flex-row justify-between py-5 bg-gray-200 px-10">
      <div>
        <h3 className="text-md text-gray-700 font-semibold">
          Copyrights @Moe Adel
        </h3>
      </div>
      <div className="flex flex-row text-2xl gap-2 text-gray-700">
        <a href="https://www.linkedin.com/in/imoedev/" target={'_blank'} className='hover:text-teal-600'>
          <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/in/imoedev/" target={'_blank'} className='hover:text-teal-600'>
          <AiFillLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;

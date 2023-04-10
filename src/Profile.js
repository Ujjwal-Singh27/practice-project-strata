import React from 'react';
import profile from './avatar.jpg';
import {FaTwitter} from "react-icons/fa";
import {FaDribbble} from "react-icons/fa";
import {FaEnvelope} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";

const Profile = () => {
  return (
    <div 
    style={{backgroundImage: "url('background-image/bg.jpg')" }}
    className="w-1/3 px-12 pt-24 pb-12 object-cover bg-center flex flex-col justify-between fixed h-screen" >
      <header className='flex flex-col items-end '>
        <img src={profile} alt='' className='rounded-full w-24 mb-4'/>
        <h1 className='text-gray-700 text-xl font-semibold text-right'>
            <span className='text-white'>I am Strata, </span>
            A responsive site Images from <a href='https://www.pexels.com/'>Pexels</a>
        </h1>
      </header>
      <footer>
        <div>
          <ul className='flex flex-row justify-end mb-1'>
            <li>
              <a href='https://twitter.com' target='_blank'><FaTwitter className='mr-4 w-6 h-8 fill-gray-300'/></a>
            </li>
            <li>
              <a><FaGithub className='mr-4 w-6 h-8 fill-gray-300'/></a>
            </li>
            <li>
              <a><FaDribbble className='mr-4 w-6 h-8 fill-gray-300'/></a>
            </li>
            <li>
              <a><FaEnvelope className='w-6 h-8 fill-gray-300'/></a>
            </li>
          </ul>
          <ul className='flex flex-col items-end text-gray-400 font-normal'>
            <li>© Ujjwal.</li>
            <li>Design: <a href='https://github.com/Ujjwal-Singh27' className='text-green-300 border-b border-dotted border-green-300 hover:border-none'>Ujjwal</a></li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Profile

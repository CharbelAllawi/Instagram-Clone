import React from 'react';
import './style.css';
import home from './LandingIcons/home.png';
import profile from './LandingIcons/profile.png';
import search from './LandingIcons/search.png';
import upload from './LandingIcons/upload.png';

const Landing = () => {
  return (
    <div className='landingcontainer'>
      <div className='imagecont'>
        <img className='instaimg' src="https://i.imgur.com/zqpwkLQ.png" alt="Instagram" />
      </div>
      <div className='icon'>
        <img src={profile}></img>
        <span className='text'>Profile</span>
      </div>
      <div className='icon'>
        <img src={home}></img>
        <span className='text'>Home</span>
      </div>
      <div className='icon'>
        <img src={upload}></img>
        <span className='text'>Upload</span>
      </div>
      <div className='icon'>
        <img src={search}></img>
        <span className='text'>Search</span>

      </div >
    </div>

  );
};

export default Landing;

import React, { useRef } from 'react';
import axios from 'axios'; // Import the axios library
import './style.css';
import home from './LandingIcons/home.png';
import profile from './LandingIcons/profile.png';
import search from './LandingIcons/search.png';
import upload from './LandingIcons/upload.png';

const Landing = () => {
  const fileInputRef = useRef(null);



  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (e) => {
    const authtoken = localStorage.getItem("authtoken");
    const data = new FormData();
    data.append('image_url', e.target.files[0]);

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/post',
        data,
        {
          headers: {
            Authorization: `Bearer ${authtoken}`,
            'Content-Type': 'multipart/form-data', // Correct content type for FormData
          },
        }

      );
      window.location.reload(false);

    } catch (error) {
      console.log('Error posting image:', error);
    }
  };
  return (
    <div className='landingcontainer'>
      <div className='imagecont'>
        <img className='instaimg' src="https://i.imgur.com/zqpwkLQ.png" alt="Instagram" />
      </div>
      <div className='icon-wrap'>
        <img className='icon' src={profile} alt="Profile" />
        <span className='text' >Logout</span>
      </div>
      <div className='icon-wrap'>
        <img className='icon' src={home} alt="Home" />
        <span className='text'>Home</span>
      </div>
      <div className='icon-wrap' onClick={handleUploadClick}>
        <img className='icon' src={upload} alt="Upload" />
        <span className='text'>Upload</span>
      </div>
      <div className='icon-wrap'>
        <img className='icon' src={search} alt="Search" />
        <span className='text'>Search</span>
      </div>
      <input
        ref={fileInputRef}
        type="file"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default Landing;

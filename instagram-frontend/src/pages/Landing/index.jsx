import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Card from '../../components/Card';
import axios from 'axios';
import { useState } from 'react';

const Landing = () => {
  const authtoken = localStorage.getItem('authtoken')
  const [posts, setPosts] = useState(['']);

  useEffect(() => {
    getPosts();
  }, [authtoken]);

  const getPosts = async () => {
    try {
      const response = await axios.get(
        'http://127.0.0.1:8000/api/getposts',
        {
          headers: {
            Authorization: `Bearer ${authtoken}`,
            'Content-Type': 'application/json'
          },
        }
      );
      console.log('User Posts:', response.data);
    } catch (error) {
      console.log('Error fetching posts:', error);
    }
  };


  return (
    <div>
      <Navbar />
      {posts.map(post => (
        <Card
          image_url={post.image_url}
          likes_count={post.likes_count}
        />
      ))}
    </div>
  );
}
export default Landing;

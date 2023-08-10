import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Card from '../../components/Card';
import axios from 'axios';
import { useState } from 'react';

const Landing = () => {
  
  const authtoken = localStorage.getItem('authtoken');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const response = await axios.get(
        'http://127.0.0.1:8000/api/getposts',
        {
          headers: {
            Authorization: `Bearer ${authtoken}`,
            'Content-Type': 'application/json',
          },
        }
      );
      setPosts(response.data.posts);
    } catch (error) {
      console.log('Error fetching posts:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <ul className="cards">
        {posts.map((post) => (
          <Card post_id={post.id} key={post.id} image_url={post.image_url} likes_count={post.likes_count} />
        ))}
      </ul>
    </div>
  );
};

export default Landing;

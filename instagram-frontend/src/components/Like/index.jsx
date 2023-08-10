import React, { useState, useEffect } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import axios from 'axios';
import './style.css';

const Like = ({ likes_count, post_id }) => {
  const authtoken = localStorage.getItem('authtoken');

  const [like, setLike] = useState(false);
  const [count, setCount] = useState(likes_count);

  useEffect(() => {
    checklikes();
  }, []);


  const checklikes = async () => {
    let check = await checklike();
    if (check == "already liked") {
      setLike(true)
    }


  }

  const handleLikes = () => {
    if (!like) {
      getlikes();
      setLike(true);
      setCount(count + 1);
    } else {
      removelike();
      setLike(false);
      setCount(count - 1);
    }
  };

  const getlikes = async () => {
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/like',
        { post_id },
        {
          headers: {
            Authorization: `Bearer ${authtoken}`,
            'Content-Type': 'application/json',
          },
        }
      );
      return response.data.message
    } catch (error) {
      console.log('Error liking post:', error);
    }
  };


  const checklike = async () => {
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/checklike',
        { post_id },
        {
          headers: {
            Authorization: `Bearer ${authtoken}`,
            'Content-Type': 'application/json',
          },
        }
      );
      return response.data.message
    } catch (error) {
      console.log('Error liking post:', error);
    }
  };
  const removelike = async () => {
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/unlike',
        { post_id },
        {
          headers: {
            Authorization: `Bearer ${authtoken}`,
            'Content-Type': 'application/json',
          },
        }
      );
      return response.data.message
    } catch (error) {
      console.log('Error liking post:', error);
    }
  };


  return (
    <div>

      {like ? (
        <AiFillHeart
          size={30}
          className="text-danger"
          onClick={handleLikes}
          style={{ cursor: "pointer", color: "red" }}
        />
      ) : (
        <AiOutlineHeart
          size={30}
          onClick={handleLikes}
          style={{ cursor: "pointer" }}
        />
      )}
      <p>Likes: {count}</p>
    </div>
  );
};

export default Like;

import React, { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'; // Import the icons

import './style.css';

const Like = ({ imageUrl }) => { // Make sure to pass imageUrl as a prop
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);

  // Handle likes
  const handleLikes = () => {
    if (!like) {
      setLike(true);
      setCount(count + 1);
    } else {
      setLike(false);
      setCount(count - 1);
    }
  };

  return (
    <div>

      {like ? (
        <AiFillHeart
          size={30}
          className="text-danger"
          onClick={handleLikes}
          style={{ cursor: "pointer" }}
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

import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';
import Card from '../Card';

const Modal = ({ isOpen, onClose, children }) => {
  const authtoken = localStorage.getItem('authtoken');

  const [users, setUsers] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]); // Maintain a separate state for filtered users

  useEffect(() => {
    if (isOpen) {
      getUsers();
    }
  }, [isOpen]);

  useEffect(() => {
    // Filter users based on searchInput
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchInput, users]);

  const getUsers = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/getallusers', {
        headers: {
          Authorization: `Bearer ${authtoken}`,
          'Content-Type': 'application/json',
        },
      });

      const usersWithFollowStatus = await Promise.all(
        response.data.users.map(async user => {
          const userFollowStatus = await checkFollowStatus(user.id);
          return { ...user, isFollowing: userFollowStatus };
        })
      );

      setUsers(usersWithFollowStatus);
    } catch (error) {
      console.log('Error fetching users:', error);
    }
  };

  const checkFollowStatus = async userId => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/checkfollowstatus/${userId}`, {
        headers: {
          Authorization: `Bearer ${authtoken}`,
          'Content-Type': 'application/json',
        },
      });

      return response.data.isFollowing;
    } catch (error) {
      console.log('Error checking follow status:', error);
      return false;
    }
  };

  const handleSearchChange = event => {
    setSearchInput(event.target.value);
  };

  const handleFollowUnfollow = async (followerId, isFollowing) => {
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/followunfollow',
        { follower_id: followerId },
        {
          headers: {
            Authorization: `Bearer ${authtoken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (
        response.data.message === 'User followed successfully' ||
        response.data.message === 'User unfollowed successfully'
      ) {
        setUsers(prevUsers =>
          prevUsers.map(user =>
            user.id === followerId ? { ...user, isFollowing: !isFollowing } : user
          )
        );
      }
    } catch (error) {
      console.log('Error follow/unfollow:', error);
    }
  };

  return (
    <div>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <input
              className="search-input"
              type="text"
              placeholder="Search..."
              value={searchInput}
              onChange={handleSearchChange}
            />

            <span className="close" onClick={onClose}>
              &times;
            </span>
            {children}
            <ul className="cards">
              {filteredUsers.map(user => (
                <li key={user.username} className="User">
                  {user.name}
                  <button onClick={() => handleFollowUnfollow(user.id, user.isFollowing)}>
                    {user.isFollowing ? 'Unfollow' : 'Follow'}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;

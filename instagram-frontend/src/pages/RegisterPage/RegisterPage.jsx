import React from 'react'
import Input from '../../components/base/Input'
import './style.css';
import Button from '../../components/base/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const RegisterPage = (onchange) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const handleRegister = () => {
    const data = {
      email: email,
      password: password,
      name: name,
      username: username,
    };

    axios.post('http://127.0.0.1:8000/api/register', data)
      .then(response => {
        navigate('/');
      })
      .catch(error => {
        console.log('error', error);
      });
  };

  return (
    <div className='flex center register'>
      <div className="container">
        <div className='instaimg'>
          <img src="https://i.imgur.com/zqpwkLQ.png" />
        </div>
        <div className='inputdivs'>
          <Input
            type={'text'} label={false} placeholder={'Name'} value={name}
            onChange={(e) => setName(e.target.value)}></Input>
          <Input
            type={'text'} label={false} placeholder={'Username'} value={username}
            onChange={(e) => setUsername(e.target.value)}></Input>
          <Input
            type={'email'} label={false} placeholder={'Email'} value={email}
            onChange={(e) => setEmail(e.target.value)}></Input>
          <Input
            type={'password'} label={false} placeholder={'Password'} value={password}
            onChange={(e) => setPassword(e.target.value)}></Input>
        </div>
        <div className='registerbtn'>
          <Button value={'Register'} onClick={handleRegister} />
        </div>
        <div className='registerlink'>
          <p>Already have an account? <a className='log' href="/">Click Here</a></p>
        </div>
      </div>
      <div>
      </div>
    </div >
  )
}

export default RegisterPage;
import React from 'react'
import Input from '../../components/base/Input'
import './style.css';
import Button from '../../components/base/Button';
import axios from 'axios';

import { useState } from 'react';

const LoginPage = (onchange) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    const data = {
      email: email,
      password: password,
    };

    axios.post(`http://127.0.0.1:8000/api/login`, data)
      .then(response => console.log(response.data))
      .catch(error => console.log('error', error));

  };
  return (
    <div className='flex center login'>
      <div className="container">
        <div className='instaimg'>
          <img src="https://i.imgur.com/zqpwkLQ.png" />
        </div>
        <div className='inputdivs'>
          <Input type={'text'} label={false} placeholder={'Email'} value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
          <Input type={'password'} label={false} placeholder={'Password'} value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
        </div>
        <div className='loginbtn'>
          <Button value={'Login'} onClick={handleLogin} />
        </div>
        <div className='registerlink'>
          <p>Don't have an account? <a className='reg' href="/Register">Click Here</a></p>
        </div>
      </div>
      <div>
      </div>
    </div >
  )
}

export default LoginPage;
import React from 'react'
import Input from '../../components/base/Input'
import './style.css';
import Button from '../../components/base/Button';



const RegisterPage = (onchange) => {
  return (
    <div className='flex center Register'>
      <div className="container">
        <div className='instaimg'>
          <img src="https://i.imgur.com/zqpwkLQ.png" />
        </div>
        <div className='inputdivs'>
          <Input type={'text'} label={false} placeholder={'Name'}></Input>
          <Input type={'text'} label={false} placeholder={'Username'}></Input>
          <Input type={'email'} label={false} placeholder={'Email'}></Input>
          <Input type={'password'} label={false} placeholder={'Password'}></Input>
        </div>
        <div className='loginbtn'>
          <Button value={'Register'} />
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
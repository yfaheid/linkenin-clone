import React from 'react'
import './Login.css'
import LinkedInIcon from './linkedin.png';


function Login() {
  return (
    <div className='login'>
        <img src={LinkedInIcon} alt="" />

        <form>
          <input placeholder='Full name (requried if registering)' type="text" />

          <input placeholder='Profile pic URL (optional)' type="text" />
        </form>
    </div>
  )
}

export default Login
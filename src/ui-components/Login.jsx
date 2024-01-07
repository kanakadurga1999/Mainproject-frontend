import React, { useState } from 'react';
import './Login.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import axios from 'axios';

const Login = () => {
  const [user,setUser]= useState({
    email:'',
    password:''
  })
  const addHandler =()=>{
    axios.post('htpp://localhost:3500/user/login',user).then((res)=>{
      console.log(res);
    })
  }
  return (
    <div className='wrapper' >
        <form action=''>
            <h1>Login</h1>
            <div className='input-box'>
                <input type='text' placeholder='Username' required onChange={(e)=>{
                  setUser({...user,email:e.target.value})
                }}/>
                <FaUser className='icon'/>
            </div>
            <div className='input-box'>
                <input type='password' placeholder='Password' required onChange={(e)=>{
                  setUser({...user,password:e.target.value})
                }}/>
                <FaLock className='icon' />
            </div>

            <div className='remember-forgot'>
              <label>  <input type='checkbox' />Remember me</label>
              <a href='#'>Forgot password</a>
            </div>

            <button type='submit' onClick={addHandler}>Login</button>

            <div className='register-link'>
                <p>Don't have an account?<a href='#'>Register</a></p>

            </div>

        </form>

    </div>
  )
}

export default Login
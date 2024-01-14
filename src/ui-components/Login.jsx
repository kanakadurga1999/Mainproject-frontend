// import React, { useState } from 'react';
// import './Login.css';
// import { FaUser } from "react-icons/fa";
// import { FaLock } from "react-icons/fa";
// import axios from 'axios';

// const Login = () => {
//   const [user,setUser]= useState({
//     email:'',
//     password:''
//   })
//   const addHandler =()=>{
//     axios.post('htpp://localhost:3500/user/login',user).then((res)=>{
//       console.log(res);
//     })
//   }
//   return (
//     <div className='wrapper' >
//         <form action=''>
//             <h1>Login</h1>
//             <div className='input-box'>
//                 <input type='text' placeholder='Username' required onChange={(e)=>{
//                   setUser({...user,email:e.target.value})
//                 }}/>
//                 <FaUser className='icon'/>
//             </div>
//             <div className='input-box'>
//                 <input type='password' placeholder='Password' required onChange={(e)=>{
//                   setUser({...user,password:e.target.value})
//                 }}/>
//                 <FaLock className='icon' />
//             </div>

//             <div className='remember-forgot'>
//               <label>  <input type='checkbox' />Remember me</label>
//               <a href='#'>Forgot password</a>
//             </div>

//             <button type='submit' onClick={addHandler}>Login</button>

//             <div className='register-link'>
//                 <p>Don't have an account?<a href='#'>Register</a></p>

//             </div>

//         </form>

//     </div>
//   )
// }

// export default Login

import { Link, useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Container,
  FormGroup,
  FormControl,
} from "@mui/material";
import React from "react";
import useAuth from "../hooks/useAuth";
import axios from "../api/axios";
import useAxiosPrivate from '../hooks/useAxiosPrivate';



const Login = () => {

  const { setAuth } = useAuth();
  const userRef = useRef();
  const errRef = useRef();

  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const handleSubmit = async () => {
    try {
        const response = await axios.post('/api/v1/auth/login', {username, password})
        console.log(response.data)
            if(response){
              const accessToken = response?.data?.token
              const refreshToken = response?.data?.refreshToken
              localStorage.setItem('accessToken', accessToken)
              localStorage.setItem('refreshToken', refreshToken)
              
              
              const roles = response?.data?.user?.roles;
              //  setAuth({ username, password, roles, accessToken});
              setUserName('');
              setPassword('');
              navigate('/dash')
            }
            
            
    } catch (error) {
      console.log(error)
        if(!error?.response){
            setErrMsg('No Server Response');
        }else if (error.response?.status === 400){
            setErrMsg('Missing Username or Password');
        }else if (error.response?.status === 401){
            setErrMsg('Unauthorized');
        }else {
            setErrMsg('Login Failed');
        }
    }
  };

  return (
    <section className="public">
      {/* <Typography variant="h3"> </Typography> */}
      <div className="outercontainer">
        <Container className="outerbox">
          <Typography variant="h4">Please Log In</Typography>
          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>
            {errMsg}
          </p>
          <FormGroup>
            <FormControl>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12}>
                  <TextField
                    variant="outlined"
                    label="username"
                    name="username"
                    fullWidth
                    ref={userRef}
                    onChange={(event) => setUserName(event.target.value)}
                    value={username}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <TextField
                    variant="outlined"
                    label="password"
                    name="password"
                    fullWidth
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
                    required
                  />
                </Grid>
                <Grid className="buttoncontainer" item xs={12} sm={12} md={12}>
                  <Button onClick={handleSubmit} id="ctaprimary" variant="contained">
                    <Link
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Log in
                    </Link>
                  </Button>
                </Grid>
              </Grid>
            </FormControl>
          </FormGroup>
        </Container>
      </div>
    </section>
  );
};

export default Login;
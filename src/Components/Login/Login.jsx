import React, { useContext } from 'react'
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { userLoginContext } from '../../Context/Context';
import './Login.css'
function Login() {

  const { setUserLoginInfo } = useContext(userLoginContext);
  const { userLoginInfo } = useContext(userLoginContext);
  const [userData, setUserData] = useState({
    name: '',
    password: '',
    email: '',
  })

  const handleSubmitData = (e) => {
    e.preventDefault();
    console.log(userData);
    setUserLoginInfo(userData);
    setUserData({
      name: '',
      password: '',
      email: ''
    })
  }
  const handleInputChange = (e) => {
    let fieldName = e.target.name;
    let fieldValue = e.target.value;
    setUserData((currValue) => {
      return { ...currValue, [fieldName]: fieldValue }
    });
  }
  if (!userLoginInfo) return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign UP</h1>
        <div className="loginsignup-fields">
          <TextField id="outlined-basic" label="Enter Name" variant="outlined" value={userData.name} required name='name' onChange={handleInputChange}/>
          <TextField id="outlined-basic" label="Password" variant="outlined" type="password" value={userData.password} required name='password' onChange={handleInputChange} />
          <TextField id="outlined-basic" label="Email" variant="outlined" type="email" value={userData.email} required name='email' onChange={handleInputChange} />
        </div>
        <div className="loginsignup-agree">
          <FormControlLabel control={<Checkbox />} label="Check Privacy and Policy" required />
        </div>
        <Button variant="contained" onClick={handleSubmitData}>Log in </Button>
      </div>
    </div>
  )

  return (<div className='user-login'><p>You Login Sucessfully !</p></div>)
}

export default Login
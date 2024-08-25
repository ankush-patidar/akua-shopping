import React, { useContext } from 'react'
import { userLoginContext } from '../../Context/Context'
import Login from '../Login/Login';
import './Profile.css'
function Profile() {
    const {userLoginInfo} = useContext(userLoginContext);
    
    
    if(!userLoginInfo) return <h4 className='profile-container' style={{display:'flex',flexDirection:'column' , alignItems:'center',padding:'2rem'}}>Please Login! <Login /> </h4>

    return(
        <div className='profile-container' style={{display:'flex',flexDirection:'column' , alignItems:'center',justifyItems:'center',padding:'1rem' ,border:'1px solid black' , margin:'1rem'}}>
            <h4>User : {userLoginInfo.name} </h4>
            <h4>Password : {userLoginInfo.password} </h4>
            <h4>Email : {userLoginInfo.email} </h4>
        </div>
    )
    
}
 
export default Profile
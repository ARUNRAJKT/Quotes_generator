import './profile.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../navbar';



function Profile() {
    const [profile,setProfile]=useState("")
    const getProfile=()=>{
        axios.get(`https://randomuser.me/api/`)
        .then((response)=>{
            console.log(response)
            const profile=response.data;
            console.log(profile)
            const data=profile.results[0];
            console.log(data)
            setProfile(data)
        })
    }
    
  return (
      
    <div id='main'> 
    <Navbar/><center>
    <h1 id='title'>Profile</h1>
    <button onClick={getProfile}>show profile</button>
     <br /><br /><br /><br />
      {profile? 
       <div className='cards'>
           <h2>{profile.name.title}&nbsp;{profile.name.first}&nbsp;{profile.name.last}</h2> 
        <h4 id='age'>
          Contatct no : {profile.phone} <br />
            Age : {profile.dob.age}</h4> 
        <img src={profile.picture.large} alt="" /> 
      <div className='email'> Email : {profile.email}</div><br />
     <div id='details'>
            
            DOB : {profile.dob.date} <br />
            Gender : {profile.gender} <br />
            Address : {profile.location.street.name} , {profile.location.city} , {profile.location.state} <br />
                     {profile.location.country}, Postcode : {profile.location.postcode}
       </div>
       <div id='login'>
       LOGIN NAME : {profile.login.username} <br />
       LOGIN PASS :{profile.login.password} <br />
       </div><br />
    <span id='reg'>Registered on : {profile.registered.date} its been {profile.registered.age} years</span>   
  </div> :" no data found" } 
     </center>
    </div>
  );
}

export default Profile;
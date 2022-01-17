import React from 'react';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import background from '../images/bookkeepingbackground.jpeg'
import logo from '../images/altbookwithtext.png';
import './Register.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import FileBase from 'react-file-base64';
import { Button, Paper, TextField } from '@mui/material';

function Register(props) {
    const { classes } = props;
    const [userData, setUserData] = useState({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        DoB: '',
        organization: '',
        organizationType: '',
        profilePhotoFile: '',
        createdAt:''
      })

    const handleSubmit = () => {

    }
    return (
        <div className="register" style={{ backgroundImage: `url(${background})`, backgroundSize: "cover"}}>
            <Link className='back-btn-login' to="/"><FontAwesomeIcon href='/' size= "3x" icon={faArrowCircleLeft } /></Link>
            <Paper style={{background:"transparent"}} className='login-container'>
            <form autoComplete='off' onSubmit={handleSubmit} >
                <img className='altbook-logo' src = {logo} />

                <div className='form-input-container'>
                    <label> Please enter a user name: </label>
                    <TextField style={{height:"40px", backgroundColor:"white", borderRadius:"15px"}} value={userData.username} onChange={(e) => setUserData({...userData, username: e.target.value})} name="username" type ="email"id="my-input"  required aria-describedby="my-helper-text" />
                    
                    <label style={{marginTop:"5%"}} className='password-label'> Please enter a password: </label>
                    <TextField style={{height:"40px", backgroundColor:"white", borderRadius:"15px"}} value={userData.password}  onChange={(e) => setUserData({...userData, password: e.target.value})} name="password" type ="password"id="my-input"  required aria-describedby="my-helper-text" />
                    
                    <label style={{marginTop:"5%"}}> Please enter your first name: </label>
                    <TextField style={{height:"40px", backgroundColor:"white", borderRadius:"15px"}} value={userData.firstName}  onChange={(e) => setUserData({...userData, firstName: e.target.value})} name="firstName" type ="text" id="my-input"  required aria-describedby="my-helper-text" />
                    
                    <label style={{marginTop:"5%"}}> Please enter your last name: </label>
                    <TextField style={{height:"40px", backgroundColor:"white", borderRadius:"15px"}} value={userData.lastName}  onChange={(e) => setUserData({...userData, lastName: e.target.value})} name="lastName" type="text" id="my-input" required aria-describedby="my-helper-text" />

                    <label style={{marginTop:"5%"}}> Please enter your Date of Birth </label>
                    <TextField style={{height:"40px", backgroundColor:"white", borderRadius:"15px"}} value={userData.DoB}  onChange={(e) => setUserData({...userData, DoB: e.target.value})} name="DoB" type="date" id="my-input" required aria-describedby="my-helper-text" />

                    <label style={{marginTop:"5%"}}> Please enter the name of your organization: </label>
                    <TextField style={{height:"40px", backgroundColor:"white", borderRadius:"15px"}} value={userData.organization}  onChange={(e) => setUserData({...userData, organization: e.target.value})} balue name="organization" type="text" id="my-input" aria-describedby="my-helper-text" />

                    <label style={{marginTop:"5%"}}> Please select the organization type below that applies: </label>
                    <select value={userData.organizationType}  onChange={(e) => setUserData({...userData, organizationType: e.target.value})} id="org-type" name="organizationType" required aria-describedby="my-helper-text">
                        <option value="Finance">Finance</option>
                        <option value="Insurance">Insurance</option>
                        <option value="Law">Law</option>
                    </select>
                    
                    <label style={{marginTop:"5%"}}> Upload a profile photo: </label>
                    <div style={{height:"40px",textAlign:"left"}} className='photoInput' >
                        <FileBase type ='file' multiple={false} onDone={({base64}) => setUserData({...userData, selectedFile: base64})}/>
                    </div>

                    <input type="checkbox" required></input>
                </div>
                
                <Button   style={{height:"50px"}}type="submit" onlick="clear" className='register-btn'> SUBMIT </Button>
            </form>
            </Paper>
        </div>
    )
}

export default Register

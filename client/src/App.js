import './App.css';
import React, { useEffect } from 'react';
import Home from "./Pages/Home"
import { Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import background from './images/bookkeepingbackground.jpeg'
import logo from './images/altbookwithtext.png'
import { useDispatch } from 'react-redux';
import {getUsers} from './actions/users';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
      <div className="App" style={{ backgroundImage: `url(${background})`, backgroundSize: "cover"}}>
        <div className='login-container'>
        <form>
          <img className='altbook-logo' src = {logo} />
          <label> Email Address: </label>
          <input type ="email"id="my-input"  required aria-describedby="my-helper-text" />
          <label className='password-label'> Password: </label>
          <input type="password" id="my-input" required aria-describedby="my-helper-text" />

          <input type="checkbox" required></input>
          
          <Link className='login-btn' to ='/home'> Login </Link>
          <Link className='register-btn' to="/register"> Register </Link>
        </form>
        </div>
      </div>
  );
}

export default App;

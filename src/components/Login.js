import React from 'react';
import "./App.css";
// import { Link } from "react-router-dom";
import user from "../images/user.png";
import { useHistory } from 'react-router';
// import { NavLink } from 'react-router-dom';
// import { Button } from '@material-ui/core';

const Login = () => {
  const history = useHistory();
    return (

<div class="loginbox ui middle aligned center aligned grid">
  <div class="column">
    <h2 class="ui teal image header">
      <img src={user} class="image"/>
      <div class="content">
        Log-in to your account
      </div>
    </h2>
    <form class="ui large form">
      <div class="ui stacked segment">
        <div class="field">
          <div class="ui left icon input">
            <i class="user icon"></i>
            <input type="text" name="employees id" placeholder="Employees ID"/>
          </div>
        </div>
        <div class="field">
          <div class="ui left icon input">
            <i class="lock icon"></i>
            <input type="password" name="password" placeholder="Password"/>
          </div>
        </div>
        {/* <NavLink to="/">
        <button variant="outlined">For Demo Click Here</button>
      </NavLink> */}
      <button class="ui fluid large teal submit button" onClick={() =>{
         history.push("/home");
       }}
       >
         Login
        </button>
        {/* <Link to="/Home">
          <button className="ui button blue right">Login</button>
        </Link> */}
        
      </div>

      <div class="ui error message"></div>

    </form>

    <div class="ui message">
      New to us? <a href="#">Sign Up</a>
    </div>
  </div>
</div>
    );
  };

export default Login;

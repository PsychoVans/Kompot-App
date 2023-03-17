

import React, { useEffect, useState } from "react";
import "./../styles/loginform.scss";

const LoginForm = () => {
  const [popupStyle, setPopupStyle] = useState("hide");
   

  const popup = () => {
    setPopupStyle("login-popup");
    setTimeout(() => setPopupStyle("hide"), 3000);
  };

  const onSuccess = (response) => {
    alert("User signed in");
    console.log(response);
  };

  const onFailure = (response) => {
    alert("User sign in Failed");
    console.log(response);
  };

  return (
    <div className="cover">
      <div className="container">
        <div className="cover__wrapper">
        <h1>Login</h1>
      <form className="formbar">

        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />

        <div className="login-btn" onClick={popup}>
          Login
        </div>
      </form>
        <div className= {popupStyle}>
          <h3>Login Failed</h3>
          <p>Username or password incorrect</p>
      </div>
      </div>
      </div>
    </div>
  );
};

export default LoginForm;
 import React, { useState } from "react";
 import "../style/Login.css";
 
 import Main from "./Main";
 

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

 

  const validateLogin = () => {

    // Email validation
    if (!email.includes("@")) {
      setError("Email must contain @");
      return;
    }

    const domain = email.split("@")[1];

    const allowedDomains = [
      "gmail.com",
      "yahoo.com",
      "company.com",
      "outlook.com",
    ];

    if (!allowedDomains.includes(domain)) {
      setError("Email domain must be gmail, yahoo, company or outlook");
      return;
    }

    if (email.length < 6) {
      setError("Email too short");
      return;
    }

    // Password validation
    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    let hasUpper = false;
    let hasNumber = false;

    for (let i = 0; i < password.length; i++) {
      let char = password[i];

      if (char >= "A" && char <= "Z") {
        hasUpper = true;
      }

      if (char >= "0" && char <= "9") {
        hasNumber = true;
      }
    }

    if (!hasUpper) {
      setError("Password must contain uppercase letter");
      return;
    }

    if (!hasNumber) {
      setError("Password must contain a number");
      return;
    }

    setError("");
    loginUser();
  };

  const loginUser = () => {
    console.log("API Call Happens Here");
    alert("Login Successful");
    setIsLoggedIn(true);
  };

 
  if (isLoggedIn) {
    return <Main />;
  }

  return (
    <div className="login-main-container">
      <div className="login-container">

        <h2>Login</h2>

        <input
          className="input"
          type="text"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <input
          className="input"
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <button className="button" onClick={validateLogin}>
          Login
        </button>

        <p style={{ color: "red" }}>{error}</p>

      </div>
    </div>
  );
}

export default Login;
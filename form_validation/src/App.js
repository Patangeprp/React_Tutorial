import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const emailRef = useRef("");
  const passRef = useRef("");
  const confirmPassRef = useRef("");

  const handleChangeEmail = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
    emailRef.current.innerHTML = "";
    if (!validateEmail(inputEmail)) {
      emailRef.current.innerHTML = "Please enter a valid email address";
    }
  };

  const handleChangePass = (event) => {
    const inputPass = event.target.value;
    setPass(inputPass);
    passRef.current.innerHTML = "";
    if (!/[A-Z]/.test(inputPass)) {
    passRef.current.innerHTML = "Password must contain one Uppercase letter";
    }
    if (!/[@$!%*?&]/.test(inputPass)) {
    passRef.current.innerHTML = "Password must contain one special character";
      
    }
    if(pass.length<8){
    passRef.current.innerHTML = "Password is less than 8 characters";
    }
    
  };

  const handleChangeConfirmPass = (event) => {
    const inputConfirmPass = event.target.value;
    setConfirmPass(inputConfirmPass);
    confirmPassRef.current.innerHTML = "";
    if (inputConfirmPass !== pass) {
      confirmPassRef.current.innerHTML = "Passwords do not match";
    }
  };

  const validateEmail = (email) => {
    const validate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return validate.test(email);
  };

  return (
    <div className="App">
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address:</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            autoFocus
            placeholder="Enter email"
            onChange={handleChangeEmail}
          />
          <p ref={emailRef}></p>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password:</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={handleChangePass}
            placeholder="Password"
          />
          <p ref={passRef}></p>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword2">Confirm Password:</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
            onChange={handleChangeConfirmPass}
            placeholder="Confirm Password"
          />
          <p ref={confirmPassRef}></p>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;

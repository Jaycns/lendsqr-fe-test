import React, { useState, useCallback } from "react";
import logo from "../assets/logo.svg";
import canvas from "../assets/canvas.svg";
import "../styles/login.scss";
import { Link } from "react-router-dom";

function Login() {
  const [keyShown, setKeyShown] = useState(false);
  const handleKeyShown = useCallback(() => {
    setKeyShown(!keyShown);
  }, [keyShown]);
  return (
    <>
      <div className="login-container">
        <div className="img-box">
          <img src={logo} alt="logo" className="logo" />
          <img src={canvas} alt="logo" className="canvas" />
        </div>
        <div className="flex-box">
          <div className="login-box">
            <h1>Welcome!</h1>
            <p>Enter details to login.</p>
            <form>
              <div className="form-input">
                <input type="text" placeholder="Email" />
              </div>
              <div className="form-input">
                <input
                  type={keyShown ? "text" : "password"}
                  placeholder="Password"
                />
                <div className="" onClick={handleKeyShown}>
                  {keyShown ? <span>Hide</span> : <span>Show</span>}
                </div>
              </div>
              <span>Forgot password?</span>
              <Link to="/dashboard">
                <button>Log in</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

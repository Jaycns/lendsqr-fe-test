import React, { useState, useCallback } from "react";
import logo from "../assets/logo.svg";
import canvas from "../assets/canvas.svg";
import "../styles/login.scss";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Login() {
  const location = useLocation();
  const [keyShown, setKeyShown] = useState(false);
  const handleKeyShown = useCallback(
    (e) => {
      setKeyShown(!keyShown);
    },
    [keyShown]
  );

  const [login, setLogin] = useState({ email: "", password: "" });
  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setLogin({ ...login, [name]: value });
    },
    [setLogin, login]
  );
  // const emailValid = login.email.includes(".com") && login.email.includes("@");
  // const passwordValid = login.password.length > 7;
  const containerVariant = {
    hidden: {
      opacity: 0,
      x: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.7,
      },
    },
    exit: {
      x: "-100vw",
      transition: {
        duration: 0.7,
      },
    },
  };
  const btnVariant = {
    hidden: {
      x: "50vw",
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.1,
        type: "ease",
      },
    },
  };
  const hoverVariant = {
    hover: {
      scale: 1.05,
      transition: { repeat: 2, duration: 0.3, repeatType: "reverse" },
    },
  };
  console.log({ location: location });
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.div className="login-container">
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
                <input
                  type="email"
                  placeholder="Email"
                  required="required"
                  name="email"
                  value={login.email}
                  onChange={handleChange}
                  autoComplete="true"
                />
              </div>
              <div className="form-input">
                <input
                  type={keyShown ? "text" : "password"}
                  placeholder="Password"
                  required="required"
                  name="password"
                  value={login.password}
                  onChange={handleChange}
                  autoComplete="true"
                />
                <div className="" onClick={handleKeyShown}>
                  {keyShown ? <span>Hide</span> : <span>Show</span>}
                </div>
              </div>
              <span>Forgot password?</span>
              {/* <AnimatePresence>
                {emailValid && passwordValid && (
                  <motion.div
                    variants={btnVariant}
                    initial="hidden"
                    animate="show"
                    transition="mint"
                    exit={{ x: "50vw" }}
                  >
                    <Link to="/dashboard">
                      <motion.button
                        variants={hoverVariant}
                        initial=""
                        whileHover="hover"
                      >
                        Log in
                      </motion.button>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence> */}
              <AnimatePresence>
                <motion.div
                  variants={btnVariant}
                  initial="hidden"
                  animate="show"
                  transition="mint"
                  exit={{ x: "50vw" }}
                >
                  <Link to="/dashboard">
                    <motion.button
                      variants={hoverVariant}
                      initial=""
                      whileHover="hover"
                    >
                      Log in
                    </motion.button>
                  </Link>
                </motion.div>
              </AnimatePresence>
            </form>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default React.memo(Login);

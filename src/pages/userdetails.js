import React, { useContext } from "react";
import "../styles/userdetails.scss";
import { Link, useParams } from "react-router-dom";
import Layout from "../components/layout";
import User from "../components/user";
import back from "../assets/icons/user/back.svg";
import { motion } from "framer-motion";

// import userIcon from "../assets/icons/user/user.svg";
import AppContext from "../context/context";

function UserDetails() {
  const { users, handleSideNavClose } = useContext(AppContext);
  const params = useParams();
  const data = Array.from(users);
  const userData = data.filter((item) => params.id === item.id);
  console.log({ params: params });
  const containerVariant = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.5,
        type: "spring",
        stiffness: 80,
        when: "beforeChildren",
        staggerChildren: 0.4,
        mass: 0.4,
        damping: 8,
      },
    },
    exit: {
      x: "100vw",
      transition: {
        duration: 0.5,
      },
    },
  };
  const childVariant = {
    hidden: {
      y: "100vh",
    },
    show: {
      y: 0,
      transition: {
        delay: 0.5,
        duration: 2,
      },
    },
  };
  return (
    <>
      <Layout>
        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate="show"
          exit="exit"
          className="main"
        >
          <div className="container">
            <Link to="/dashboard">
              <div className="back" onClick={handleSideNavClose}>
                <img src={back} alt="back" />
                <p>Back to Users</p>
              </div>
            </Link>
            <div className="title-box">
              <h2>User Details</h2>
              <div className="btn-holder">
                <button>Blacklist User</button>
                <button>Activate User</button>
              </div>
            </div>
            <motion.div variants={childVariant} initial="hidden" animate="show">
              {userData.map((item, index) => {
                return <User item={item} index={index} key={index} />;
              })}
            </motion.div>
          </div>
        </motion.div>
      </Layout>
    </>
  );
}

export default UserDetails;

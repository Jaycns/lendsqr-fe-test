import React, { useContext } from "react";
import "../styles/userdetails.scss";
import { Link } from "react-router-dom";
import Layout from "../components/layout";
import User from "../components/user";
import back from "../assets/icons/user/back.svg";

// import userIcon from "../assets/icons/user/user.svg";
import AppContext from "../context/context";

function UserDetails() {
  const { clickId, users, handleSideNavClose } = useContext(AppContext);
  const data = Array.from(users);
  const userData = data.filter((item) => clickId === item.id);

  return (
    <>
      <Layout>
        <div className="main">
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
            {userData.map((item, index) => {
              return <User item={item} index={index} />;
            })}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default UserDetails;

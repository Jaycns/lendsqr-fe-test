import React, { useContext } from "react";
import "../styles/userdetails.scss";
import { Link } from "react-router-dom";
import Layout from "../components/layout";
import back from "../assets/icons/user/back.svg";
import star from "../assets/icons/user/star 1.svg";
import starFill from "../assets/icons/user/star 2.svg";
// import userIcon from "../assets/icons/user/user.svg";
import AppContext from "../context/context";

function UserDetails() {
  const { clickId, users } = useContext(AppContext);
  const data = Array.from(users);
  const userData = data.filter(
    (item) => clickId === item.id || item.id === "1"
  );

  return (
    <>
      <Layout>
        <div className="main">
          <div className="container">
            <Link to="/dashboard">
              <div className="back">
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
            <div className="user-header-box">
              {userData.map((item, index) => {
                return (
                  <div className="profile-box" key={index}>
                    <div className="profile">
                      <div className="profile-pics">
                        <img src={item.profile.avatar} alt="avatar" />
                      </div>
                      <div className="user-name">
                        <h3>{item.userName.replace("g/[. _]", " ")}</h3>
                        <p>{item.accountNumber}</p>
                      </div>
                    </div>
                    <span></span>
                    <div className="user-tier">
                      <p>User's Tier</p>
                      <div className="stars">
                        <img src={starFill} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                      </div>
                    </div>
                    <span></span>
                    <div className="savings">
                      <h3>{item.accountBalance}</h3>
                      <p>
                        {item.profile.bvn}/{item.orgName}
                      </p>
                    </div>
                  </div>
                );
              })}
              <div className="nav-box">
                <div className="nav active">
                  <p>General Details</p>
                </div>
                <div className="nav">
                  <p>Documents</p>
                </div>
                <div className="nav">
                  <p>Bank Details</p>
                </div>
                <div className="nav">
                  <p>General Details</p>
                </div>
                <div className="nav">
                  <p>Loans</p>
                </div>
                <div className="nav">
                  <p>Savings</p>
                </div>
                <div className="nav">
                  <p>App and System</p>
                </div>
              </div>
            </div>
            {userData.map((item, index) => {
              return (
                <div className="info-box" key={index}>
                  <h4>Personal Information</h4>
                  <div className="grid-box">
                    <div className="info">
                      <p>Full Name</p>
                      <h5>
                        {item.profile.firstName} {item.profile.lastName}
                      </h5>
                    </div>
                    <div className="info">
                      <p>Phone Number</p>
                      <h5>{item.phoneNumber}</h5>
                    </div>
                    <div className="info">
                      <p>Email Address</p>
                      <h5>{item.email}</h5>
                    </div>
                    <div className="info">
                      <p>Bvn</p>
                      <h5>{item.profile.bvn}</h5>
                    </div>
                    <div className="info">
                      <p>Gender</p>
                      <h5>{item.profile.gender}</h5>
                    </div>
                    <div className="info">
                      <p>Marital Status</p>
                      <h5>Single</h5>
                    </div>
                    <div className="info">
                      <p>Children</p>
                      <h5>None</h5>
                    </div>
                    <div className="info">
                      <p>Type of residence</p>
                      <h5>Parent's Appartment</h5>
                    </div>
                  </div>
                  <hr />
                  <h4>Education and Employment</h4>
                  <div className="grid-box second">
                    <div className="info">
                      <p>Type of residence</p>
                      <h5>Parent's Appartment</h5>
                    </div>
                    <div className="info">
                      <p>Employment Status</p>
                      <h5>{item.education.employmentStatus}</h5>
                    </div>
                    <div className="info">
                      <p>Sector of Employment</p>
                      <h5>{item.education.sector}</h5>
                    </div>
                    <div className="info">
                      <p>Duration of Employment</p>
                      <h5>{item.education.duration}</h5>
                    </div>
                    <div className="info">
                      <p>Office Email</p>
                      <h5>{item.education.officeEmail}</h5>
                    </div>
                    <div className="info">
                      <p>Monthly Income</p>
                      <h5>
                        {item.education.monthlyIncome[1]}-
                        {item.education.monthlyIncome[0]}
                      </h5>
                    </div>
                  </div>
                  <hr />
                  <h4>Socials</h4>
                  <div className="grid-box">
                    <div className="info">
                      <p>Twitter</p>
                      <h5>{item.socials.twitter}</h5>
                    </div>
                    <div className="info">
                      <p>Facebook</p>
                      <h5>{item.socials.facebook}</h5>
                    </div>
                    <div className="info">
                      <p>Instagram</p>
                      <h5>{item.socials.instagram}</h5>
                    </div>
                  </div>
                  <hr />
                  <h4>Guarantor</h4>
                  <div className="grid-box">
                    <div className="info">
                      <p>Full Name</p>
                      <h5>
                        {item.guarantor.firstName} {item.guarantor.lastName}
                      </h5>
                    </div>
                    <div className="info">
                      <p>Phone Number</p>
                      <h5>{item.guarantor.phoneNumber}</h5>
                    </div>
                    <div className="info">
                      <p>Email Address</p>
                      <h5>{item.email}</h5>
                    </div>
                    <div className="info">
                      <p>Relationship</p>
                      <h5>Sister</h5>
                    </div>
                  </div>

                  <div className="grid-box">
                    <div className="info">
                      <p>Full Name</p>
                      <h5>Debby Ogana</h5>
                    </div>
                    <div className="info">
                      <p>Phone Number</p>
                      <h5> 02974875404</h5>
                    </div>
                    <div className="info">
                      <p>Email Address</p>
                      <h5>debby@gmail.com</h5>
                    </div>
                    <div className="info">
                      <p>Relationship</p>
                      <h5>Sister</h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default UserDetails;

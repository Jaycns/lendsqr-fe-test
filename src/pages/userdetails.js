import React from "react";
import "../styles/userdetails.scss";
import { Link } from "react-router-dom";
import Layout from "../components/layout";
import back from "../assets/icons/user/back.svg";
import star from "../assets/icons/user/star 1.svg";
import starFill from "../assets/icons/user/star 2.svg";
import userIcon from "../assets/icons/user/user.svg";

function UserDetails() {
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
              <div className="flex-box">
                <div className="profile">
                  <div className="profile-pics">
                    <img src={userIcon} alt="profile-pics" />
                  </div>
                  <div className="user-name">
                    <h3>Grace Effiom</h3>
                    <p>LSQF...</p>
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
                  <h3>200,000.00</h3>
                  <p>748393475/Providus Bank</p>
                </div>
              </div>
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
            <div className="info-box">
              <h4>Personal Information</h4>
              <div className="grid-box">
                <div className="info">
                  <p>Full Name</p>
                  <h5>Grace Effiom</h5>
                </div>
                <div className="info">
                  <p>Phone Number</p>
                  <h5>028746767832</h5>
                </div>
                <div className="info">
                  <p>Email Address</p>
                  <h5>graceeffiom@gmail.com</h5>
                </div>
                <div className="info">
                  <p>Bvn</p>
                  <h5>09378675002</h5>
                </div>
                <div className="info">
                  <p>Gender</p>
                  <h5>Female</h5>
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
                  <h5>Employed</h5>
                </div>
                <div className="info">
                  <p>Sector of Employment</p>
                  <h5>Fintech</h5>
                </div>
                <div className="info">
                  <p>Duration of Employment</p>
                  <h5>2 years</h5>
                </div>
                <div className="info">
                  <p>Office Email</p>
                  <h5>graceeffiom@gmail.com</h5>
                </div>
                <div className="info">
                  <p>Monthly Income</p>
                  <h5>#200,000.00-400,000.00</h5>
                </div>
              </div>
              <hr />
              <h4>Socials</h4>
              <div className="grid-box">
                <div className="info">
                  <p>Twitter</p>
                  <h5>@grace_effiom</h5>
                </div>
                <div className="info">
                  <p>Facebook</p>
                  <h5>Graceeffiom</h5>
                </div>
                <div className="info">
                  <p>Instagram</p>
                  <h5>@grace_effiom</h5>
                </div>
              </div>
              <hr />
              <h4>Guarantor</h4>
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
                  <p>elationship</p>
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
          </div>
        </div>
      </Layout>
    </>
  );
}

export default UserDetails;

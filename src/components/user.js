import React from "react";
import star from "../assets/icons/user/star 1.svg";
import starFill from "../assets/icons/user/star 2.svg";

function User({ item, index }) {
  const organization = item.orgName.replace(/[. -]/g, " ");
  const userName = item.userName.replace(/[. - _]/g, " ");
  const phone = item.phoneNumber.replace(/[. x () -]/g, "");
  const gPhone = item.guarantor.phoneNumber.replace(/[. x () -]/g, "");
  return (
    <>
      <div className="user-header-box">
        <div className="profile-box">
          <div className="profile">
            <div className="profile-pics">
              <img src={item.profile.avatar} alt="avatar" />
            </div>
            <div className="user-name">
              <h3>{userName}</h3>
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
              {item.profile.bvn}/{organization}
            </p>
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
            <h5>{phone}</h5>
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
            <h5>{gPhone}</h5>
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
            <h5>
              {item.guarantor.firstName} {item.guarantor.lastName}
            </h5>
          </div>
          <div className="info">
            <p>Phone Number</p>
            <h5>{gPhone}</h5>
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
      </div>
    </>
  );
}

export default User;

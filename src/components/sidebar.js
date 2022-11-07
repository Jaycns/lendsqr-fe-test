import React from "react";
import "../styles/dashboard.scss";
import { Link } from "react-router-dom";
import briefcase from "../assets/icons/sidebar/briefcase 1.svg";
import dropdown from "../assets/icons/sidebar/np_next.svg";
import user from "../assets/icons/sidebar/user-friends 1.svg";
import keyusers from "../assets/icons/sidebar/users 1.svg";
import sack from "../assets/icons/sidebar/sack 1.svg";
import handshake from "../assets/icons/sidebar/handshake-regular 1.svg";
import piggybank from "../assets/icons/sidebar/piggy-bank 1.svg";
import loan from "../assets/icons/sidebar/Group 104.svg";
import usercheck from "../assets/icons/sidebar/user-check 1.svg";
import usertimes from "../assets/icons/sidebar/user-times 1.svg";
import bank from "../assets/icons/sidebar/np_bank.svg";
import coins from "../assets/icons/sidebar/coins-solid 1.svg";
import icon from "../assets/icons/sidebar/icon.svg";
import home from "../assets/icons/sidebar/home 1.svg";
import galaxy from "../assets/icons/sidebar/galaxy 1.svg";
import chartbar from "../assets/icons/sidebar/chart-bar 2.svg";
import badge from "../assets/icons/sidebar/badge.svg";
import usercog from "../assets/icons/sidebar/user-cog 1.svg";
import scroll from "../assets/icons/sidebar/scroll 1.svg";
import slider from "../assets/icons/sidebar/sliders-h 1.svg";
import clipboard from "../assets/icons/sidebar/clipboard-list 1.svg";
import wheel from "../assets/icons/sidebar/tire 1.svg";
import logout from "../assets/icons/sidebar/sign-out 1.svg";
import { useContext } from "react";
import AppContext from "../context/context";
function Sidebar() {
  const { menu } = useContext(AppContext);
  return (
    <div className={`sidebar ${menu ? "" : "inactive"}`}>
      <div className="nav-group">
        <div className="nav">
          <img src={briefcase} alt="briefcase" />
          <p>Switch Organization</p>
          <img src={dropdown} alt="dropdown" />
        </div>
        <div className="nav">
          <img src={home} alt="dropdown" />
          <p>Dashboard</p>
        </div>
      </div>
      <div className="items">
        <h4>customers</h4>
        <div className="nav active">
          <img src={user} alt="user" />
          <p>Users</p>
        </div>
        <div className="nav">
          <img src={keyusers} alt="user" />
          <p>Guarantors</p>
        </div>
        <div className="nav">
          <img src={sack} alt="user" />
          <p>Loans</p>
        </div>
        <div className="nav">
          <img src={handshake} alt="user" />
          <p>Decision Models</p>
        </div>
        <div className="nav">
          <img src={piggybank} alt="bank" />
          <p>Savings</p>
        </div>
        <div className="nav">
          <img src={loan} alt="user" />
          <p>Loan Requests</p>
        </div>
        <div className="nav">
          <img src={usercheck} alt="user" />
          <p>Whitelist</p>
        </div>
        <div className="nav">
          <img src={usertimes} alt="user" />
          <p>Karma</p>
        </div>
      </div>
      <div className="items">
        <h4>Business</h4>
        <div className="nav">
          <img src={briefcase} alt="user" />
          <p>Organization</p>
        </div>
        <div className="nav">
          <img src={loan} alt="user" />
          <p>Loan Products</p>
        </div>
        <div className="nav">
          <img src={bank} alt="user" />
          <p>Savings Products</p>
        </div>
        <div className="nav">
          <img src={coins} alt="user" />
          <p>Fees and Charges</p>
        </div>
        <div className="nav">
          <img src={icon} alt="bank" />
          <p>Transactions</p>
        </div>
        <div className="nav">
          <img src={galaxy} alt="user" />
          <p>Services</p>
        </div>
        <div className="nav">
          <img src={usercog} alt="user" />
          <p>Service Account</p>
        </div>
        <div className="nav">
          <img src={scroll} alt="user" />
          <p>Settlements</p>
        </div>
        <div className="nav">
          <img src={chartbar} alt="user" />
          <p>Reports</p>
        </div>
      </div>
      <div className="items">
        <h4>Settings</h4>
        <div className="nav">
          <img src={slider} alt="user" />
          <p>Preferences</p>
        </div>
        <div className="nav">
          <img src={badge} alt="user" />
          <p>Fees and Pricing</p>
        </div>
        <div className="nav">
          <img src={clipboard} alt="user" />
          <p>Audit Logs</p>
        </div>
        <div className="nav">
          <img src={wheel} alt="user" />
          <p>Systems Messages</p>
        </div>
        <Link to="/">
          <div className="nav logout">
            <img src={logout} alt="user" />
            <p>Logout</p>
          </div>
        </Link>
        <p className="nav version">v1.2.0</p>
      </div>
    </div>
  );
}

export default Sidebar;

import React, { useContext, useState } from "react";
import "../styles/dashboard.scss";
import Layout from "../components/layout";
import user from "../assets/icons/main/people.svg";
import activeUser from "../assets/icons/main/active user.svg";
import loans from "../assets/icons/main/user loan.svg";
import savings from "../assets/icons/main/savings.svg";
import filter from "../assets/icons/main/filter.svg";
import calendar from "../assets/icons/main/calendar.svg";
import drop from "../assets/icons/main/pagination/drop.svg";
import UserTable from "../components/usertable";
import AppContext from "../context/context";
import Pagination from "../components/pagination";
import { motion } from "framer-motion";

function Dashboard() {
  const phoneSize = window.matchMedia("(max-width: 768px)").matches;
  console.log({ phoneSize: phoneSize });
  const { usersInpage, clickId, filterForm, handleFilterForm } =
    useContext(AppContext);
  const [focused, setFocused] = useState(false);
  const handleFocus = () => {
    setFocused(true);
  };
  const handleBlur = () => {
    setFocused(false);
  };
  const containerVariant = {
    hidden: {
      opacity: 0,
      y: "40vh",
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.5,
        type: "spring",
        stiffness: 80,
        when: "beforeChildren",
        staggerChildren: 1,
        mass: 0.4,
        damping: 8,
      },
    },
    exit: {
      x: "-100vw",
      transition: {
        duration: 0.5,
      },
    },
  };
  const childVariant = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.8,
      },
    },
  };
  const tableVariant = {
    hidden: {
      opacity: 0,
      y: "120vw",
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 1,
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
          className="main"
          exit="exit"
        >
          <h1>Users</h1>
          <motion.div
            variants={childVariant}
            initial="hidden"
            animate="show"
            className="flex-box"
          >
            <div className="card">
              <img src={user} alt="users" />
              <h4>Users</h4>
              <h2>2,453</h2>
            </div>
            <div className="card">
              <img src={activeUser} alt="users" />
              <h4>Active Users</h4>
              <h2>2,453</h2>
            </div>
            <div className="card">
              <img src={loans} alt="users" />
              <h4>Users with loans</h4>
              <h2>12,453</h2>
            </div>
            <div className="card">
              <img src={savings} alt="users" />
              <h4>Users with savings</h4>
              <h2>102,453</h2>
            </div>
          </motion.div>
          <motion.div variants={tableVariant} initial="hidden" animate="show">
            <table className="table">
              <thead>
                <tr>
                  <th>
                    <div className="" onClick={(e) => handleFilterForm(e)}>
                      <h4>
                        Organization <img src={filter} alt="filter" />
                      </h4>
                      {filterForm && (
                        <div className="filter-box">
                          <div className="input">
                            <label>Organization</label>
                            <select
                              className="org"
                              style={{ backgroundImage: `url(${drop})` }}
                            >
                              <option>Select</option>
                            </select>
                          </div>
                          <div className="input">
                            <label>Username</label>
                            <input type="text" placeholder="User" />
                          </div>

                          <div className="input">
                            <label>Email</label>
                            <input type="email" placeholder="Email" />
                          </div>

                          <div className="input">
                            <label>Date</label>
                            <div className="input-container">
                              <input
                                type={focused ? "date" : "text"}
                                onBlur={handleBlur}
                                onFocus={handleFocus}
                                placeholder="Date"
                              />
                              {!focused && (
                                <img src={calendar} alt="calendar" />
                              )}
                            </div>
                          </div>
                          <div className="input">
                            <label>Phone Number</label>
                            <input type="number" placeholder="Phone Number" />
                          </div>
                          <div className="input">
                            <label>Status</label>
                            <select
                              className="org"
                              placeholder="Status"
                              style={{ backgroundImage: `url(${drop})` }}
                            >
                              <option>Status</option>
                            </select>
                          </div>
                          <div className="btn-holder">
                            <button>Reset</button>
                            <button>Filter</button>
                          </div>
                        </div>
                      )}
                    </div>
                  </th>
                  <th>
                    <h4>
                      Username <img src={filter} alt="filter" />
                    </h4>
                  </th>
                  {!phoneSize && (
                    <>
                      <th>
                        <h4>
                          Email <img src={filter} alt="filter" />
                        </h4>
                      </th>
                      <th>
                        <h4>
                          Phone Number <img src={filter} alt="filter" />
                        </h4>
                      </th>
                    </>
                  )}
                  <th>
                    <h4>
                      Data Joined <img src={filter} alt="filter" />
                    </h4>
                  </th>
                  <th>
                    <h4>
                      Status <img src={filter} alt="filter" />
                    </h4>
                  </th>
                </tr>
              </thead>
              <tbody>
                {usersInpage.map((item, index) => {
                  return (
                    <UserTable
                      key={index}
                      item={item}
                      indexes={index}
                      phoneSize={phoneSize}
                      active={clickId === item.id}
                    />
                  );
                })}
              </tbody>
            </table>
            <Pagination />
          </motion.div>
        </motion.div>
      </Layout>
    </>
  );
}

export default Dashboard;

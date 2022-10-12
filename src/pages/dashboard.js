import React, { useContext, useState, useCallback } from "react";
import "../styles/dashboard.scss";
import Layout from "../components/layout";
import user from "../assets/icons/main/people.svg";
import activeUser from "../assets/icons/main/active user.svg";
import loans from "../assets/icons/main/user loan.svg";
import savings from "../assets/icons/main/savings.svg";
import filter from "../assets/icons/main/filter.svg";
import UserTable from "../components/usertable";
import AppContext from "../context/context";
import Pagination from "../components/pagination";

function Dashboard() {
  const { usersInpage, clickId } = useContext(AppContext);

  const [filterForm, setFilterForm] = useState(false);
  const handleFilterForm = useCallback(
    () => setFilterForm(true),
    [setFilterForm]
  );
  const handleFilterFormClose = useCallback(
    () => filterForm && setFilterForm(false),
    [setFilterForm, filterForm]
  );

  return (
    <>
      <Layout>
        <div className="main" onClick={handleFilterFormClose}>
          <h1>Users</h1>
          <div className="flex-box">
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
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>
                  <h4>
                    Organization{" "}
                    <img src={filter} alt="filter" onClick={handleFilterForm} />
                  </h4>
                  {filterForm && (
                    <div className="filter-box">
                      <div className="input">
                        <label>Organization</label>
                        <select className="org">
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
                        <input type="date" placeholder="Date" />
                      </div>
                      <div className="input">
                        <label>Phone Number</label>
                        <input type="number" placeholder="Phone Number" />
                      </div>
                      <div className="input">
                        <label>Status</label>
                        <select className="org" placeholder="Status">
                          <option>Status</option>
                        </select>
                      </div>
                      <div className="btn-holder">
                        <button>Reset</button>
                        <button onClick={handleFilterFormClose}>Filter</button>
                      </div>
                    </div>
                  )}
                </th>
                <th>
                  <h4>
                    Username <img src={filter} alt="filter" />
                  </h4>
                </th>
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
                    active={clickId === item.id}
                  />
                );
              })}
            </tbody>
          </table>
          <Pagination />
        </div>
      </Layout>
    </>
  );
}

export default Dashboard;

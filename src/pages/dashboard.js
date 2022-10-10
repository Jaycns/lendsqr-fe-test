import React from "react";
import "../styles/dashboard.scss";
import Layout from "../components/layout";
import user from "../assets/icons/main/people.svg";
import activeUser from "../assets/icons/main/active user.svg";
import loans from "../assets/icons/main/user loan.svg";
import savings from "../assets/icons/main/savings.svg";
import filter from "../assets/icons/main/filter.svg";

function Dashboard() {
  return (
    <>
      <Layout>
        <div className="main">
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
                  Organization <img src={filter} alt="filter" />
                </th>
                <th>
                  Username <img src={filter} alt="filter" />
                </th>
                <th>
                  Email <img src={filter} alt="filter" />
                </th>
                <th>
                  Phone Number <img src={filter} alt="filter" />
                </th>
                <th>
                  Data Joined <img src={filter} alt="filter" />
                </th>
                <th>
                  Status <img src={filter} alt="filter" />
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </Layout>
    </>
  );
}

export default Dashboard;

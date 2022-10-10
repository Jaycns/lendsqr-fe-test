import React, { useContext } from "react";
import "../styles/dashboard.scss";
import Layout from "../components/layout";
import user from "../assets/icons/main/people.svg";
import activeUser from "../assets/icons/main/active user.svg";
import loans from "../assets/icons/main/user loan.svg";
import savings from "../assets/icons/main/savings.svg";
import filter from "../assets/icons/main/filter.svg";
import UserTable from "../components/usertable";
import AppContext from "../context/context";

function Dashboard() {
  const { usersInpage } = useContext(AppContext);
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
                  <h4>
                    Organization <img src={filter} alt="filter" />
                  </h4>
                </th>
                <th>
                  {" "}
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
                    {" "}
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
                return <UserTable key={index} item={item} />;
              })}
            </tbody>
          </table>
        </div>
      </Layout>
    </>
  );
}

export default Dashboard;

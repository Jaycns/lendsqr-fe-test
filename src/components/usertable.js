import React, { useState, useContext } from "react";
import picker from "../assets/icons/main/picker.svg";
import "../styles/dashboard.scss";
import { format } from "date-fns";
import AppContext from "../context/context";

function UserTable({ item, indexes }) {
  const organization = item.orgName.replace(/[. -]/g, " ");
  const userName = item.userName.replace(/[. - _]/g, " ");
  const phone = item.phoneNumber.replace(/[. x () -]/g, "");
  const timeLet = new Date(item.createdAt);
  const timeNow = format(timeLet, "MMM d  ',' yyyy");
  const timeD = format(timeLet, "h':'mm a");
  const createdAt = timeNow + " " + timeD;
  const { users } = useContext(AppContext);
  const [userId, setUserId] = useState("");
  const newIndex = (indexes + 1).toString();
  const [sideNav, setSideNav] = useState(false);
  const handleUserId = (e) => {
    setSideNav(!sideNav);
    const newList = Array.from(users);
    const index = newList.findIndex((user) => {
      return user.id === item.id;
    });
    const newId = newList[index].id.toString();
    setUserId(newId);
    console.log(newIndex);
    if (item.id === userId && !sideNav) setSideNav(true);
    else if (item.id === userId && sideNav) setSideNav(false);
  };

  return (
    <>
      <tr>
        <td>{organization}</td>
        <td>{userName}</td>
        <td>{item.email}</td>
        <td>{phone}</td>
        <td>{createdAt}</td>
        <td>Inactive</td>
        <td>
          <img src={picker} alt="picker" onClick={handleUserId} />
          {sideNav && (
            <div
              className="sideNav"
              id={item.id}
              style={{
                display: item.id === userId ? "flex" : "none!important",
              }}
            >
              <p>View Details</p>
              <p>Blacklist Users</p>
              <p>Activate User</p>
            </div>
          )}
        </td>
      </tr>
    </>
  );
}

export default UserTable;

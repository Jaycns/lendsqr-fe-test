import React, { useContext } from "react";
import picker from "../assets/icons/main/picker.svg";
import "../styles/dashboard.scss";
import { format } from "date-fns";
import AppContext from "../context/context";
import { Link } from "react-router-dom";

function UserTable({ item, active }) {
  const organization = item.orgName.replace(/[. -]/g, " ");
  const userName = item.userName.replace(/[. - _]/g, " ");
  const phone = item.phoneNumber.replace(/[. x () -]/g, "");
  const timeLet = new Date(item.createdAt);
  const timeNow = format(timeLet, "MMM d  ',' yyyy");
  const timeD = format(timeLet, "h':'mm a");
  const createdAt = timeNow + " " + timeD;
  const { handleSideNavClick } = useContext(AppContext);
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
          <div className="" onClick={(e) => handleSideNavClick(e, item.id)}>
            <img src={picker} alt="picker" />
          </div>
          {active && (
            <div className="sideNav" id={item.id}>
              <p>View Details</p>
              <p>Blacklist Users</p>
              <Link to="/dashboard/user_details">
                <p>Activate User</p>
              </Link>
            </div>
          )}
        </td>
      </tr>
    </>
  );
}

export default UserTable;

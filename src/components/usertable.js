import React, { useContext } from "react";
import picker from "../assets/icons/main/picker.svg";
import user from "../assets/icons/main/user.svg";
import deleteIcon from "../assets/icons/main/delete.svg";
import view from "../assets/icons/main/view.svg";
import "../styles/dashboard.scss";
import { format } from "date-fns";
import AppContext from "../context/context";
import { Link } from "react-router-dom";

function UserTable({ item, active, phoneSize }) {
  const organization = item.orgName.replace(/[. -]/g, " ");
  const userName = item.userName.replace(/[. - _]/g, " ");
  const phone = item.phoneNumber.replace(/[. x () -]/g, "");
  const timeLet = new Date(item.createdAt);
  const timeNow = format(timeLet, "MMM d  ',' yyyy");
  const timeD = format(timeLet, "h':'mm a");
  const num = item.id.includes("2") ? true : false;
  const blackNum =
    item.id.includes("3") || item.id.includes("7") ? true : false;
  const activeNum =
    item.id.includes("5") || item.id.includes("6") ? true : false;
  const createdAt = timeNow + " " + timeD;
  const { handleSideNavClick, handleActive } = useContext(AppContext);
  return (
    <>
      <tr>
        <td>{organization}</td>
        <td>{userName}</td>
        {!phoneSize && (
          <>
            {" "}
            <td>{item.email}</td>
            <td>{phone}</td>
          </>
        )}
        <td>{createdAt}</td>
        <td className="activity">
          {num ? (
            <p className="pending">Pending</p>
          ) : blackNum ? (
            <p className="blacklist">BlackListed</p>
          ) : activeNum ? (
            <p className="active">Active</p>
          ) : (
            <p className="inactive">Inactive</p>
          )}
        </td>
        <td onClick={(e) => handleSideNavClick(e, item.id)}>
          <div className="icon">
            <img src={picker} alt="picker" />
          </div>
          {active && (
            <div className="sideNav" id={item.id}>
              <Link to={`/dashboard/user_details/${item.id}`}>
                <div className="holder">
                  <img src={view} alt="user" />
                  <p onClick={handleActive}>View Details</p>
                </div>
              </Link>
              <div className="holder">
                <img src={deleteIcon} alt="delete" />
                <p>Blacklist Users</p>
              </div>
              <div className="holder">
                <img src={user} alt="view" />
                <p>Activate User</p>
              </div>
            </div>
          )}
        </td>
      </tr>
    </>
  );
}

export default UserTable;

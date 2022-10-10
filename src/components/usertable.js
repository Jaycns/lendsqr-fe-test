import React from "react";
import picker from "../assets/icons/main/picker.svg";
import "../styles/dashboard.scss";

function UserTable({ item }) {
  const organization = item.orgName.replace(/[. -]/g, " ");
  const userName = item.userName.replace(/[. -]/g, " ");
  const phone = item.phoneNumber.replace(/[. x () -]/g, "");
  return (
    <>
      <tr>
        <td>{organization}</td>
        <td>{userName}</td>
        <td>{item.email}</td>
        <td>{phone}</td>
        <td>{item.createdAt}</td>
        <td>Inactive</td>
        <td>
          <img src={picker} alt="picker" />
        </td>
      </tr>
    </>
  );
}

export default UserTable;

import React from "react";
import Sidebar from "./sidebar";
import TopNav from "./topNav";
import "../styles/dashboard.scss";

function Layout({ children }) {
  return (
    <>
      <TopNav />
      <Sidebar />
      <main>{children}</main>
    </>
  );
}

export default Layout;

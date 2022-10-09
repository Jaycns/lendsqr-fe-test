import React from "react";
import Sidebar from "./sidebar";
import TopNav from "./topNav";

function Layout({ children }) {
  return (
    <>
      <Sidebar />
      <TopNav />
      <main>{children}</main>
    </>
  );
}

export default Layout;

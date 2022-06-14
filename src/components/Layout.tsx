import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

const Layout = (props: Props) => {
  return (
    <div>
      <div style={{ backgroundColor: "blue", width: "70%", margin: "auto" }}>
        This is a navbar
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;

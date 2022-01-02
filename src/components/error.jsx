import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="notification">
      <h1>404 - Page Not Found</h1>
      <p>
        Unfortunately, there was no page found at this directory. Please return
        to the main page by clicking the link below, and try again!
      </p>
      <NavLink path={"/"} to={"/"}>
        Send me home!
      </NavLink>
    </div>
  );
};

export default Error;

import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  // Helper function to generate links
  const renderNavLink = (url, label) => {
    return (
      <li>
        <NavLink path={`/${url}`} to={url} onClick={() => props.onSearch(url)}>
          {label}
        </NavLink>
      </li>
    );
  };
  return (
    <nav className="main-nav">
      <ul>
        {renderNavLink("snow", "Snow")}
        {renderNavLink("beaches", "Beaches")}
        {renderNavLink("mountains", "Mountains")}
        {renderNavLink("desert", "Desert")}
      </ul>
    </nav>
  );
};

export default NavBar;

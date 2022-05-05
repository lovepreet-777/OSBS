import React from "react";
import { NavLink } from "react-router-dom";

var name = localStorage.getItem("user");
const Navbar = () => {
  return (
    <nav
      style={{ position: "fixed", width: "100%", height: "64px", zIndex: 9 }}
      className="navbar navbar-dark bg-dark"
    >
      <h1 className="mx-3">OSBS</h1>
      {/* one stop banking solution */}
      <div className="navItems mx-4">
        <NavLink
          exact
          activeClassName="navActive"
          className="navLink mx-2"
          to="/Login"
        >
          Logout
        </NavLink>
        {/* <NavLink
          exact
          activeClassName="navActive"
          className="navLink mx-2"
          to="/"
        >
          Home
        </NavLink> */}
        {/* <NavLink
          exact
          activeClassName="navActive"
          className="navLink mx-2"
          to="/Bank"
        >
          Bank
        </NavLink> */}

        <NavLink
          exact
          activeClassName="navActive"
          className="navLink mx-2"
          to="/transactions"
        >
          Transactions
        </NavLink>
        {/* <NavLink
          exact
          activeClassName="navActive"
          className="navLink mx-2"
          to="/UserDetails"
        >
          {name}
        </NavLink> */}
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { useNavigate } from "react-router-dom";

var name = localStorage.getItem("user");
const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/Login", {
      replace: true,
    });
  };

  return (
    <nav
      style={{ position: "fixed", width: "100%", height: "64px", zIndex: 9 }}
      className="navbar navbar-dark bg-dark"
    >
      <h1 className="mx-3">OSBS</h1>
      {/* one stop banking solution */}
      <div className="navItems mx-4">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;

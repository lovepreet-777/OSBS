import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

var name = localStorage.getItem("user");
function Navbar() {
  const navigate = useNavigate();
  const [bankname, setBankname] = useState("");

  //console.log(temp);

  useEffect(() => {
    const temp = window.location.pathname.split("/");
    console.log(temp);
    if (temp.length > 3) {
      setBankname(temp[3].toUpperCase());
    } else {
      setBankname("");
    }
  }, [window.location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/Login", {
      replace: true,
    });
  };

  return (
    <nav
      style={{
        position: "fixed",
        width: "100%",
        height: "64px",
        zIndex: 9,
      }}
      className="navbar navbar-dark bg-dark"
    >
      <h1 className="mx-3">OSBS</h1>
      {/* one stop banking solution */}
      <div className="navlogout">
        {bankname ? <h3 style={{ marginTop: "5px" }}>{bankname}</h3> : <></>}
        <button className="navlogoutbutton" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

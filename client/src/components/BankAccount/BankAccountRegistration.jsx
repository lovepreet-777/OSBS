import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function BankAccountRegistration() {
  const [data, setData] = React.useState({});

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const [error, setError] = useState("");
  const navigate = useNavigate();
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/Bankuser/create";
      const res = await axios.post(url, data);

      console.log(res?.data?.statusCode, res?.data?.message);

      if (res?.data?.statusCode === 200) {
        alert(res?.data?.message);
        // navigate("/Bank/Login");
      }

      // console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      )

       {
         console.log(error.response.data.message);
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="acc-registration_wrapper flex-center">
      <form >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="form-outline form-white mb-4">
            <input
              onChange={handleChange}
              name="firstName"
              type="text"
              id="firstName"
              className="form-control form-control-lg"
              autoComplete="off"
              placeholder="First Name"
            />
          </div>
          <div className="form-outline form-white mb-4">
            <input
              onChange={handleChange}
              name="lastName"
              type="text"
              id="lastName"
              className="form-control form-control-lg"
              autoComplete="off"
              placeholder="Last Name"
            />
          </div>
          <div className="form-outline form-white mb-4">
            <input
              onChange={handleChange}
              name="email"
              type="email"
              id="email"
              className="form-control form-control-lg"
              autoComplete="off"
              placeholder="Email"
            />
          </div>
          <div className="form-outline form-white mb-4">
            <input
              onChange={handleChange}
              name="phone"
              type="number"
              id="phone"
              className="form-control form-control-lg"
              autoComplete="off"
              placeholder="Phone Number"
            />
          </div>
          <div className="form-outline form-white mb-4">
            <input
              onChange={handleChange}
              name="location"
              type="text"
              id="location"
              className="form-control form-control-lg"
              autoComplete="off"
              placeholder="Address"
            />
          </div>
          <div className="form-outline form-white mb-4">
            <input
              onChange={handleChange}
              name="password"
              type="text"
              id="password"
              className="form-control form-control-lg"
              autoComplete="off"
              placeholder="Password"
            />
          </div>
          <div className="form-outline form-white mb-4">
            <input
              onChange={handleChange}
              name="confirm_password"
              type="text"
              id="confirm_password"
              className="form-control form-control-lg"
              autoComplete="off"
              placeholder="Confirm password"
            />
          </div>
          <button onClick={(e) => handleSubmit(e)} className="btn btn-outline-light btn-lg px-5" type="submit">
            Register
          </button>
          <div>
            <p className="mb-2" style={{ color: "white" }}>
              Already have an account?{" "}
              <Link to="/account/login" className="text-white-50 fw-bold">
                Login
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

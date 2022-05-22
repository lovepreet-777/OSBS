import React from "react";
import { Link } from "react-router-dom";

export default function BankAccountRegistration() {
  const [data, setData] = React.useState({});

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="acc-registration_wrapper flex-center">
      <form onSubmit={handleSubmit}>
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
              name="fname"
              type="text"
              id="fname"
              className="form-control form-control-lg"
              autoComplete="off"
              placeholder="First Name"
            />
          </div>
          <div className="form-outline form-white mb-4">
            <input
              onChange={handleChange}
              name="lname"
              type="text"
              id="lname"
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
              name="address"
              type="text"
              id="address"
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
          <button className="btn btn-outline-light btn-lg px-5" type="submit">
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

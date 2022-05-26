import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, setError } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function BankAccountLogin() {
  const urlParams = useParams();
  const bankname = urlParams.bankname;
  console.log(bankname);
  const [data, setData] = React.useState({});
  const url = `/account/registration/${bankname}`;
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/Bankuser/login";
      const res = await axios.post(url, data);
      console.log(res);
      localStorage.setItem("token", res.data.data);
      // localStorage.setItem("user", res.data.user.firstName);
      // navigate("/Bank", {
      //   replace: true,
      // }
      // );
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        // setError(error.response.data.message);
        alert(error.response.data.message);
      }
    }
  };

  return (
    <div className="acc-registration_wrapper flex-center">
      <form>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <form onSubmit={handleSubmit}>
            <div className="form-outline form-white mb-4">
              <input
                onChange={handleChange}
                name="accountNumber"
                type="number"
                id="account_number"
                className="form-control form-control-lg"
                autoComplete="off"
                placeholder="Account number"
                required
              />
            </div>
            <div className="form-outline form-white mb-4">
              <input
                onChange={handleChange}
                type="password"
                id="typePasswordX"
                name="password"
                autoComplete="off"
                className="form-control form-control-lg"
                placeholder="Password"
                required
                minLength={5}
              />
            </div>

            <button className="btn btn-outline-light btn-lg px-5" type="submit">
              Login
            </button>
          </form>
          <div>
            <p className="mb-3 my-3" style={{ color: "white" }}>
              don't have an account?{" "}
              <Link to={url} className="text-white-50 fw-bold">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

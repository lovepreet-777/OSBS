import React from "react";
import { Link } from "react-router-dom";

export default function BankAccountLogin() {
  const [data, setData] = React.useState({});

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/Bankuser/Login";
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
        setError(error.response.data.message);
        alert(error.response.data.message);
      }
    }
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
              name="account_number"
              type="number"
              id="account_number"
              className="form-control form-control-lg"
              autoComplete="off"
              placeholder="Account number"
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
              placeholder="password"
            />
          </div>

          <button onClick={handleSubmit} className="btn btn-outline-light btn-lg px-5" type="submit">
            Login
          </button>
          <div>
            <p className="mb-2" style={{ color: "white" }}>
              don't have an account?{" "}
              <Link
                to="/account/registration"
                className="text-white-50 fw-bold"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

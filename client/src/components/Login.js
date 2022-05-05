import "../App.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  console.log(data);
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/auth";
      const res = await axios.post(url, data);
      console.log(res);
      localStorage.setItem("token", res.data);
      window.location = "/Bank";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="Login">
      <section className="vh-100 Login">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-dark text-white"
                // style="border-radius: 1rem;"
              >
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5">
                      Please enter your login and password!
                    </p>

                    <div className="form-outline form-white mb-4">
                      <input
                        onChange={handleChange}
                        name="email"
                        type="email"
                        id="typeEmailX"
                        className="form-control form-control-lg"
                        placeholder="UserId"
                      />
                      {/* <label className="form-label" htmlFor="typeEmailX">
                        Email
                      </label> */}
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        onChange={handleChange}
                        type="password"
                        id="typePasswordX"
                        name="password"
                        className="form-control form-control-lg"
                        placeholder="Password"
                      />
                      {/* <label className="form-label" htmlFor="typePasswordX">
                        Password
                      </label> */}
                    </div>

                    <p className="small mb-5 pb-lg-2">
                      <a className="text-white-50" href="#!">
                        Forgot password?
                      </a>
                    </p>

                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Login
                    </button>

                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                      <a href="#!" className="text-white">
                        <i className="fab fa-facebook-f fa-lg"></i>
                      </a>
                      <a href="#!" className="text-white">
                        <i className="fab fa-twitter fa-lg mx-4 px-2"></i>
                      </a>
                      <a href="#!" className="text-white">
                        <i className="fab fa-google fa-lg"></i>
                      </a>
                    </div>
                  </div>

                  <div>
                    <p className="mb-2">
                      Don't have an account?{" "}
                      <Link to="/Signup" className="text-white-50 fw-bold">
                        Sign Up
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Login;

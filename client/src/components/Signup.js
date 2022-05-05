import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/user/create";
      const res = await axios.post(url, data);

      console.log(res?.data?.statusCode, res?.data?.message);

      if (res?.data?.statusCode === 200) {
        alert(res?.data?.message);
        navigate("/login");
      }

      // console.log(res.message);
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
                    <h2 className="fw-bold mb-2 text-uppercase">
                      Register new account
                    </h2>
                    <p className="text-white-50 mb-5">
                      Please enter your details!
                    </p>
                    <div
                      className="form-outline form-white mb-4"
                      onSubmit={handleSubmit}
                    >
                      <input
                        type="text"
                        name="firstName"
                        onChange={handleChange}
                        value={data.firstName}
                        required
                        className="form-control form-control-lg"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="form-outline form-white mb-4">
                      <input
                        type="text"
                        name="lastName"
                        onChange={handleChange}
                        value={data.lastName}
                        required
                        className="form-control form-control-lg"
                        placeholder="Last Name"
                      />
                    </div>
                    <div className="form-outline form-white mb-4">
                      <input
                        type="email"
                        name="email"
                        id="typeEmailX"
                        onChange={handleChange}
                        value={data.email}
                        required
                        className="form-control form-control-lg"
                        placeholder="Email"
                      />
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="password"
                        id="typePasswordX"
                        className="form-control form-control-lg"
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-outline form-white mb-4">
                      <input
                        type="password"
                        id="typePasswordX"
                        name="password"
                        onChange={handleChange}
                        value={data.password}
                        required
                        className="form-control form-control-lg"
                        placeholder="Confirm Password"
                      />
                    </div>

                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit"
                      onClick={(e) => handleSubmit(e)}
                    >
                      Register
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;

import React from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
export default function BankAccountRegistration() {
  const urlParams = useParams();
  const bankname = urlParams.bankname;

  const url = `/account/login/${bankname}`;
  const [data, setData] = React.useState({
    bankname: bankname,
  });
  const [AccountNumber, setAccountNumber] = useState(0);
  const [show, setShow] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(AccountNumber);
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [Message, SetMessage] = useState("Some Error Occurred");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/Bankuser/create";

      const res = await axios.post(url, data);

      if (res.status === 200) {
        const Account_Number = res.data.Account_Number;
        setAccountNumber(Account_Number);
        console.log(Account_Number);
        SetMessage(`Your Account Number : ${Account_Number}`);
        handleShow();
      }

      // if (res?.data?.statusCode === 200) {
      //   {
      //     <div className="modal" role="dialog">
      //       <div className="modal-dialog" role="document">
      //         <div className="modal-content">
      //           <div className="modal-header">
      //             <h5 className="modal-title">Modal title</h5>
      //             <button
      //               type="button"
      //               className="close"
      //               data-dismiss="modal"
      //               aria-label="Close"
      //             >
      //               <span aria-hidden="true">&times;</span>
      //             </button>
      //           </div>
      //           <div className="modal-body">
      //             <p>Modal body text goes here.</p>
      //           </div>
      //           <div className="modal-footer">
      //             <button type="button" className="btn btn-primary">
      //               Save changes
      //             </button>
      //             <button
      //               type="button"
      //               className="btn btn-secondary"
      //               data-dismiss="modal"
      //             >
      //               Close
      //             </button>
      //           </div>
      //         </div>
      //       </div>
      //     </div>;
      //   }
      // }

      // console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        alert(error.response.data.message);
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="acc-registration_wrapper flex-center">
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Accout Created Successfully</Modal.Title>
        </Modal.Header>
        <Modal.Body>{Message}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCopy}>
            Copy
          </Button>
          <Link to={url}>
            <Button variant="secondary">Login</Button>
          </Link>
        </Modal.Footer>
      </Modal>

      <form onSubmit={(e) => handleSubmit(e)}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* <h1 style={{ marginBottom: "50px" }}>{upperCaseBankName}</h1> */}
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
              required
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
              minLength={10}
              maxLength={10}
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
              placeholder="Location"
            />
          </div>
          <div className="form-outline form-white mb-4">
            <input
              onChange={handleChange}
              name="password"
              type="password"
              id="typePasswordX"
              className="form-control form-control-lg"
              placeholder="Password"
              required
              minLength={5}
            />
          </div>
          <div className="form-outline form-white mb-4">
            <input
              onChange={handleChange}
              name="confirm_password"
              type="password"
              id="confirm_password"
              className="form-control form-control-lg"
              autoComplete="off"
              placeholder="Confirm password"
              required
              minLength={5}
            />
          </div>
          <button className="btn btn-outline-light btn-lg px-5" type="submit">
            Register
          </button>
          <div>
            <p className="mb-3 my-3" style={{ color: "white" }}>
              Already have an account?{" "}
              <Link to={url} className="text-white-50 fw-bold">
                Login
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

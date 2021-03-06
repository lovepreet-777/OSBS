/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-target-blank */
import { Link } from "react-router-dom";
import "../App.css";
const Bank = () => {
  return (
    <div className="Bank">
      <div className="card-deck-class">
        <div className="card-class">
          <img
            className="card-img-top"
            src="SBI-Logo.png"
            alt="Card image cap"
          />
          <div className="card-body">
            {/* <h5 className="card-title">State Bank Of India</h5> */}
          </div>
          <Link to="/account/login/sbi">
            <button type="button" className="button">
              Explore
            </button>
          </Link>
        </div>
        <div className="card-class">
          <img
            className="card-img-top"
            src="HDFC-Bank-logo.png"
            alt="Card image cap"
          />
          <div className="card-body">
            {/* <h5 className="card-title">HDFC Bank</h5> */}
          </div>
          <Link to="/account/login/hdfc">
            <button type="button" className="button">
              Explore
            </button>
          </Link>
        </div>
        <div className="card-class">
          <img
            style={{
              objectFit: "contain",
            }}
            className="card-img-top"
            src="2560px-Axis_Bank_logo.svg.png"
            alt="Card image cap"
          />
          <div className="card-body">
            {/* <h5 className="card-title">Axis Bank</h5> */}
          </div>
          <Link to="/account/login/axisbank">
            <button type="button" className="button">
              Explore
            </button>
          </Link>
        </div>
        <div className="card-class">
          <img
            className="card-img-top"
            src="Kotak_Mahindra_Bank_logo.png"
            alt="Card image cap"
          />
          <div className="card-body">
            {/* <h5 className="card-title">Kotak Mahindra Bank</h5> */}
          </div>
          <Link to="/account/login/kotak">
            <button type="button" className="button">
              Explore
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Bank;

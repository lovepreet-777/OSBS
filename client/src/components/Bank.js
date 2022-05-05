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
          <a
            href="https://www.google.com/maps/search/sbi+atms+near+me"
            target="_blank"
          >
            <button type="button" className="button">
              Explore
            </button>
          </a>
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
          <a
            href="https://www.google.com/maps/search/hdfc+atms+near+me"
            target="_blank"
          >
            <button type="button" className="button">
              Explore
            </button>
          </a>
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
          <a
            href="https://www.google.com/maps/search/axis+atms+near+me"
            target="_blank"
          >
            <button type="button" className="button">
              Explore
            </button>
          </a>
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
          <a
            href="https://www.google.com/maps/search/kotak+mahindra+atms+near+me"
            target="_blank"
          >
            <button type="button" className="button">
              Explore
            </button>
          </a>
        </div>
      </div>
      <div>
        <button type="button" className="button2">
          ADD NEW BANK
        </button>
      </div>
    </div>
  );
};
export default Bank;

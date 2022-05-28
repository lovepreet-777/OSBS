import "./App.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Transactions from "./components/Transactions";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Bank from "./components/Bank";
import Signup from "./components/Signup";
import Mod from "./components/Mod";
import BankAccountRegistration from "./components/BankAccount/BankAccountRegistration";
import BankAccountLogin from "./components/BankAccount/BankAccountLogin";
import BankDetails from "./components/BankAccount/BankDetails";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/Login" />;
  }

  return children;
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="appContainer">
        <Routes>
          <Route
            path="/Bank"
            element={
              <ProtectedRoute>
                <Bank />
              </ProtectedRoute>
            }
          />
          <Route
            path="/transactions"
            element={
              <ProtectedRoute>
                <Transactions />
              </ProtectedRoute>
            }
          />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/BankDetails" element={<BankDetails />} />
          {/* <Route
            path="/BankDetails"
            element={
              <ProtectedRoute>
                <BankDetails />
              </ProtectedRoute>
            }
          /> */}
          <Route
            path="/account/registration/:bankname"
            element={
              <ProtectedRoute>
                <BankAccountRegistration />
              </ProtectedRoute>
            }
          />
          <Route
            path="/account/login/:bankname"
            element={
              <ProtectedRoute>
                <BankAccountLogin />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
};
export default App;

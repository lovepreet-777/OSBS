import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Transactions from "./components/Transactions";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import Bank from "./components/Bank";
import Signup from "./components/Signup";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="appContainer">
        <Routes>
          <Route path="/Bank" element={<Bank />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
};
export default App;

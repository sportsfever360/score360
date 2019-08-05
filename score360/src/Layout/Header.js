import React from "react";
import logo from "../logo/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <Link to="/" className="navbar-brand">
        <img src={logo} width="100" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link" style={{ color: "white" }}>
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link " style={{ color: "white" }}>
              Player
            </a>
          </li>
          <li className="nav-item">
            <Link
              to="/matchresult "
              className="nav-link"
              style={{ color: "white" }}
            >
              Matches
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{ color: "white" }}>
              Teams
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{ color: "white" }}>
              Statics
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{ color: "white" }}>
              Series
            </a>
          </li>
          <li className="nav-item">
            <Link
              to="/leaguelist"
              className="nav-link"
              style={{ color: "white" }}
            >
              League
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Header;

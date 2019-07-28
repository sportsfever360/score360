import React from "react";
import logo from "../logo/logo.png";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <a className="navbar-brand">
        <img src={logo} width="100" />
      </a>
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
            <a className="nav-link" style={{ color: "white" }}>
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " style={{ color: "white" }}>
              Player
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{ color: "white" }}>
              Matches
            </a>
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
            <a className="nav-link" style={{ color: "white" }}>
              League
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Header;

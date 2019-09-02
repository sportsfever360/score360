import React from "react";
import logo from "../logo/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div class="row navigation">
      <div class="col-lg-12">
        <div class="logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <ul class="nav">
          <li class="nav-item">
            <Link to="/" class="nav-link active" href="#">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/leaguelist" class="nav-link active" href="#">
              leagues
            </Link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              SportsFever360
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Header;

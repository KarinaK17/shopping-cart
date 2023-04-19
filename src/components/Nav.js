import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo.svg";

const Nav = () => {
  return (
    <nav>
      <Link className="logo-and-name" to="/">
        <img src={logo} alt="logo" className="logo"></img>
        <h1>Étude</h1>
      </Link>
      <ul>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/shop">
          <li>Shop</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Nav;

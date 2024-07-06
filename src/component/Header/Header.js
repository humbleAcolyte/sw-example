import React, { Component } from "react";
import { Link } from "react-router-dom";

import ErrorButton from "../ErrorButton";

import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/">SW Example</Link>
        <div className="header-menu">
          <Link to="/people/">People</Link>
          <Link to="/planets/">Planets</Link>
          <Link to="/starships/">Starships</Link>
          <Link to="/login">Login</Link>
          <Link to="/secret">Secret</Link>
          <ErrorButton />
        </div>
      </div>
    );
  }
}

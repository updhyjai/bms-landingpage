/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import userImage from "./user.png";
import appLogo from "./appLogo.png";

const Appbar = ({ items }) => {
  return (
    <nav className="navbar navbar-expand-lg appbar-container">
      <div className="appbar navbar">
        <div className="appbar-left-action-container">
          <div className="navbar-brand">
            <img src={appLogo} className="app-logo" alt="" />
          </div>
          <div className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2 search-input"
              type="search"
              placeholder="Search for Movies, Events, Plays, Sports and Activites"
              aria-label="Search"
            />
          </div>
        </div>
        <div className="appbar-right-action-container">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0 appbar-link-container">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                NCR
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                English
              </a>
            </li>
          </ul>
          <span className="appbar-user-info-container">
            <img className="user-avatar" src={userImage} alt="" />
            <p className="user-greet">Hello, User</p>
          </span>
        </div>
      </div>
    </nav>
  );
};

Appbar.propTypes = {
  items: PropTypes.array.isRequired,
};

export { Appbar };

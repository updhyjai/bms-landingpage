/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Navbar = (props) => {
  const mainNavList = [
    "Movies",
    "Events",
    "Plays",
    "Sports",
    "Activities",
    "Monuments",
    "Fanhood",
    "Buzz",
  ];
  const sideNavList = ["Corporates", "Offers", "Gift Cards"];
  const MainNav = mainNavList.map((nav) => (
    <a key={nav} className="nav-item nav-link" href="#">
      {nav}
    </a>
  ));
  const SideNav = sideNavList.map((nav) => (
    <a key={nav} className="nav-item nav-link" href="#">
      {nav}
    </a>
  ));
  return (
    <nav className="navbar navbar-expand-lg navbar-container navbar-dark bg-dark ">
      <div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse navlink-container"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav main-nav">{MainNav}</div>
          <div className="navbar-nav side-nav">{SideNav}</div>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {};

export default Navbar;

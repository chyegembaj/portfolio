import React from "react";
import logo from "../logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { SocialIcon } from "react-social-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <span className="fullname" style={{ color: "white" }}>
              Chidimma Egemba
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  about
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/project">
                  projects
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  contact
                </a>
              </li>
            </ul>
            <div className="social-media">
              <SocialIcon
                url="https://www.linkedin.com/in/chidimma-egemba-044b6332/"
                target="_blank"
                style={{ height: 35, width: 35 }}
                className="mr-2"
              />
              <SocialIcon
                url="https://twitter.com/chyegembaj"
                target="_blank"
                style={{ height: 35, width: 35 }}
                className="mr-2"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

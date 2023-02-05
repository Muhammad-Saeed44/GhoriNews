import React, { Component, useEffect } from "react";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg fixed-top"
          style={{ backgroundColor: "#262980" }}
        >
          <div className="container-fluid">
            <Link className="navbar-brand text-light nav=link" to="/technology">
              GhoriNews
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <div
                  className="dropdown mx-100 float-right "
                  style={{ backgroundColor: "#262980" }}
                >
                  <button
                    id="btn"
                    className="btn btn-secondary  float-right  "
                    style={{ backgroundColor: "#262980" }}
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Categories
                  </button>
                  <ul className="dropdown-menu float-right">
                    <li>
                      <Link
                        className="dropdown-item nav=link"
                        to="/entertainment"
                        id="en"
                      >
                        Entertainment
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item nav=link" to="/">
                        General
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item nav=link" to="/health">
                        Health
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item nav=link" to="/science">
                        Science
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item nav=link" to="/sports">
                        Sports
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item nav=link" to="/technology">
                        Technology
                      </Link>
                    </li>
                  </ul>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

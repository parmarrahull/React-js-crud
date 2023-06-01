import React from "react";
import { Link } from "react-router-dom";

const NavBra = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary container">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            React Crud
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/about "
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/user/add" type="button" class="btn btn-primary w-25">Add User</Link>
        </div>
      </nav>
    </>
  );
};

export default NavBra;

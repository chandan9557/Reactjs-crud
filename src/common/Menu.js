import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
function Menu() {
  let { loginWithPopup, loginWithRedirect, logout } = useAuth0();
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/">
            crud
          </Link>
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
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/read">
                  Read
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/create">
                  Create
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/update/2">
                  Update
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/search">
                  Search
                </Link>
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link text-white" to="#" 
                onClick={}>Loginwithpage</Link> */}
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="#">
                  authRedirect
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="#">
                  logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Menu;

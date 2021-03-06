import React from "react";

const NavBar = () => {
  return (
    <nav className="container navbar navbar-expand-lg navbar-light bg-#7c7c7c2b">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Journals
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="/">
              All Journals
              
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

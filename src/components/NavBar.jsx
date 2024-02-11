import React, { useRef } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

    // const [isActive, setIsActive] = React.useState(false);
    const navBarRef = useRef();

    function toggleHamburger(e){
        e.target.classList.toggle('is-active')
        navBarRef.current.classList.toggle('is-active')
    }

  return (
    <div>
      <nav className="navbar has-background-info-light, mx-4" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="Heading">
            <h1>Journal</h1>
          </Link>
          <a
            role="button"
            onClick={toggleHamburger}
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" ref={navBarRef} className="navbar-menu" onClick={toggleHamburger}>
          <div className="navbar-start">
            <Link to="/" className="navbar-item">Home</Link>
            <Link to="/category" className="navbar-item">Create Entry</Link>

  
          </div>


        </div>
      </nav>
    </div>
  );
};

export default NavBar;

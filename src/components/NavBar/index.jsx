import React from "react";
import { Link } from "react-router-dom";
import satIcon from '../../images/satellite_icon.png';

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={satIcon} alt='satellite' />
            </Link>
            <h3 style={{margin: '10px'}}>GPS Tracker</h3>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

import React from "react";
import { Link } from "react-router-dom";
// import FlightLandIcon from '@mui/icons-material/FlightLand';


const Navbar = () => {
  const isLogin = localStorage.getItem("userlogin");
  return (
    <>
      <nav className="main-nav">
        <div className="links">
          <Link to="/">
          {/* <FlightLandIcon/> */}

            <>
              <h2>
                <span>A</span>irbus
              </h2>
            </>
          </Link>
        </div>
        {/* </Link> */}
        <div className="links">
            <Link to="/search">
                <a><strong>Flights</strong></a>
            </Link>
        </div>
        <div>
          {isLogin ? (
            <h4>User</h4>
          ) : (
            <Link to="/login">
              <button className="book">Login</button>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

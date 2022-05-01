import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="navbar-box"> {/* website navbar */}
                <div className="logo-container">
                    <Link to="/" className="logo">ENVIRA</Link>
                    <Link to="/" className="sub-logo">♻ RECYCLING</Link>
                </div>
                <div className="navbar-links">
                    <Link to="/" className="navbar-link">Services</Link>
                    <Link to="/operations" className="navbar-link">Operations</Link>
                    {/* <p onClick={goToServices} className="navbar-link1">Services</p> */}
                </div>
                <Link 
                    to="/C"
                    className="btn"
                    // role="button"
                    > 
                    Contact Us
                </Link>
            </div>
      </div>
    );
}

export default Navbar;
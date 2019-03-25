import React from 'react';
import { Link } from 'react-router-dom';
import './style/header.css';


const Header = (props) => {
    return (
        <>
            <nav className="navbar-flexwrapper">
                <div className="cactus-logo">
                    <div>
                        <Link className="brand-name" to="/">CACTUS</Link>
                        <div>
                            <div className="brand-slogan">Where plants meet friends</div>
                        </div>
                        {/* <img className="logo-img" src="cactus_frontend/src/components/image/036.png" alt="logo-img"></img>  */}
                    </div>
                </div>
                <div className="navitem-wrapper">
                    <div className="nav-row">
                        <Link className="nav-item" to="/login">Login</Link>
                    </div>
                    <div className="nav-row">
                        <Link className="nav-item" to="/signup">Sign Up</Link>
                    </div>
                    <div className="nav-row">
                    <Link className="nav-item" to="/logout">Logout</Link>
                    </div>
                </div>
            </nav>
                {/* <div>
                    <div className="col-slogan">Where plants meet friends</div>
                </div> */}
            
        </>
    )

}

export default Header;


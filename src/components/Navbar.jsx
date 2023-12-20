import React from 'react';
import PriceRoom from './PriceRoom';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user,loginWithRedirect, isAuthenticated ,logout } = useAuth0();


  return (
    <div className="container navbarcolor" style={{ maxWidth: "1500px", height: "74px" ,alignItems:"center"}}>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <img className='icon-pg' src="https://i.pinimg.com/originals/f4/fa/ec/f4faec1798f199132d27ed903701818b.png" alt="" />
        <div className="col-md-3 mb-2 mb-md-0">
          <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
            <svg className="bi" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"></use></svg>
          </a>
        </div>  

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><Link to="/" className="nav-link px-2 link-secondary">Home</Link></li>
          <li><Link to="/foodlist" className="nav-link px-2">foodlist</Link></li>
          <li><Link to="/Pricing" className="nav-link px-2">Pricing</Link></li>
          <li><a href="#" className="nav-link px-2">FAQs</a></li>
          <li><Link to="/About" className="nav-link px-2">About</Link></li>
        </ul>
    {isAuthenticated && <div className='usernameshow' ><span>{user.name}</span> </div>}
        <div className="col-md-3 text-end">
        {
        isAuthenticated ? (
        <button type="button" className="btn btn-primary"  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>)
        :(
        <button type="button" className="btn btn-outline-primary me-2" onClick={() => loginWithRedirect()}>Login</button>
        )
       }
      
        </div>
      </header>
    </div>
  );
};

export default Navbar;

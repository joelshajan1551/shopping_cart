import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className='navbar'>n
      <div className="links">
        <Link to="/"> shop </Link>
        <Link to="/cart"> shop
          <ShoppingCart size={32} />
        </Link>


      </div>
    </div>
  );

}


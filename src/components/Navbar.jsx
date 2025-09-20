import React from "react";
import "./navbar.css";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo + Brand */}
      <div className="navbar-logo">
        <div className="logo-icon">◈</div>
        <h2>E-Comm</h2>
      </div>

      {/* Navigation Links */}
      <ul className="navbar-links">
        <li><a href="#" className="active">HOME</a></li>
        <li><a href="#">BAG</a></li>
        <li><a href="#">SNEAKERS</a></li>
        <li><a href="#">BELT</a></li>
        <li><a href="#">CONTACT</a></li>
      </ul>

      {/* Cart Section */}
      <div className="navbar-cart">
        <FaShoppingCart className="cart-icon" />
        <span>Items</span>
        <span className="cart-price">$0.00</span>
      </div>
    </nav>
  );
};

export default Navbar;


import React from "react";
import "./navbar.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa"; // sidebar toggle icon

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      {/* Logo + Brand */}
      <div className="navbar-logo">
        <div className="logo-icon">◈</div>
        <h2>E-Comm</h2>
      </div>

      {/* Navigation Links */}
      <ul className="navbar-links">
        <li><a href="/" className="active">HOME</a></li>
        <li><a href="/bag">BAG</a></li>
        <li><a href="/sneakers">SNEAKERS</a></li>
        <li><a href="/belt">BELT</a></li>
        <li><a href="/contact">CONTACT</a></li>
      </ul>

      {/* Cart + Sidebar Toggle */}
      <div className="navbar-cart">
        <FaShoppingCart className="cart-icon" />
        <span>Items</span>
        <span className="cart-price">$0.00</span>
        {/* Sidebar toggle button */}
        <FaBars className="menu-icon" onClick={toggleSidebar} style={{ cursor: "pointer", marginLeft: "15px" }} />
      </div>
    </nav>
  );
};

export default Navbar;

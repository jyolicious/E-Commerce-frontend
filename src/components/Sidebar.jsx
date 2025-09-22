import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* 1️⃣ Hot Deals Section */}
      <div className="sidebar-section">
        <h4>Hot Deals</h4>
        <ul>
          <li>Nike <span>2</span></li>
          <li><a href="#">Airmax</a> <span>48</span></li>
          <li>Nike <span>4</span></li>
          <li>Adidas <span>15</span></li>
          <li>Vans <span>23</span></li>
          <li>All Stars <span>1</span></li>
          <li>Adidas <span>95</span></li>
        </ul>
      </div>

      {/* 2️⃣ Price Range Section */}
      <div className="sidebar-section">
        <h4>Prices</h4>
        <p>Range: <span>$13.99 - $25.99</span></p>
        <input type="range" min="0" max="100" defaultValue="50" />
      </div>

      {/* 3️⃣ Color Selection */}
      <div className="sidebar-section">
        <h4>Color</h4>
        <div className="color-options">
          <span className="color red"></span>
          <span className="color black"></span>
          <span className="color yellow"></span>
          <span className="color pink"></span>
          <span className="color grey"></span>
        </div>
      </div>

      {/* 4️⃣ Brand Section */}
      <div className="sidebar-section">
        <h4>Brand</h4>
        <ul>
          <li>Nike <span>99</span></li>
          <li><a href="#">Nike</a> <span>99</span></li>
          <li>Adidas <span>99</span></li>
          <li>Siemens <span>99</span></li>
        </ul>
      </div>

      {/* 5️⃣ More Button */}
      <div className="sidebar-section more">
        <button>MORE</button>
      </div>
    </div>
  );
};

export default Sidebar;

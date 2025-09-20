import React from "react";
import "./ProductPage.css";

// Import images from assets
import product1 from "../assets/product1.png";
import product2 from "../assets/product1.png";
import product3 from "../assets/product1.png";
import product4 from "../assets/product1.png";
import product5 from "../assets/product1.png";
import product6 from "../assets/product1.png";
import product7 from "../assets/product1.png";
import product8 from "../assets/product1.png";

const ProductPage = () => {
  const products = [
    { id: 1, name: "Product 1", price: "$25", img: product1 },
    { id: 2, name: "Product 2", price: "$30", img: product2 },
    { id: 3, name: "Product 3", price: "$40", img: product3 },
    { id: 4, name: "Product 4", price: "$50", img: product4 },
    { id: 5, name: "Product 1", price: "$25", img: product1 },
    { id: 6, name: "Product 2", price: "$30", img: product2 },
    { id: 7, name: "Product 3", price: "$40", img: product3 },
    { id: 8, name: "Product 4", price: "$50", img: product4 },
  ];

  return (
    <div className="product-page">
      <h2 className="product-heading">Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.img} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <button className="product-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;

import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import ProductPage from "./components/ProductPage";

const App = () => {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex" }}>
        {/* Sidebar on left */}
        <Sidebar />

        {/* Main Product Area */}
        <div style={{ flex: 1 }}>
          <ProductPage />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;

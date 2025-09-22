// src/App.jsx
import React, { useState, useEffect, useMemo, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";

// lazy-load UI components so import errors surface in ErrorBoundary
const Navbar = lazy(() => import("./components/Navbar"));
const Sidebar = lazy(() => import("./components/Sidebar"));
const ProductPage = lazy(() => import("./components/ProductPage"));
const Footer = lazy(() => import("./components/Footer"));

const Placeholder = ({ title }) => <div style={{ padding: 20 }}><h2>{title}</h2></div>;

export default function App() {
  const [productsData, setProductsData] = useState([]);
  const [loadError, setLoadError] = useState(null);

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [priceMax, setPriceMax] = useState(100);

  // dynamic import of products.json (so errors in JSON path or content are caught)
  useEffect(() => {
    import("./data/products.json")
      .then((mod) => {
        const data = mod.default ?? mod;
        if (!Array.isArray(data)) {
          throw new Error("products.json did not export an array");
        }
        setProductsData(data);
        const maxP = data.length ? Math.max(...data.map((p) => Number(p.price) || 0)) : 100;
        setPriceMax(maxP);
      })
      .catch((err) => {
        console.error("Failed to load products.json:", err);
        setLoadError(err.message || String(err));
      });
  }, []);

  const filteredProducts = useMemo(() => {
    return productsData.filter((p) => {
      const brandMatch = selectedBrand ? p.brand === selectedBrand : true;
      const priceMatch = Number(p.price) <= Number(priceMax);
      return brandMatch && priceMatch;
    });
  }, [productsData, selectedBrand, priceMax]);

  const handleBrandSelect = (brand) => setSelectedBrand(brand === "ALL" ? null : brand);
  const handlePriceChange = (min, max) => setPriceMax(max);
  const toggleSidebar = () => setIsSidebarOpen((s) => !s);

  // show friendly error if loading JSON failed
  if (loadError) {
    return (
      <div style={{ padding: 20, fontFamily: "system-ui, Arial" }}>
        <h2 style={{ color: "#b00020" }}>Error loading products.json</h2>
        <pre style={{ background: "#f7f7f7", padding: 12, borderRadius: 6 }}>{loadError}</pre>
        <p>
          Make sure file <code>src/data/products.json</code> exists and is valid JSON.
          (If you placed it in <code>public/data/</code> use <code>fetch</code> instead.)
        </p>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <Suspense fallback={<div style={{ padding: 20 }}>Loading app UI...</div>}>
        <Navbar toggleSidebar={toggleSidebar} />

        <div style={{ display: "flex", minHeight: "70vh" }}>
          <div style={{ width: isSidebarOpen ? 260 : 0, overflow: "hidden", transition: "width .25s" }}>
            <Sidebar
              isOpen={isSidebarOpen}
              onBrandSelect={handleBrandSelect}
              onPriceChange={handlePriceChange}
              dataMaxPrice={Math.max(...(productsData.map((p) => Number(p.price) || 0)), 100)}
            />
          </div>

          <main style={{ flex: 1, padding: 16 }}>
            {/* small UI to clear filters quickly */}
            <div style={{ marginBottom: 12 }}>
              <button onClick={() => setSelectedBrand(null)} style={{ marginRight: 8 }}>Show All</button>
              <button onClick={() => { setPriceMax(Math.max(...productsData.map(p=>p.price||0))); }}>Reset Price</button>
            </div>

            <Routes>
              <Route path="/" element={<ProductPage products={filteredProducts} allProducts={productsData} />} />
              <Route path="/products" element={<ProductPage products={filteredProducts} allProducts={productsData} />} />
              <Route path="/bag" element={<Placeholder title="Bag page (placeholder)" />} />
              <Route path="/sneakers" element={<Placeholder title="Sneakers page (placeholder)" />} />
              <Route path="/belt" element={<Placeholder title="Belt page (placeholder)" />} />
              <Route path="/contact" element={<Placeholder title="Contact page (placeholder)" />} />
            </Routes>
          </main>
        </div>

        <Footer />
      </Suspense>
    </ErrorBoundary>
  );
}

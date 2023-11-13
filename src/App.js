import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/MyNavbar";
import HomePage from "./pages/homePage";
import ProductsPage from "./pages/productsPage";
import Footer from "./components/Footer";
import AboutPage from "./pages/aboutPage";
import PartnershipPage from "./pages/partnershippage";
import ContactPage from "./pages/contactPage";
import 'bootstrap/dist/css/bootstrap.min.css';
// import PartnershipPage from "./pages/partnershippage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/partnership" element={<PartnershipPage />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

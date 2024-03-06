import React from "react";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Routes, Route } from "react-router-dom";
import { Header } from "./pages/Header";
import { Product } from "./pages/Product";
import { Productdetail } from "./pages/Productdetail";
import { NotFound } from "./pages/NotFound";
import { LogIn } from "./pages/LogIn";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Product/:id" element={<Productdetail />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/LogIn" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;

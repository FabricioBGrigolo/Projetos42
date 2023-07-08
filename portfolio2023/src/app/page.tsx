"use client";

import React from "react";
import Home from "./pages/home";
import Projects from "./pages/projects";
import About from "./pages/about";
import Contact from "./pages/contact";
import Header from "./components/partials/header";
import Footer from "./components/partials/footer";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

export default function App() {
  return (
    <HashRouter basename="/">
      <Header />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

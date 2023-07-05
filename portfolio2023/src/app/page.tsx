"use client";

import React from "react";
import Home from "./pages/home";
import Projects from "./pages/projects";
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
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

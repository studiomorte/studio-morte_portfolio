import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import NoMatch from "./pages/NoMatch";
import Projects from "./pages/Projects";
import About from "./pages/About";
import MyWarhammer from "./pages/MyWarhammer";
import StauntonGallery from "./pages/StauntonGallery";
import SustainabilityVic from "./pages/SustainabilityVic";
import Djaliny from "./pages/Djaliny";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route index element={<Projects />} />

        <Route path="/" element={<Projects />} />
        <Route path="/mywarhammer" element={<MyWarhammer />} />
        <Route path="/stauntongallery" element={<StauntonGallery />} />
        <Route path="/sustainabilityvic" element={<SustainabilityVic />} />
        <Route path="/djaliny" element={<Djaliny />} />

        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

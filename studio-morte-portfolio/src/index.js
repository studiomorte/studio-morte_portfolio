import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App';
import NoMatch from './pages/NoMatch';
import Projects from './pages/Projects';
import ProjectsGsap from './pages/ProjectsGsap';
import About from './pages/About';
import Showreel from './pages/Showreel';
import MyWarhammer from './pages/projects/MyWarhammer';
import StauntonGallery from './pages/projects/StauntonGallery';
import SustainabilityVic from './pages/projects/SustainabilityVic';
import Djaliny from './pages/projects/Djaliny';


// React Router

const container =  document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route index element={<ProjectsGsap />} />

        <Route path="/" element={<ProjectsGsap />} />
        <Route path="mywarhammer" element={<MyWarhammer />} />
        <Route path="stauntongallery" element={<StauntonGallery />} />
        <Route path="sustainabilityvic" element={<SustainabilityVic />} />
        <Route path="djaliny" element={<Djaliny />} />

        <Route path="about" element={<About />} />
        <Route path="showreel" element={<Showreel />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  </BrowserRouter>
)



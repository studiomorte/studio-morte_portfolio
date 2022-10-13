import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App';
import Projects from './pages/Projects';
import About from './pages/About';
import Showreel from './pages/Showreel';


// React Router

const container =  document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route index element={<Projects />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="showreel" element={<Showreel />} />
      </Route>
    </Routes>
  </BrowserRouter>
)



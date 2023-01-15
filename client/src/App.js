import './styles/App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";

// Components
import Home from './pages/home';
import Saved from './pages/saved';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/saved" element={<Saved />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

import '../styles/home.css';
import { Route, Routes, Router } from "react-router-dom";
import React, { useState } from 'react';

// Components
import CatGenerator from '../components/cats';
import NavBar from '../components/navbar';
import Title from '../components/title';
import Footer from '../components/footer';


function Home() {
  return (
    <div className="home">
      <Title />
      <CatGenerator />
      <NavBar />
      <Footer />
    </div>
  );
}

export default Home;
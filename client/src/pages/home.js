import '../styles/home.css';
import { Route, Routes, Router } from "react-router-dom";
import React, { useState } from 'react';

// Components
import CatGenerator from '../components/cats';
import NavBar from '../components/navbar';
import Title from '../components/title';


function Home() {
  return (
    <div className="home">
      <Title />
      <CatGenerator />
      <NavBar />
    </div>
  );
}

export default Home;
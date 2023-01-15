// Navigation Bar to toggle between home and saved cat pages
import React, { useState } from 'react';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';
import { FaBeer, FaBookmark, FaHeart, FaHome } from 'react-icons/fa';
import Saved from "../pages/saved";
import CatGenerator from "./cats"

function NavBar(){
    return (
        <div class="navbar">
            <Link class="button" to="/"><FaHome /></Link>
            <Link class="button" to="/saved"><FaBookmark /></Link>
        </div>
    );
}

export default NavBar;
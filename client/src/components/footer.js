// Footer
import React, { useState } from 'react';
import '../styles/footer.css';
import { FaBeer, FaBookmark, FaCat, FaGithub, FaHeart, FaHome } from 'react-icons/fa';

function Footer(){
    return (
        <div class="footer">
            <h2 id="copyright">© Nikita Berezyuk 2023</h2>
            <a href="https://github.com/berezucc" class="github"><FaGithub/></a>
        </div>
    );
}

export default Footer;
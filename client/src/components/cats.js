// cats.js is dedicated to fetching random cat images from The Cat API 
import React, { useState, useEffect } from 'react';
import '../styles/cats.css';
import { FaAlignLeft, FaArrowLeft, FaBeer, FaBookmark, FaChevronLeft, FaHeart, FaHome, FaStar } from 'react-icons/fa';

function CatGenerator() {
  const [catUrl, setCatUrl] = useState("");
  const [star, setStar] = useState(false);
  const [catObj, setCatObj] = useState({
    url:"",
    star:"",
  })

//   Fetches data from The Cat API 
  function generateCat() {
    fetch("https://api.thecatapi.com/v1/images/search")
    .then(response => response.json())
    .then(data => {
        setCatUrl(data[0].url);
    });
  }  
  
//   Updates state of cats when liked
  useEffect(() => {
    const newCat = {url:catUrl, star:star};
    setCatObj(newCat);
    }, [star, catUrl]);

    // Sends liked cats to mongodb database
    const goodCat = () => {
        const newCat = {url:catUrl, star:star};
        setCatObj(newCat);
        console.log({catObj});
    // Send form data to server
     fetch("https://cat-watch-front-end-api.onrender.com/record/add", {
       method: "POST",
       headers: {
         "Content-Type": "application/json"
       },
       body: JSON.stringify({catObj}),
     })
     .then(response => response.json())
     .then(data => {
     //   console.log("Success:", data);
     generateCat();
     })
     .catch(error => {
     //   console.error("Error:", error);
     });
    }

  return (
    <div class='cardContainer'>
        <button class='action x' onClick={generateCat}><FaChevronLeft/></button>
        {/* <button class='action star' onClick={goodCat}><FaStar /></button> */}
        <button class='action heart' onClick={goodCat}><FaHeart /></button>
        {catUrl ? <img class='catimg' src={catUrl} alt="Random cat" /> : generateCat()}
    </div>
  );
}

export default CatGenerator;
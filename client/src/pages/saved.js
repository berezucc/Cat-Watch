// Navigation Bar to toggle between home and saved cat pages
import React, { useState, useEffect } from 'react';
import '../styles/saved.css';
import { FaBeer, FaBookmark, FaHeart, FaHome, FaRemoveFormat, FaStopCircle, FaTrash, FaXing } from 'react-icons/fa';

// Components
import NavBar from '../components/navbar';
import SavedTitle from '../components/saved-title';
import Footer from '../components/footer';

const Profile = (props) => (
    <div className="profiles">
        <img className='imgs' src={props.record.url} alt='cat' />
        <button className="btn" onClick={() => {props.deleteRecord(props.record._id)}} ><FaTrash/></button>
    </div>
);

function Saved(){
    const [records, setRecords] = useState([]);
    // This method fetches the records from the database.
    useEffect(() => {
    async function getRecords() {
        const response = await fetch(`https://cat-watch-front-end-api.onrender.com/record/`);
    
        if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
        }
        const records = await response.json();
        setRecords(records);
    }
    getRecords();
    }, []);

    // console.log(records);
    
    // This method will delete a record
    async function deleteRecord(id) {
        console.log(id);
        await fetch(`https://cat-watch-front-end-api.onrender.com/record/${id}`, {
        method: "DELETE"
    });
    
    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
    }
    
    // This method will map out the records on the table
    function recordList() {
    return records.map((record) => {
        // console.log(record.url);
        if(!records.includes(record._id)){
           return (
        <Profile
            record={record}
            deleteRecord={() => deleteRecord(record._id)}
            key={record._id}
        />
        ); 
        }
    });
    }

    return (
        <div class="saved">
            <SavedTitle />
            <div class='container'>
              {recordList()}  
            </div>
            <NavBar />
            <Footer />
        </div>
    );
}

export default Saved;
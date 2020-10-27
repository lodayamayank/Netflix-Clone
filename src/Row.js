import React,{useState,useEffect} from 'react';
import axios from './axios'; 
function Row({ title }) {
    const [movies,setMovies] = useState([]);
    //A snippet of code which runs based on a specfic conditio/variable
    useEffect(()=> {
       // if [] are empty run once when the row loads, and dont run again. 
    },[]);
    return (
        <div>
            <h2>{title}</h2>
        </div>
    );
}

export default Row;
import React from "react";
import Profile from "../assets/azm.jpg";
export default function About(){
    return(
        <div className="about">
        <img src={Profile}/>
        <div>
            <h1>Aazam Thakur</h1>
            <h3>Frontend Engineer</h3>
        </div>
        </div>
    )   
}
import React from "react";
import Email from "../assets/email.png";
import Linked from "../assets/linkedin.png";
export default function Buttons(){
    return(
        <div className="btns">
            <button>
                <img src={Email} />
                <div>Email</div>
            </button>
            <button className="link">
                <img src={Linked} />
                <div>LinkedIn</div>
            </button>
        </div>
    )
}
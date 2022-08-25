import React from "react";
import Fb from "../assets/fb.png"
import Ig from "../assets/ig.png"
import Gh from "../assets/gh.png"
import Tw from "../assets/tw.png"

export default function Footer(){
    return(
        <div className="foot">
            <img src={Fb}/>
            <img src={Ig}/>
            <img src={Gh}/>
            <img src={Tw}/>
        </div>
    )

}
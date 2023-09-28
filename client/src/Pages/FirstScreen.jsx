import React from "react";
import grass from "../Images/grass.png";
import gain from "../Images/gain.png";
import people from "../Images/people.png";


const FirstScreen =() =>{
    return (

            <div className="relative h-screen">
                <img src={gain} alt="" id="gain" className="absolute  h-full w-full object-cover" />
                <img src={people} alt="" id="persons" className="absolute  h-full w-full object-cover"/>
                <img src={grass} alt="" id="grass" className="absolute  h-full w-full object-cover"/>
            </div>

    )
};

export default FirstScreen;
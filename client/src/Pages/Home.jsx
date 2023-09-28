import React from "react";
import FirstScreen from "./FirstScreen";
import MarketOverview from "../Components/MarketOverview";
import Navbar from "../Components/Navbar";
import TrendingNews from "./TrendingNews";

const Home =() =>{
    return(
        <div className="bg-gradient-to-b from-[#42275a] to-[#734b6d] h-screen overflow-x-hidden box-border">
           
            <Navbar/>
            <FirstScreen/>
            <MarketOverview/>
            <TrendingNews/>

        </div>
    )
};

export default Home;
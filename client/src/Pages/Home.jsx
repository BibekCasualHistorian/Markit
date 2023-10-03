import React from "react";
import FirstScreen from "../Components/FirstScreen";
import MarketOverview from "../Components/MarketOverview";
import Navbar from "../Components/Navbar";
import TrendingNews from "../Components/TrendingNews";
import Footer from "../Components/Footer";

const Home =() =>{
    return(
        <div className="bg-gradient-to-b from-[#42275a] to-[#734b6d] h-screen overflow-x-hidden box-border">
           
            <Navbar/>
            <FirstScreen/>
            <MarketOverview/>
            <TrendingNews/>
            <Footer/>

        </div>
    )
};

export default Home;
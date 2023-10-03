import React from "react";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import grass from "../Images/grass.png";
import gain from "../Images/gain.png";
import people from "../Images/people.png";
import "../CSS/FirstScreen.css";

const FirstScreen = () => {

    const [scrollValue, setScrollValue] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrollValue(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <div className="relative h-screen overflow-x-hidden">

      <section className="parallax-container">
      <img src={grass} id="grass" alt="grass" style={{ top: `${scrollValue * 0}px` }} />
      <img src={gain} id="gain" alt="gain" style={{ left: `${scrollValue}px` }} />
      <img src={people} id="persons" alt="people" style={{ top: `${scrollValue * 0.5}px` }} />
      </section>

      <button className="gs-btn">
        <Link to="/Login"> Get Started </Link>
      </button>
    </div>
  );
};

export default FirstScreen;

import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../store/AuthContext";

const Navbar =()=>{

    const {user} = useContext(AuthContext)
    const styles= {
        backgroundColor: "red",
        color: "black"
    };
    return(
        <>
        <div className="h-auto w-full flex justify-between items-center">

            <div className=" text-white text-4xl font-bold box-border max-w-md px-32 py-12">  
                 MARK IT
            </div>

            <ul className='h-10 align-middle text-white text-xl font-normal inline-flex space-x-24 mr-20'>

                <li><NavLink to="/" className={({isActive}) => (isActive ? `${styles}` : "")}> Home </NavLink></li>

                <li><NavLink to="/Market" className={({isActive}) => (isActive ? `${styles}` : "")}> Market </NavLink></li>

                <li><NavLink to="/News" className={({isActive}) => (isActive ? `${styles}` : "")}> News </NavLink></li>

                <li><NavLink to="/Profile" className={({isActive}) => (isActive ? `${styles}` : "")}> Profile </NavLink></li>
                        
                        {/* <li><NavLink to="/Login" className={({isActive}) => (isActive ? `${styles}` : "")}> Login </NavLink></li> */}
    

            </ul> 
  
        </div>

        
        </>
    )
};

export default Navbar;
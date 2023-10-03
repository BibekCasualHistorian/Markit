import React, { useContext } from 'react';
// import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { AuthContext } from '../store/AuthContext'; 
import { Link } from 'react-router-dom';
import SliderMenu from '../Components/SliderMenu';
import Navbar from "../Components/Navbar";
import '../CSS/Profile.css';
import Content from '../Components/DashContent';

const Profile = () => {

    const {dispatch} = useContext(AuthContext)

    const handleLogout = () => {
        localStorage.removeItem("user")
        dispatch({type: "LOGOUT"})
    }

    const [currentContent, setCurrentContent] = useState("");


  return (
    <div className="bg-gradient-to-b from-[#42275a] to-[#734b6d] h-screen overflow-x-hidden box-border">

      <Navbar/>

      <button onClick={handleLogout}className='logoutbtn'><Link to={'/'}>Logout</Link></button>

      <SliderMenu/>

      <div>
      <SliderMenu setContent={setCurrentContent} />
      <Content content={currentContent} />
      </div>


    </div>
  )
}

export default Profile;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom'; // Import Link
// import '../CSS/SliderMenu.css';

// const SliderMenu = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <div className='slider'>
//         <button className="menu-toggle" onClick={toggleMenu}>
//         Menu
//       </button>
//         <div className={`menu ${menuOpen ? 'open' : ''}`}>
            
//         <div className="menu-content">
//             <ul>
//             <li>
//                 <Link to="/ProfileDetails">Profile Details</Link> {/* Use Link here */}
//             </li>
//             <li>
//                 <Link to="/about">About</Link> {/* Use Link here */}
//             </li>
//             <li>
//                 <Link to="/services">Services</Link> {/* Use Link here */}
//             </li>
//             <li>
//                 <Link to="/contact">Contact</Link> {/* Use Link here */}
//             </li>
//             </ul>
//         </div>
        
//         </div>
//     </div>
//   );
// };

// export default SliderMenu;

import React, { useState } from 'react';
import '../CSS/SliderMenu.css';
import ProfileDetails from './ProfileDetails.jsx';

const SliderMenu = ({ setContent }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleButtonClick = (content) => {
    setContent(content);
    toggleMenu(); // Close the menu when a button is clicked
  };

  return (
    <div className='slider'>
      <button className="menu-toggle" onClick={toggleMenu}>
        Menu
      </button>
      <div className={`menu ${menuOpen ? 'open' : ''}`}>
        <div className="menu-content">
          <ul>
            <li>
              <button onClick={() => handleButtonClick(<ProfileDetails/>)}>
                Profile Details
              </button>
            </li>
            <li>
              <button onClick={() => handleButtonClick("Protfolio")}>
                Portfolio
              </button>
            </li>
            <li>
              <button onClick={() => handleButtonClick("History")}>
                History
              </button>
            </li>
            <li>
              <button onClick={() => handleButtonClick("Help")}>
                Help
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SliderMenu;

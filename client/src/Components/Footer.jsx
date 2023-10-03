import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Footer.css';
import facebook from '../Images/facebook.png';
import instagram from '../Images/instagram.png';
import twitter from '../Images/twitter.png';
import youtube from '../Images/youtube.png';

function Footer() {
  return (
    <div className="footer-content">
      <h3>mark it</h3>
      <p>Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a short story. No matter which of these challenges is undertaken, the writer is forced to use creativity to incorporate the paragraph into their writing.</p>
      <ul className="socials">
        <li><Link to="#"><img src={facebook} alt="facebook"/> </Link></li>
        <li><Link to="#"><img src={instagram} alt="instagram"/> </Link></li>
        <li><Link to="#"><img src={twitter} alt="twitter"/> </Link></li>
        <li><Link to="#"><img src={youtube} alt="youtube"/> </Link></li>
      </ul>
      <div className="footer-bottom">
        <p>copyright &copy;2023 <Link to="#">Mark it</Link></p>
      </div>

      <div className="footer-menu">
        <ul className="f-menu">
          <li><Link to="#">Home</Link></li>
          <li><Link to="#">About</Link></li>
          <li><Link to="contact.html">Contact Us</Link></li>
          <li><Link to="#">Blog</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Assignment.css";
import Chrome from '../Images/chrome-logo.svg'

function Header() {
  const [activeLink, setActiveLink] = useState("#home");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClick = (link) => {
    setActiveLink(link);
    if (link === "#features" || link === "#support") {
      setShowDropdown(!showDropdown);
    } else {
      setShowDropdown(false);
    }
  };

  // const [isPlaying, setIsPlaying] = useState(false);

  // const toggleAnimation = () => {
  //   setIsPlaying(!isPlaying);
  // };

  return (
    <>
      <div className="Header_container">
      <img src={Chrome} alt='Chrome-logo'  />
        <h4>chrome</h4>

        <ul>
          <li>
            <Link
              to="/home"
              className={activeLink === "#home" ? "active" : ""}
              onClick={() => handleClick("#home")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/browser"
              className={activeLink === "#browser" ? "active" : ""}
              onClick={() => handleClick("#browser")}
            >
              The Browser by Google
            </Link>
          </li>

          <li className="dropdown">
            <Link
              to="#features"
              className={activeLink === "#features" ? "active" : ""}
              onClick={() => handleClick("#features")}
            >
              Features
            </Link>
            {showDropdown && (
              <div className="dropdown-content">
                <a href="#">OverView</a>
                <a href="#">Google address bar</a>
                <a href="#">Password check</a>
                <a href="#">Use across devices</a>
                <a href="#">Dark mode</a>
                <a href="#">Tabs</a>
                <a href="#">Articles for you</a>
                <a href="#">Extentions</a>
              </div>
            )}
          </li>
          <li className="dropdown">
            <Link
              to="#support"
              className={activeLink === "#support" ? "active" : ""}
              onClick={() => handleClick("#support")}
            >
              Support
            </Link>
            {showDropdown && (
              <div className="dropdown-content">
                <a href="#">Helpful tips for Chrome</a>
                <a href="#">Support</a>
              </div>
            )}
          </li>
        </ul>
      </div>
  
      {/* <div className="animation-container">
        <div className={`box ${isPlaying ? "play" : "pause"}`}></div>
        <button onClick={toggleAnimation}>
          {isPlaying ? "Pause Animation" : "Play Animation"}
        </button>
      </div> */}
    </>
  );
}

export default Header;

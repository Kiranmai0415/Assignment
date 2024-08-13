import React from "react";
import "./Assignment.css";
import Header from "./Header";

function Browser() {
  return (
    <>
      <Header />


      <div className="search-page">
        <div className="logo-container">
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt="Google Logo"
            className="google-logo"
          />
        </div>
        <div className="search-bar-container">
          <input type="text" className="search-bar" placeholder="Search Google" />
          <div className="button-container">
            <button className="search-button">Google Search</button>
            <button className="search-button">I'm Feeling Lucky</button>
          </div>
        </div>
      </div>


    </>
  );
}
export default Browser;

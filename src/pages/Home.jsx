import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <nav className="navbar">
        <div className="logo">📚 ReadMate</div>
        <ul>
          <li>Home</li>
          <li>Categories</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div className="content">
       <h1 className="main-heading">Which book do you want to read?</h1>

        <p>
          Lost in choices? Explore our handpicked collection and find your next
          great read!
        </p>
        <button className="explore-btn">
          Explore <span className="arrow">→</span>
        </button>
      </div>
    </div>
  );
}

export default Home;

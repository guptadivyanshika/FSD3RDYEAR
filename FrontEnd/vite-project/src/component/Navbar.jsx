import React from 'react';
import './navbar.css'; 

function Navbar() {
  return (
    <nav id="navbar">
      <div className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/4/45/Abes_logo.png"
          alt="ABESEC Logo"
          height={50}
        />
        <h2>ABESEC</h2>
      </div>    
    </nav>
  );
}

export default Navbar;

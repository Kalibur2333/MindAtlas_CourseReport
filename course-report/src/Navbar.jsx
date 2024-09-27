import React from 'react';
import logo from './assets/logo.png'; 

function Navbar() {
  return (
    <nav className="bg-zinc-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Brand Name */}
        <img src={logo} alt="Course Report Logo" className="h-10 mr-3" />
      </div>
    </nav>
  );
}

export default Navbar;

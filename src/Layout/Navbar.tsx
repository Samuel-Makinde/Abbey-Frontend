import React from 'react';
import { Link } from 'react-router-dom';
import avatar from "../assets/person.png"

// interface NavbarProps {
//   logo: string; // URL for the logo image
//   userName: string; // User's name
//   userImage: string; // URL for the user's image
// }



const Navbar: React.FC = () => {
    const name = "Samuel"
  return (
    <nav className="h-16 flex items-center justify-between px-4 md:px-10 bg-ter3 text-primary1 shadow-md fixed top-0 left-0 right-0 z-50">
      {/* Logo */}
      <Link to="/home" className="flex items-center">
        <img src={avatar} alt="Logo" className="h-8" /> {/* Adjust height as needed */}
      </Link>

      {/* User Info */}
      <div className="flex items-center">
        <img
          src={avatar}
          alt="user image"
          className="w-10 h-10 rounded-full mr-2" // Circle avatar
        />
        <span className="hidden md:block">{name}</span> {/* Show name on medium screens and above */}
      </div>
    </nav>
  );
};

export default Navbar;

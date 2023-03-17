import React from "react";
import logo from "../../assets/logo.png";
import user_icon from "../../assets/user_icon.png";
import "./index.css";

interface NavBarProps {
  // children: React.ReactNode;
  placeholder: string;
};

export const NavBar = ({placeholder}: NavBarProps) => {
  return (
    <div className='flex items-center justify-between h-42 w-full bg-black p-8' id='navbar-container'>
      <div id='logo'>
        <img className='h-24 w-32' src={logo} alt="" />
      </div>
      {/* <div id='input-div'>
        <input placeholder={placeholder} className='h-12 rounded-md outline-none p-4' type="text" />
      </div> */}
      <ul className='flex items-center justify-between w-96 text-white' id='nav-links'>
        <li>Movies</li>
        <li>Series</li>
        <li>Watch List</li>
        <li>
          <img className='h-12' src={user_icon} alt="" id='user-icon' />
        </li>
      </ul>
        {/* {children} */}
  </div>
     
  
    
  )
}

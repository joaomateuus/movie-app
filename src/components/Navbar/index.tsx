import React from 'react';
import logo from "../../assets/logo.png";
import user_icon from "../../assets/user_icon.png"

interface NavBarProps{
  children: React.ReactNode
  placeholder: string
}

export const NavBar = ({children, placeholder}: NavBarProps) => {
  return (
    <>
      <div className='flex items-center justify-between h-32 w-screen bg-black p-4'>
        <div>
          <img className='h-28 w-36' src={logo} alt="" />
        </div>
        
        <div>
          <input placeholder={placeholder} className='h-8 w-96 rounded-md outline-none p-4' type="text" />
        </div>

        <ul className='flex items-center justify-between w-96 text-white'>
          <li className=''>Movies</li>
          <li>Series</li>
          <li>Watch List</li>
          <li>
            <img className='h-12' src={user_icon} alt="" />
          </li>
        </ul>
      </div>
      {children}
    </>
  )
}

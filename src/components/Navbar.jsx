import React from 'react'
import { FaBookReader } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

const Navbar = ({changeTheme,darkMode}) => {
  return (

    <nav className='bg-slate-200 shadow-xl py-5 px-16 flex items-center justify-between dark:bg-gray-700 dark:text-white'>
        <div className='flex space-x-3 items-center'>
            <h1 className='text-2xl font-serif font-bold'>Khatabook</h1>
            <FaBookReader  className='text-blue-700 text-2xl'/>
        </div>
        <div className='flex space-x-10'>
            <button className='bg-blue-800 px-6 text-white rounded-xl font-bold'>Login</button>
            <button
            onClick={ () => {
                changeTheme();
            }}
            className='bg-zinc-700 dark:bg-white dark:text-black text-white p-3 text-1xl rounded-full'>
                {darkMode ? <FaSun /> : <FaMoon />}
            </button>
        </div>
    </nav>

  )
}

export default Navbar
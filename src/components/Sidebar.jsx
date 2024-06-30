import React from 'react'
import { navLinks } from '../utils/data'
import { Link, NavLink } from 'react-router-dom'
import { FaUser } from "react-icons/fa";

const Sidebar = ({ navIsOpen, handleNav }) => {
    
  return (
      <nav className={`
            
            ${navIsOpen ? 'fixed top-20 w-full md:max-w-[300px] h-[calc(100vh-80px)] bg-primary z-10 translate-x-0 transition-all ease-in-out duration-200' : 'fixed top-20 w-full md:max-w-[300px] h-[calc(100vh-80px)] bg-primary z-0 translate-x-[-100%] transition-all ease-in-out duration-200'}
        `}>
      <div className='flex flex-col justify-between h-[calc(100vh-80px)]'>
        <div className='grid gap-y-4 lg:gap-y-5 px-6 pt-10'>
            {navLinks.map((link) => {
                const { id, title, path, icon } = link
                
                return (
                    <NavLink to={path} key={id} className='flex items-center gap-x-3  text-xl lg:text-2xl py-1 pl-2 rounded-lg ' onClick={handleNav}>
                        <span>
                            {icon}
                        </span>
                        {title}
                    </NavLink>
                )
            })}
        </div>
        <div className='pb-10 px-6 flex items-center justify-center'>
          <Link to='/login' className='flex items-center gap-x-3  text-xl lg:text-2xl py-1 pl-2 rounded-lg' onClick={handleNav}>
            <span><FaUser /></span>
            Login
          </Link>
        </div>
        
          </div>
        </nav>
  )
}

export default Sidebar
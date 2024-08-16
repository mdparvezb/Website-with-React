import React from "react";
import { Link, NavLink } from 'react-router-dom'

function Header() {
    return (
<>
        <nav className="p-2 w-full h-14 shadow-lg fixed flex items-center justify-center bg-gray-50">
            
{/* Logo */}
            <div className="w-[20%] flex items-center justify-center text-blue-800"><Link to="/"><h1 className="text-3xl font-serif">Indian Caters</h1></Link></div>


{/* Menu Items */}
            <div className="font-serif w-[50%] flex items-center justify-center">
                <ul className="w-full flex gap-6 items-center justify-center">
                    <li><NavLink to="/" className={({isActive}) => `${isActive ? "text-red-400 font-bold" : "bg-transparent"} py-2 px-4 hover:bg-gray-200 cursor-pointer rounded-md`}>HOME</NavLink></li>
                    <li><NavLink to="/about" className={({isActive}) => `${isActive ? "text-red-400 font-bold" : "bg-transparent"} py-2 px-4 hover:bg-gray-200 cursor-pointer rounded-md`}>ABOUT</NavLink></li>
                    <li><NavLink to="/contact" className={({isActive}) => `${isActive ? "text-red-400 font-bold" : "bg-transparent"} py-2 px-4 hover:bg-gray-200 cursor-pointer rounded-md`}>CONTACT</NavLink></li>
                    <li><NavLink to="/privacy" className={({isActive}) => `${isActive ? "text-red-400 font-bold" : "bg-transparent"} py-2 px-4 hover:bg-gray-200 cursor-pointer rounded-md`}>PRIVACY</NavLink></li>
                   
                </ul>
            </div>

 {/* login and Signup Button */}
            <div className="font-serif flex justify-center gap-6 w-[30%]">
                <Link to="/login" className="bg-orange-700 text-white py-1 px-6 rounded-md">Login</Link>
                <Link to="/signup" className="bg-red-500 text-white py-1 px-8 rounded-md">Sign Up</Link>
            </div>
        </nav>


</>
    )
}

export default Header;
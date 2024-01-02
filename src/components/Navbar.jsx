import React, { useState } from 'react'
import { PiCoffee } from "react-icons/pi";
import { Link } from 'react-scroll'
import Button from '../layout/Button';
import { AiFillCloseSquare } from "react-icons/ai";
import { IoReorderThreeOutline } from "react-icons/io5";
const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const handleChange = () => {
        setMenu(!menu);
    }

    const closeMenu = () => {
        setMenu(false);
    }
    return (
        <div className='fixed w-full z-10'>
            <div>
                <div className='flex justify-between p-5 lg:px-25 px-5 bg-gradient-to-r from-[#fdba74] to-[#c2410c]'>
                    <div className='flex flex-row justify-center items-center cursor-pointer gap-2'>
                        <span className='text-3xl'>
                            <PiCoffee />
                        </span>
                        <h3 className='text-2xl font-bold'>Cafe...</h3>
                    </div>
                    <nav className='hidden md:flex flex-row items-center text-lg font-semibold gap-8'>
                        <Link
                            to="home"
                            className='group relative inline-block hover:text-[#9a3412] cursor-pointer'
                            onClick={closeMenu}
                        >
                            Home
                            <span className='absolute inset-x-0 bottom-0 h-0.5  bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>
                        </Link>
                        <Link
                            to="menu"
                            className='group relative inline-block hover:text-[#9a3412] cursor-pointer'
                        >
                            Menu
                            <span className='absolute inset-x-0 bottom-0 h-0.5  bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>
                        </Link>
                        <Link
                            to="about"
                            className='group relative inline-block hover:text-[#9a3412] cursor-pointer'
                        >
                            About Us
                            <span className='absolute inset-x-0 bottom-0 h-0.5  bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>
                        </Link>
                        <Link
                            to="products"
                            className='group relative inline-block hover:text-[#9a3412] cursor-pointer'
                        >
                            Products
                            <span className='absolute inset-x-0 bottom-0 h-0.5  bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>
                        </Link>
                        <Link
                            to="review"
                            className='group relative inline-block hover:text-[#9a3412] cursor-pointer'
                        >
                            Reviews
                            <span className='absolute inset-x-0 bottom-0 h-0.5  bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>
                        </Link>
                    </nav>
                    <div className='hidden md:flex lg:flex '>
                        <Button title="Login" />
                    </div>
                    <div className='md:hidden flex items-center'>
                        {menu ? (
                            <AiFillCloseSquare size={25} onClick={handleChange} />
                        ) : (
                            <IoReorderThreeOutline size={25} onClick={handleChange} />
                        )}
                    </div>
                </div>
                <div className={` ${menu ? "translate-x-0" : "-translate-x-full"
                    } lg:hidden md:hidden flex flex-col absolute bg-black text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
                    <Link
                        to="home"
                        className='group relative inline-block hover:text-[#9a3412] cursor-pointer'
                        onClick={closeMenu}
                    >
                        Home
                        <span className='absolute inset-x-0 bottom-0 h-0.5  bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>
                    </Link>
                    <Link
                        to="menu"
                        className='group relative inline-block hover:text-[#9a3412] cursor-pointer'
                        onClick={closeMenu}
                    >
                        Menu
                        <span className='absolute inset-x-0 bottom-0 h-0.5  bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>
                    </Link>
                    <Link
                        to="about"
                        className='group relative inline-block hover:text-[#9a3412] cursor-pointer'
                        onClick={closeMenu}
                    >
                        About Us
                        <span className='absolute inset-x-0 bottom-0 h-0.5  bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>
                    </Link>
                    <Link
                        to="products"
                        className='group relative inline-block hover:text-[#9a3412] cursor-pointer'
                        onClick={closeMenu}
                    >
                        Products
                        <span className='absolute inset-x-0 bottom-0 h-0.5  bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>
                    </Link>
                    <Link
                        to="review"
                        className='group relative inline-block hover:text-[#9a3412] cursor-pointer'
                        onClick={closeMenu}
                    >
                        Reviews
                        <span className='absolute inset-x-0 bottom-0 h-0.5  bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>
                    </Link>
                    <div className=''
                        onClick={closeMenu}
                    >
                        <Button title="Login" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#fdba74]'>
            <div className=' font-semibold flex flex-col justify-center items-center lg:flex-row p-4 gap-4'>
                <div className='flex flex-col justify-center items-center p-3 w-2/4 '>
                    <h1 className='text-2xl'>Cafe Pulse</h1>
                    <p>Welcome to our coffee haven ! Explore our aromatic brews, Savor artisanal flavours , and discover the perfect roas to eleate your daily ritual.</p>
                </div>
                <div className='flex flex-col justify-center items-center p-4 w-1/4'>
                    <h1 className='flex flex-col justify-center items-center'>Links</h1>
                    <nav className="flex flex-col justify-center items-center gap-2">
                        <a href="/">Menu</a>
                        <a href="/">About Us</a>
                        <a href="/">Products</a>
                        <a href="/">Reviews</a>
                    </nav>
                </div>
                <div className='flex flex-col justify-center items-center p-3 w-1/4'>
                    <div className='flex flex-col justify-center items-center '>
                        <h1>Menu</h1>
                    </div>
                    <div className='flex flex-col justify-center items-center w-1/4'>
                        <a href="/">Cappuccino</a>
                        <a href="/">Latte</a>
                    </div>

                </div>
                <div className='flex flex-col justify-center items-center p-3 lg:w-1/4 '>
                    <div className='flex flex-col justify-center items-center '>
                        <h1>Contact Us</h1>
                    </div>
                    <div>
                        <a href="/">CafePluse@gmail.com</a>
                    </div>
                    <div>
                        <a href="/">+91 8182820987</a>
                    </div>
                    <div>
                        <a href="/"> Social media</a>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center item-center'>
                <p>@copyright developer by champion programming | All rights reserved</p>
            </div>
        </div>

    )
}

export default Footer
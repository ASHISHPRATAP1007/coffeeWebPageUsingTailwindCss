import React from 'react'
import Button from '../layout/Button'
import img from '../assets/home.png'
const Home = () => {
    return (
        <div className='min-h-screen flex flex-col justify-between lg:flex-row lg:justify-between items-center lg:px-32 px-5 gap-10 bg-gradient-to-r from-[#c2410c]'>
            <div className='w-full lg:w-2/4 space-y-4 mt-14 lg:mt-0'>
                <h1 className='font-semibold text-5xl text-center lg:text-start leading-tight mt-4'>Start Your Day with a stream cup of coffee</h1>
                <p>Boost your productivity and build your mood with a glase of coffee in the morning</p>
                <div className='flex flex-row justify-center gap-6'>
                    <Button title="ADD TO CARD" />
                    <Button title="MORE MENU" />
                </div>
            </div>

            <div className='relative'>
                <img src={img} alt="img" />
                <div className='absolute bg-white px-8 py-2 top-5 right-0 rounded-full shadow-lg'>
                    <h2>14k</h2>
                </div>
                <div className='absolute bg-white px-8 py-2 bottom-0 -left-14 rounded-full shadow-lg'>
                    <h2>Cappuccino</h2>
                </div>
            </div>

        </div>
    )
}

export default Home
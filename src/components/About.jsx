import React from 'react'
import img from '../assets/about.jpg'
import Button from '../layout/Button'

const About = () => {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 bg-[#fdba74]'>
            <div>
                <h1 className='font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8'>About Us</h1>
            </div>
            <div className='flex flex-col justify-between lg:flex-row items-center gap-5'>
                <div className='w-full lg:w-2/4'>
                    <img className='rounded-lg' src={img} alt="img" />
                </div>
                <div className='w-full lg:w-2/4 p-4 space-y-3'>
                    <div className='font-semibold text-xl'>
                        <h2>What Makes Our Coffee Special?</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias distinctio aperiam eaque quis dolor autem, saepe facere eum labore aspernatur itaque recusandae perferendis facilis provident mollitia reprehenderit corporis numquam deserunt?</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis quia nostrum ipsum? Iste tenetur quia dolorem, dicta animi voluptate vel!</p>
                        <Button title='Learn More' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About
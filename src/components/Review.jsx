import React from 'react'
import ReviewCard from '../layout/ReviewCard'
import img1 from '../assets/pic1.png'
import img2 from '../assets/pic2.png'
import img3 from '../assets/pic3.png'


const Review = () => {
    return (
        <div className='lg:32 lg:mt-8'>
            <div>
                <h1 className='font-semibold text-3xl text-center p-8 mt-8 gap-4'>Customer's Reviews</h1>
            </div>
            <div className='flex flex-col lg:flex-row p-12 gap-12'>
                <ReviewCard img={img1} title="Olivia Ava" />
                <ReviewCard img={img2} title="John Deo" />
                <ReviewCard img={img3} title="Sofia Zoe" />
            </div>

        </div>
    )
}

export default Review
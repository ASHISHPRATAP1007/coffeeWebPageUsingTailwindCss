import React from 'react'
import { ImQuotesRight } from "react-icons/im";
import { FiStar } from "react-icons/fi";

const ReviewCard = (props) => {
    return (
        <div className='flex flex-col w-full lg:w-2/6 bg-slate-400 p-3 rounded-lg gap-5'>
            <div className='flex flex-row justify-between gap-12 p-6'>
                <div className='flex flex-row lg;justify-start items-center justify-center'>
                    <img className='rounded-full w-3/4' src={props.img} alt="img" />
                    <div className='ml-4'>
                        <h2 className='font-semibold text-2xl'>{props.title}</h2>
                        <div className='flex gap-1'>
                            <FiStar className='text-[#ea580c]' />
                            <FiStar className='text-[#ea580c]' />
                            <FiStar className='text-[#ea580c]' />
                            <FiStar className='text-[#ea580c]' />
                            <FiStar className='text-[#ea580c]' />
                        </div>
                    </div>
                </div>
                <span className='flex justify-center items-center ml-16'>
                    <ImQuotesRight className='text-pink-600 blur-[1px]' size={50} />
                </span>

            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta culpa, fugit impedit tenetur temporibus mollitia eaque accusamus saepe omnis magnam. Libero aliquam obcaecati impedit blanditiis quis omnis quos tempora facere?</p>
            </div>
        </div>
    )
}

export default ReviewCard
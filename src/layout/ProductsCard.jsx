import React from 'react'
import { FiStar } from "react-icons/fi";
import  Button  from './Button';

const ProductsCard = (props) => {
    return (
        <div className='w-full lg:w-1/4 bg-white p-3 rounded-s-lg'>
            <img className='rounded-lg' src={props.img} alt="img" />
            <div className='flex flex-col items-center mt-5 gap-3'>
                <h2 className='font-semibold text-xl'>{props.title}</h2>
                <div className=' flex flex-row gap-1'>
                    <FiStar className='text-[#ea580c]' />
                    <FiStar className='text-[#ea580c]'  />
                    <FiStar className='text-[#ea580c]'  />
                    <FiStar className='text-[#ea580c]'  />
                    <FiStar className='text-[#ea580c]'  />
                </div>
                <h3>$15.99</h3>
                <Button title="ADD TO CARD"/>
            </div>
        </div>
    )
}

export default ProductsCard
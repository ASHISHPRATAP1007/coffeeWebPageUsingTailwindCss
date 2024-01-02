import React from 'react'
import { TiShoppingCart } from "react-icons/ti";

const MenuCard = (props) => {
    return (
        <div className='w-full lg:w-1/4 bg-white p-3 rounded-lg'>
            <div>
                <img className='rounded-xl' src={props.img} alt="img" />
            </div>
            <div className='p-2 mt-5'>
                <div className='flex flex-row justify-between'>
                    <h3 className='font-semibold text-xl'>{props.title}</h3>
                    <h3 className='font-semibold text-xl'>{props.value}</h3>
                </div>
                <div className='flex flex-row justify-between mt-3'>
                    <div className='flex gap-2'>
                        <button className='px-3 text-sm border-2 border-black bg-orange-700 hover:text-orange-950 hover:bg-white transition-all rounded-md'>Hot</button>
                        <button className='px-3 text-sm border-2 border-black bg-orange-700 hover:text-orange-950 hover:bg-white transition-all rounded-md'>Cold</button>
                    </div>
                    <span className='flex items-center bg-orange-700 px-3 py-2 rounded-full cursor-pointer'>
                        <TiShoppingCart size={30} />
                    </span>
                </div>

            </div>
        </div>

    )
}

export default MenuCard
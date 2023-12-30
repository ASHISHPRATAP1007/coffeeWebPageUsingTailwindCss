import React from 'react'

const Button = (props) => {
  return (
    <button className='px-6 py-1 border-white bg-[#fdba74] hover:bg-white transition-all rounded-full shadow-md shadow-black font-bold'>
        {props.title}
    </button>
  )
}

export default Button
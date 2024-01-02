import React from 'react'
import ProductsCard from '../layout/ProductsCard'
import img1 from '../assets/product1.jpg'
import img2 from '../assets/product2.jpg'
import img3 from '../assets/product3.jpg'
const Products = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-[#818cf8]'>
            <h1 className='font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8'>Our Products</h1>
            <div className="flex flex-col justify-center lg:flex-row gap-12 ">
                <ProductsCard img={img1} title="Nespresso" />
                <ProductsCard img={img2} title="AeroPress" />
                <ProductsCard img={img3} title="Chemex" />
            </div>
        </div>
    )
}

export default Products
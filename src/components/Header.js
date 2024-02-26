import React from 'react'
import logo2 from "./images/logo2.jpg"

const Header = () => {
    return (
        <div className=' bg-white text-white font-sans flex justify-between items-center shadow-lg '>
            <div className='px-10 '><img src={logo2} style={{ with: "20px", height: "50px" }} className='rounded-full' alt="logo" /></div>
            <div className='p-4'><button className='px-5 py-3 bg-red-600 text-white font-mono font-bold rounded-lg active:bg-red-400'>Order</button></div>
        </div>
    )
}

export default Header
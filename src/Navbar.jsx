import React from 'react'

function Navbar() {
  return (
    <div className='md:col-span-1 md:flex md:justify-end'>
        <nav className='text-right'>
            <h1 className='text-gray-600 font-bold uppercase p-4 border-gray-100 border-b'>
                <a href="/" className='hover:text-gray-700'>Food Ninja</a>
            </h1>
            <ul className='text-sm mt-6'>
                <li className='py-1 text-gray-700 font-bold '>
                    <a href="/" className='border-r-4 border-[orange]'>Home</a>
                </li>
                <li className='py-1'>
                    <a href="/" className='border-r-4 border-[white]'>About</a>
                </li>
                <li className='py-1'>
                    <a href="/" className='border-r-4 border-[white]'>Contact</a>
                </li>
            </ul>
        </nav>   
    </div>
  )
}

export default Navbar

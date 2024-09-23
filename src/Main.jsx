import React, { Component } from 'react'
import Bean from './img/bean.JPG'
import Tofu from './img/tofu.JPG'
import Noodles from './img/noodles.JPG'


export class Main extends Component {
  render() {
    return (
      <div className='px-16 py-6 bg-gray-100 md:col-span-2'>
        <div className='flex justify-center md:justify-end'>
            <button className='text-[orange] rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider border-[orange] border-2 hover:bg-[orange] hover:text-white'>Log In</button>
            <button className='text-[orange] ml-2 rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider border-[orange] border-2 hover:bg-[orange] hover:text-white'>Sign Up</button>
        </div>
        <div>
            <h2 className='text-gray-700 text-6xl font-semibold'>Recipes</h2>
            <h3 className='text-2xl font-semibold'>For Ninjas</h3>
        </div>
        <div>
            <h4 className='font-bold mt-12 pb-2 border-b border-gray-200'>Latest Recipes</h4>
            <div className='mt-8 grid lg:grid-cols-3 gap-10'>
                <div className='relative bg-white rounded overflow-hidden shadow-md hover:shadow-xl'>
                    <img src={Bean} alt="" className='w-full h-32 sm:h-48 object-cover' />
                    <div className='m-4'>
                        <span className='font-bold'>5 Bean Chilli Stew</span>
                        <span className='block text-gray-500 text-sm'>Recipe by Mario</span>
                    </div>
                    <div className='bg-[#E2E2D5] text-[#888883] text-xs uppercase font-bold rounded-full p-2 absolute top-0 ml-2 mt-2'>
                        <span>25 mins</span>
                    </div>
                </div>
                <div className='relative bg-white rounded overflow-hidden shadow-md hover:shadow-xl'>
                    <img src={Noodles} alt="" className='w-full h-32 sm:h-48 object-cover' />
                    <div className='m-4'>
                        <span className='font-bold'>Veg Noodles</span>
                        <span className='block text-gray-500 text-sm'>Recipe by Mario</span>
                    </div>
                    <div className='bg-[#E2E2D5] text-[#888883] text-xs uppercase font-bold rounded-full p-2 absolute top-0 ml-2 mt-2'>
                        <span>25 mins</span>
                    </div>
                </div>
                <div className='relative bg-white rounded overflow-hidden shadow-md hover:shadow-xl'>
                    <img src={Tofu} alt="" className='w-full h-32 sm:h-48 object-cover' />
                    <div className='m-4'>
                        <span className='font-bold'>Tofu Curry</span>
                        <span className='block text-gray-500 text-sm'>Recipe by Mario</span>
                    </div>
                    <div className='bg-[#E2E2D5] text-[#888883] text-xs uppercase font-bold rounded-full p-2 absolute top-0 ml-2 mt-2'>
                        <span>25 mins</span>
                    </div>
                </div>
            </div>
            <div>
                <h4 className='font-bold mt-12 pb-2 border-b border-gray-200'>Most Popular</h4>

            <div className='mt-8'>

            </div>  
            <div className='flex justify-center'>
            <div className='bg-[#E2E2D5] text-[#888883] rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider hover:shadow-inner'>Load more</div>  
            </div>
            </div>
        </div>
        
      </div>
    )
  }
}

export default Main

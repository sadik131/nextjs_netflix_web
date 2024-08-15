import React from 'react'
import { FaPlay, FaHeart } from 'react-icons/fa';


function MovieCart() {
    return (
        <>
            <div className='absolute inset-0  flex flex-col justify-center items-center  text-white'>
                <span className='border-2 flex items-center justify-center rounded-full p-2'>
                    <FaPlay className='text-2xl text-white' />
                </span>
                <div className='absolute flex justify-center bottom-0 left-0 items-center'>
                    <div className='flex items-center gap-x-5 '>
                        <span className='text-sm font-semibold mb-2'>2021</span>
                        <span className='text-sm font-semibold mb-2'>2.15h</span>
                        <span className='text-sm border-2 font-bold mb-2 p-1'>13+</span>
                    </div>
                </div>

                <div className='absolute top-0 border-2 rounded-md p-1 right-2'>
                    <FaHeart className='text-red-500 text-2xl' />
                </div>
            </div>
        </>
    )
}

export default MovieCart
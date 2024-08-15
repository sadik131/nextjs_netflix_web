import Image from 'next/image'
import React from 'react'
import MovieCart from './MovieCart';

function MovieList() {
    return (
        <div className='my-10 px-14'>
            <h1 className='text-white font-bold text-2xl my-10'>Recently Added</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
                <div className='relative h-36 w-full group'>
                    <Image src={"/img1.jpeg"} alt='thumb' fill sizes='10vw' className='object-cover' />
                    <div className='absolute inset-0 bg-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center'>
                        <div className='relative w-full h-full'>
                            <Image
                                src={"/img1.jpeg"}
                                alt='hover image'
                                fill
                                className='object-cover transition-transform duration-300 group-hover:scale-125'
                            />
                            <MovieCart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieList;

"use client"
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

function Banner() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null; 
    }

    return (
        <div className='h-[50vh] w-full relative bg-black text-black overflow-hidden'>
            <ReactPlayer
                url='/banner.mp4'
                // url='https://youtu.be/_OKAwz2MsJs?si=imMJKtHmOUquAQWJ'
                playing
                muted
                loop
                width="100%"
                height="100%"
                className='absolute w-full top-0 left-0'
                style={{ objectFit: 'cover' }}
            />
        </div>
    );
}

export default Banner;

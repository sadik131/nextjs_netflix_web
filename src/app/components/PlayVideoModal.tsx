"use client"
import React from "react";
import ReactPlayer from "react-player";

interface VideoProp {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    url: string
}

function PlayVideoModal({ setOpen, url }: VideoProp) {
    return (
        <div className="fixed w-full inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-5 w-full md:w-9/12 rounded-lg relative mx-auto">
                <button
                    className="absolute z-10 top-2 right-2 text-black"
                    onClick={() => setOpen(false)}
                >
                    X
                </button>
                <div className='h-[90vh] w-full relative bg-black text-black overflow-hidden'>
                    <ReactPlayer
                        // url='/banner.mp4'
                        url={url}
                        playing
                        controls
                        loop
                        width="100%"
                        height="100%"
                        className='absolute w-full top-0 left-0'
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </div>
        </div>
    );
}

export default PlayVideoModal;

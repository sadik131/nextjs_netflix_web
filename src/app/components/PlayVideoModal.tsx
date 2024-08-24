"use client"
import React, { useState } from "react";
import { FaShareAlt } from "react-icons/fa";
import ReactPlayer from "react-player";
import SocialShareModal from "./SocialShareModal";

interface VideoProp {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    url: string
}

function PlayVideoModal({ setOpen, url }: VideoProp) {
    const [modalOpen, setModalOpen] = useState(false)

    const handleShareClick = () => {
        setModalOpen(true);
      };
    
      const handleCloseModal = () => {
        setModalOpen(false);
      };

    return (
        <div className="fixed w-full inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-5 w-full md:w-9/12 rounded-lg relative mx-auto">
                <button
                    className="absolute z-10 top-2 right-2 text-black"
                    onClick={() => setOpen(false)}
                >
                    X
                </button>
                <div className='h-[85vh] w-full relative bg-black text-black overflow-auto'>
                    <ReactPlayer
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
                <button onClick={handleShareClick} className="mt-4 text-blue-500">
                    <FaShareAlt size={24} /> Share
                </button>
                <SocialShareModal videoUrl={url} isOpen={modalOpen} onClose={handleCloseModal} />

            </div>
        </div>
    );
}

export default PlayVideoModal;

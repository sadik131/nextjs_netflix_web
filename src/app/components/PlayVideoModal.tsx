import React from "react";

interface VideoProp {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function PlayVideoModal({ setOpen }: VideoProp) {
    return (
        <div className="fixed w-full md:w-9/12 inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-5 rounded-lg relative">
                <button
                    className="absolute top-2 right-2 text-black"
                    onClick={() => setOpen(false)} // Close modal on button click
                >
                    Close
                </button>
                <div>
                    <p>Your video content here</p>
                </div>
            </div>
        </div>
    );
}

export default PlayVideoModal;

"use client"

import { updateUserAsync } from '@/redux/auth/authSlice'
import { AppDispatch, RootState } from '@/redux/store'
import { CldUploadWidget } from 'next-cloudinary'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function UserInformation() {
    const dispatch = useDispatch<AppDispatch>()
    const { currentUser: user, status } = useSelector((state: RootState) => state.auth)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [img, setImg] = useState<any>()

    const updateProfile = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

    }

    useEffect(() => {
        if (img?.secure_url) {
            dispatch(updateUserAsync({ img: img?.secure_url, id: user?.id }));
        }
    }, [img?.secure_url, dispatch]);

    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Profile Information</h2>
            {status === "loading" ? <h1>loading...</h1> : <>
                <div className="flex items-center space-x-6">
                    <div className="relative w-32 h-32">
                        <img
                            src={user?.img}
                            alt="Profile"
                            className="w-full h-full object-cover rounded-full"
                        />
                        <CldUploadWidget uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME} onSuccess={(result) => setImg(result?.info)}>
                            {({ open }) => {
                                return (
                                    <button onClick={() => open()} className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full text-white">
                                        Change
                                    </button>

                                );
                            }}
                        </CldUploadWidget>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">{user?.name}</h3>
                        <p className="text-gray-400">{user?.email}</p>
                    </div>
                </div>
                <form onSubmit={(e) => updateProfile(e)} className="mt-8 space-y-4">
                    <div>
                        <label className="block text-gray-500 mb-1">Full Name</label>
                        <input
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-2 bg-gray-800 rounded border border-gray-700"
                            defaultValue={user?.name}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-500 mb-1">Email Address</label>
                        <input
                            type="email"
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-2 bg-gray-800 rounded border border-gray-700"
                            defaultValue={user?.email}
                        />
                    </div>
                    <button className="w-full mt-4 bg-blue-600 p-2 rounded-lg text-white hover:bg-blue-700">
                        Save Changes
                    </button>
                </form>
            </>}
        </div>
    )
}

export default UserInformation
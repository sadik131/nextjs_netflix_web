"use client"

import { clearState } from '@/redux/auth/authSlice'
import { AppDispatch, RootState } from '@/redux/store'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'

function UserNavbar() {
    const { user, status } = useSelector((state: RootState) => state.auth)
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch<AppDispatch>()

    if (status === "loading") {
        return <h1>loading...</h1>
    }

    const handelSignOut = async () => {
        setIsOpen(!isOpen)
        await signOut()
        dispatch(clearState());
    }

    return (
        <div className='relative'>
            <span onClick={() => setIsOpen(!isOpen)}>
                <FaUserCircle className='text-2xl cursor-pointer' />
            </span>
            {isOpen &&
                <div className='absolute top-8 right-0'>
                    <ul className='flex flex-col gap-2 px-4 py-2 bg-white rounded-lg shadow-md text-black'>

                        {user?.role === "ADMIN" && <Link onClick={() => setIsOpen(!isOpen)} href={"/pages/admin/dashboard"}>Admin</Link>}
                        {user ? <>
                            <Link onClick={() => setIsOpen(!isOpen)} href={""}>Profile</Link>
                            <button onClick={() => handelSignOut}>SignOut</button>
                        </>
                            : <Link onClick={() => setIsOpen(!isOpen)} href={"/pages/auth"}>login</Link>}
                    </ul>
                </div>}
        </div>
    )
}

export default UserNavbar
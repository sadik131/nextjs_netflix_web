"use client"
import { RootState } from '@/redux/store'
import React, { useState } from 'react'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { useSelector } from 'react-redux'

function NotiIcon() {
    const { notifications } = useSelector((state: RootState) => state.notification)
    const [isOpen, setIsOpen] = useState(false)
    console.log(isOpen);

    return (
        <div className='relative'>
            <span onClick={() => setIsOpen(!isOpen)}>
                <IoMdNotificationsOutline className='text-2xl cursor-pointer'  />
            </span>
            {
                notifications.length > 0 && <span className='bg-red-500 text-white px-2 rounded-full absolute -top-5 right-[10px]'>{notifications.length}</span>
            }
            {
                isOpen && <div className='absolute right-0 rounded-md p-3 z-10 w-[300px] bg-white text-black'>
                    {notifications.length ? <div>
                        {notifications} movie is relesed
                    </div>
                        :
                        <span>No Notifications</span>
                    }
                </div>

            }
        </div>
    )
}

export default NotiIcon
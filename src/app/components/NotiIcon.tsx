"use client"
import { RootState } from '@/redux/store'
import React from 'react'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { useSelector } from 'react-redux'

function NotiIcon() {
    const { notifications } = useSelector((state: RootState) => state.notification)
    console.log(notifications);
    return (
        <div className='relative'>
            <span>
                <IoMdNotificationsOutline className='text-2xl' />
            </span>
            {
                notifications.length > 0 && <span className='bg-red-500 text-white px-2 rounded-full absolute -top-5 right-[10px]'>{notifications.length}</span>

            }
        </div>
    )
}

export default NotiIcon
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoIosNotifications, IoMdSearch } from 'react-icons/io'
import UserNavbar from './UserNavbar'

function Navbar() {
    return (
        <div className='flex items-center justify-between p-2 md:p-4 lg:p-8'>
            <div className='flex items-center'>
                <Image src={"/logo.png"} height={80} width={120} alt='logo' />
                <div className='hidden md:flex md:gap-2 lg:gap-5 lg:ml-4'>
                    <Link href={"/"}>Home</Link>
                    <Link href={""}>serise</Link>
                    <Link href={""}>flimes</Link>
                    <Link href={""}>New & Popular</Link>
                    <Link href={"/pages/favorites"}>My List</Link>
                    <Link href={""}>Browes by Languages</Link>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <span>
                    <IoMdSearch className='text-2xl' />
                </span>
                <span>
                    <IoIosNotifications className='text-2xl' />
                </span>
                <UserNavbar />
            </div>
        </div>
    )
}

export default Navbar
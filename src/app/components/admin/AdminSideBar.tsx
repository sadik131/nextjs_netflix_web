import React from "react";
import Link from "next/link";
import { MdSpaceDashboard, MdSupervisedUserCircle } from "react-icons/md";
import { FaPhotoFilm } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import { TbReportSearch } from "react-icons/tb";

const AdminSidebar = () => {
    return (
        <div className="h-full w-64 bg-gray-800 text-white flex flex-col p-4">
            <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
            <nav className="flex flex-col space-y-4">
                <Link href="/pages/admin/dashboard">
                    <span className="flex items-center gap-2">
                        <MdSpaceDashboard />
                        Dashboard
                    </span>
                </Link>
                <Link href="/pages/admin/users">
                    <span className="flex items-center gap-2">
                        <MdSupervisedUserCircle />
                        Manage Users
                    </span>
                </Link>
                <Link href="/pages/admin/movies">
                    <span className="flex items-center gap-2">
                        <FaPhotoFilm />
                        Manage Movies/Shows
                    </span>
                </Link>
                <Link href="/pages/admin/settings">
                    <span className="flex items-center gap-2">
                        <CiSettings />
                        Settings
                    </span>
                </Link>
                <Link href="/pages/admin/reports">
                    <span className="flex items-center gap-2">
                        <TbReportSearch />
                        Reports
                    </span>
                </Link>
            </nav>
        </div>
    );
};

export default AdminSidebar;

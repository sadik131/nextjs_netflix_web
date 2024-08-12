"use client"
import AdminLayout from '@/app/components/admin/AdminLayout'
import { deleteUserAsync, fetchUserAsync, makeAdminAsync } from '@/redux/auth/authSlice';
import { AppDispatch, RootState } from '@/redux/store';
import { User } from '@/utils';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function page() {
    const dispatch = useDispatch<AppDispatch>()
    const { users, status } = useSelector((state: RootState) => state.auth)

    useEffect(() => {
        dispatch(fetchUserAsync())
    }, [])


    const handelRoleChange = (e: React.ChangeEvent<HTMLSelectElement>, id: string) => {
        const newRole = e.target.value
        dispatch(makeAdminAsync({ update: newRole, id }))

    }

    return (
        <AdminLayout>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Manage Users</h1>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b">ID</th>
                                <th className="py-2 px-4 border-b">Name</th>
                                <th className="py-2 px-4 border-b">Email</th>
                                <th className="py-2 px-4 border-b">Role</th>
                                <th className="py-2 px-4 border-b">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {status === "loading" && <h1>Loading...</h1>}
                            {users.map((user: User) => (
                                <tr key={user.id}>
                                    <td className="py-2 px-4 border-b">{user.id}</td>
                                    <td className="py-2 px-4 border-b">{user.name}</td>
                                    <td className="py-2 px-4 border-b">{user.email}</td>
                                    <td className="py-2 px-4 border-b">
                                        <select
                                            value={user.role}
                                            onChange={(e) =>
                                                handelRoleChange(e, user.id)
                                            }
                                            className="border border-gray-300 rounded p-1"
                                        >
                                            <option value="USER">USER</option>
                                            <option value="ADMIN">ADMIN</option>
                                        </select>
                                    </td>
                                    <td className="py-2 px-4 border-b">
                                        <button
                                            onClick={() => dispatch(deleteUserAsync({ id: user.id }))}
                                            className="text-red-500 hover:underline"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminLayout>
    )
}

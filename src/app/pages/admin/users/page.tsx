import AdminLayout from '@/app/components/admin/AdminLayout'
import { User } from '@/utils';
import React from 'react'

export default function page() {

    const initialUsers: User[] = [
        { id: '1', name: 'John Doe', email: 'john@example.com', role: 'USER' },
        { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'ADMIN' },
        { id: '3', name: 'Alice Johnson', email: 'alice@example.com', role: 'USER' },
    ];

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
                        {initialUsers.map((user) => (
                            <tr key={user.id}>
                                <td className="py-2 px-4 border-b">{user.id}</td>
                                <td className="py-2 px-4 border-b">{user.name}</td>
                                <td className="py-2 px-4 border-b">{user.email}</td>
                                <td className="py-2 px-4 border-b">
                                    <select
                                        value={user.role}
                                        // onChange={(e) =>
                                        //     handleRoleChange(user.id, e.target.value as 'USER' | 'ADMIN')
                                        // }
                                        className="border border-gray-300 rounded p-1"
                                    >
                                        <option value="USER">USER</option>
                                        <option value="ADMIN">ADMIN</option>
                                    </select>
                                </td>
                                <td className="py-2 px-4 border-b">
                                    <button
                                        // onClick={() => handleDeleteUser(user.id)}
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

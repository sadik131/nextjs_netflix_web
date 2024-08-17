import { AccountManagement } from '@/app/components/profile/AccountManagement'
import UserInformation from '@/app/components/profile/UserInformation'
import React from 'react'

function page() {
    return (
        <div>
            <div className="min-h-screen bg-gray-800 p-8">
                <UserInformation />
                <AccountManagement />
            </div>
        </div>
    )
}

export default page
import { AccountManagement } from '@/app/components/profile/AccountManagement'
import ParentAccess from '@/app/components/profile/ParentAccess'
import ProfileSelector from '@/app/components/profile/ProfileSelector'
import UserInformation from '@/app/components/profile/UserInformation'
import React from 'react'

function page() {
    return (
        <div>
            <div className="min-h-screen bg-gray-800 p-8">
                <section className="mb-8">
                    <UserInformation />
                </section>
                <section className="mb-8">
                    <AccountManagement />
                </section>

                <section className="mb-8">
                    <ProfileSelector />
                </section>
                <section className="mb-8">
                    <ParentAccess />
                </section>
            </div>
        </div>
    )
}

export default page
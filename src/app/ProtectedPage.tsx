"use client"

import { AppDispatch, RootState } from '@/redux/store';
import { fetchPlans } from '@/redux/subscription/subscriptionSlice';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ProtectedPage = ({ children }: { children: React.ReactNode }) => {
    const dispatch = useDispatch<AppDispatch>();
    const { plans, status: planState } = useSelector((state: RootState) => state.subscription);

    const [hasAccess, setHasAccess] = useState<boolean | null>(null);
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "loading") return;
        if (status === "unauthenticated") {
            console.log("user not found");
            router.push("/pages/auth")

        } else if (session) {

            const checkAccess = async () => {
                const response = await fetch('/api/verifySub');
                const data = await response.json();
                setHasAccess(data.access);
            };

            checkAccess();
        }
    }, [session, status]);

    useEffect(() => {
        dispatch(fetchPlans());
    }, [dispatch]);

    const handleCheckout = async (priceId: string) => {
        const response = await fetch('/api/stripe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ priceId }),
        });
        if (!response.ok) throw new Error('Failed to initiate checkout');

        const data = await response.json();
        const { url } = data;
        window.location.href = url;
    };

    if (status === "loading") {
        return <p>Loading...</p>
    }


    if (hasAccess === false) {
        return <>
            <h1>Subscribe to a Plan</h1>
            <div>
                {planState === 'loading' && <p>Loading...</p>}
                {planState === 'failed' && <p>Error loading plans.</p>}
                {planState === 'succeeded' && (
                    <div className='flex w-1/3 gap-3 flex-wrap'>
                        {plans.map((plan) => (
                            <div key={plan.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                                <h2 className="text-2xl font-semibold text-gray-700 mb-4">{plan.product.name}</h2>
                                <p className="text-gray-600 text-lg mb-6">${(plan.unit_amount / 100).toFixed(2)} per month</p>
                                <button
                                    onClick={() => handleCheckout(plan.id)}
                                    className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                                >
                                    Subscribe
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    }

    return <div>{children}</div>;
};

export default ProtectedPage;
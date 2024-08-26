'use client';

import { RootState } from '@/redux/store';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

interface RestrictedContentProps {
    children: React.ReactNode;
    contentAgeRating: number;
}

function RestrictedContent({ children, contentAgeRating }: RestrictedContentProps) {
    const { isRestricted, ageRestriction, pinCode } = useSelector((state: RootState) => state.profile);
    const [enteredPin, setEnteredPin] = useState('');
    const [showContent, setShowContent] = useState(false);

    const handlePinSubmit = () => {
        if (enteredPin === pinCode) {
            setShowContent(true);
        } else {
            alert('Incorrect PIN');
        }
    };

    if (!isRestricted || contentAgeRating <= ageRestriction || showContent) {
        return <>{children}</>;
    }

    return (
        <div>
            <h2>Restricted Content</h2>
            <p>This content is restricted based on the parental control settings.</p>
            {pinCode && (
                <>
                    <input
                        type="password"
                        placeholder="Enter PIN"
                        value={enteredPin}
                        onChange={(e) => setEnteredPin(e.target.value)}
                    />
                    <button onClick={handlePinSubmit}>Submit</button>
                </>
            )}
        </div>
    );
}

export default RestrictedContent;

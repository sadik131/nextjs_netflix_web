'use client';

import { RootState } from '@/redux/store';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ParentalControlSettings() {
    const dispatch = useDispatch();
    // const { isRestricted, ageRestriction, pinCode } = useSelector((state: RootState) => state.profile);

    // const [age, setAge] = useState(ageRestriction);
    // const [pin, setPin] = useState(pinCode);

    const handleSaveSettings = () => {
        // dispatch(setRestriction({ isRestricted: true, ageRestriction: age }));
        // if (pin) {
            // dispatch(setPinCode(pin));
        // }
    };

    return (
        <div>
            <h1>Parental Control Settings</h1>
            <label>
                Age Restriction:
                <input
                    type="number"
                    // value={age}
                    // onChange={(e) => setAge(parseInt(e.target.value))}
                    min={0}
                />
            </label>
            <label>
                PIN Code (Optional):
                <input
                    type="password"
                    // value={pin}
                    // onChange={(e) => setPin(e.target.value)}
                />
            </label>
            <button onClick={handleSaveSettings}>Save Settings</button>
        </div>
    );
}

export default ParentalControlSettings;

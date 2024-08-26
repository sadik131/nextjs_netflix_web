"use client"
import { RootState } from '@/redux/store';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ProfileSelector: React.FC = () => {
    const dispatch = useDispatch();
    const profiles = useSelector((state: RootState) => state.profile.profiles);

    useEffect(() => {
        // async function fetchProfiles() {
        //   const response = await fetch('/api/profiles?userId=1'); // Replace with actual userId
        //   const data = await response.json();
        //   dispatch(setCurrentProfile(data[0])); // Set the first profile as the current profile by default
        // }

        // fetchProfiles();
    }, [dispatch]);

    const handleProfileSwitch = (profileId: number) => {
        // const profile = profiles.find(p => p.id === profileId);
        // if (profile) {
        //   dispatch(setCurrentProfile(profile));
        // }
    };

    return (
        <div>
            <h3>Select Profile</h3>
            {profiles.map(profile => (
                <button key={profile.id} onClick={() => { }}>
                    {profile.name} ({profile.type})
                </button>
            ))}
        </div>
    );
};

export default ProfileSelector;

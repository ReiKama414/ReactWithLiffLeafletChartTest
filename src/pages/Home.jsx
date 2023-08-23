// npm install @line/liff
import React, { useState, useEffect } from 'react';
import liff from '@line/liff';

const Home = () => {
    const [userProfile, setUserProfile] = useState(null);

    useEffect(() => {
        const initializeLiff = async () => {
            try {
                await liff.init({ liffId: '2000498288-qZybW8xM' });
                if (liff.isLoggedIn()) {
                    fetchUserProfile();
                } else {
                    // Handle the case where the user is not logged in
                }
            } catch (error) {
                console.error('LIFF initialization failed', error);
            }
        };

        initializeLiff();
    }, []);

    const fetchUserProfile = async () => {
        try {
            const profile = await liff.getProfile();
            setUserProfile(profile);
        } catch (error) {
            console.error('Error fetching user profile', error);
        }
    };

    return (
        <>
            {userProfile ? (
                <div>
                    <img src={userProfile.pictureUrl} alt="Profile" />
                    <p>Name: {userProfile.displayName}</p>
                    <p>Status Message: {userProfile.statusMessage}</p>
                </div>
            ) : (
                <p>Loading user profile...</p>
            )}
        </>
    );
};

export default Home;

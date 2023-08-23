// https://developers.line.biz/zh-hant/
// npm install @line/liff
import React, { useState, useEffect } from 'react';
import liff from '@line/liff';

const Home = () => {
    const [userProfile, setUserProfile] = useState(null);
    const liffId = '2000498288-qZybW8xM';

    // 初始化 LIFF
    useEffect(() => {
        const initializeLiff = async () => {
            try {
                await liff.init({ liffId: liffId });
                if (liff.isLoggedIn()) {
                    fetchUserProfile();
                } else {
                    console.error('User is not logged in');
                }
            } catch (err) {
                console.error('LIFF initialization failed', err);
            }
        };
        initializeLiff();
    }, []);

    // 取得用戶資訊
    const fetchUserProfile = async () => {
        try {
            const profile = await liff.getProfile();
            setUserProfile(profile);
        } catch (err) {
            console.error('Error fetching user profile', err);
        }
    };

    return (
        <>
            {userProfile ? (
                <div>
                    <img src={userProfile.pictureUrl} alt="Profile" />
                    <p>Name: {userProfile.displayName}</p>
                    <p>UserId: {userProfile.userId}</p>
                    <p>Status Message: {userProfile.statusMessage}</p>
                    <p>Language: {liff.getLanguage()}</p>
                    <p>OS: {liff.getOS()}</p>
                    <p>Line Version: {liff.getLineVersion()}</p>
                    <p>LIFF SDK Version: {liff.getVersion()}</p>
                </div>
            ) : (
                <p>Loading user profile...</p>
            )}
        </>
    );
};

export default Home;

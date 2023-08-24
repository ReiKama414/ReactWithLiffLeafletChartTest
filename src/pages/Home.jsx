// https://developers.line.biz/zh-hant/
// npm install @line/liff
import React, { useState, useEffect } from 'react';
import liff from '@line/liff';
import cx from 'classnames';
import UserInfo from '../components/UserInfo';
import style from './home.module.sass';

const Home = () => {
    const [userProfile, setUserProfile] = useState(null);
    const liffId = '2000498288-qZybW8xM';

    const userInfoData = [
        { label: 'Name', value: userProfile ? userProfile.displayName : '' },
        { label: 'UserId', value: userProfile ? userProfile.userId : '' },
        {
            label: 'Status Message',
            value: userProfile ? userProfile.statusMessage : '',
        },
    ];

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
        <div className="simpleTopSpacing">
            {userProfile ? (
                <div
                    className={cx(
                        style.home_wrapper,
                        'd-flex flex-column align-items-center pt-3'
                    )}
                >
                    <div className={cx(style.img, 'px-4')}>
                        <img
                            className={
                                'border border-2 border-light rounded-4 mb-5'
                            }
                            src={userProfile.pictureUrl}
                            alt="Profile"
                        />
                    </div>
                    <div className="d-inline-flex flex-column align-items-center w-100 mb-3 px-5">
                        {userInfoData.map((userInfo, index) => (
                            <UserInfo
                                key={index}
                                label={userInfo.label}
                                value={userInfo.value}
                            />
                        ))}
                    </div>
                    {/* <p>Language: {liff.getLanguage()}</p>
                        <p>OS: {liff.getOS()}</p>
                        <p>Line Version: {liff.getLineVersion()}</p>
                        <p>LIFF SDK Version: {liff.getVersion()}</p> */}
                </div>
            ) : (
                <p className="pt-2 px-3">Loading user profile...</p>
            )}
        </div>
    );
};

export default Home;

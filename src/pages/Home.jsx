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
        { label: 'Name', value: userProfile ? userProfile.displayName : 'Kama' },
        { label: 'UserId', value: userProfile ? userProfile.userId : 'Ubdfdvf262+62v+6x2s2dv6s2dv3sdv2c6s' },
        {
            label: 'Status Message',
            value: userProfile ? userProfile.statusMessage : 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xx x x xxxxxx',
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
            {!userProfile ? (
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
                            src={userProfile ? userProfile.pictureUrl :'https://images.unsplash.com/photo-1692055650839-0c6d9ccc69d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80'}
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

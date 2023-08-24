// https://developers.line.biz/zh-hant/
// npm install @line/liff
import React from 'react';
// import liff from '@line/liff';
import cx from 'classnames';
import UserInfo from '../components/UserInfo';
import style from './home.module.sass';

const Home = (userProfile) => {
    const userInfoData = [
        { label: 'Name', value: userProfile.displayName },
        { label: 'UserId', value: userProfile.userId },
        { label: 'Status Message', value: userProfile.statusMessage },
    ];

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
                <p className='pt-2 px-3'>Loading user profile...</p>
            )}
        </div>
    );
};

export default Home;

// npm install node-sass
// npm install react-router-dom
// npm install bootstrap
// npm install react-bootstrap
// npm install react-router-bootstrap
// npm install classnames
import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import liff from '@line/liff';
import Router from './Routes';
import Navbar from './components/Header/Header';
import './app.sass';

const App = () => {
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
        <BrowserRouter basename="/ReactWithLiffLeafletChartTest">
            <Navbar />
            <Router userProfile={userProfile} />
        </BrowserRouter>
    );
};

export default App;

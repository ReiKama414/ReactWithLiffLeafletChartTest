// npm install leaflet
import React, { useState, useEffect, useRef } from 'react';
import liff from '@line/liff';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import MapsIcon from '../assets/images/icons/icons-maps.svg';
import MySelfIcon from '../assets/images/icons/icons-find-my-self.svg';

const LeafletMap = () => {
    const [userProfile, setUserProfile] = useState(null);
    const [userPosition, setUserPosition] = useState(null);
    const mapRef = useRef(null);
    const liffId = '2000498288-qZybW8xM';

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

        // Using navigator.geolocation to retrieve user's location.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setUserPosition({ lat: latitude, lng: longitude });
                },
                (err) => {
                    console.error('Error getting user position:', err);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }, []);

    useEffect(() => {
        if (userPosition) {
            const map = L.map('map').setView(
                [userPosition.lat, userPosition.lng],
                13
            );
            mapRef.current = map; // Store map instance in the ref

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap contributors',
            }).addTo(map);

            let iconSize = 64;
            const userMarker = L.marker([userPosition.lat, userPosition.lng], {
                icon: L.icon({
                    iconUrl: MapsIcon,
                    iconSize: [iconSize, iconSize],
                    popupAnchor: [0, -iconSize / 2],
                }),
            }).addTo(map);

            const popupContent = `
                <h3>${userProfile.displayName}</h3>
                <img src="${userProfile.pictureUrl}" alt="User's Picture" />
            `;

            userMarker.bindPopup(popupContent);

            userMarker.on('click', () => {
                userMarker.openPopup();
            });

            // Add a button to return to user's location
            const returnToUserButton = L.control({ position: 'bottomleft' });
            returnToUserButton.onAdd = () => {
                const button = L.DomUtil.create(
                    'button',
                    'bg-transparent border-0'
                );
                button.innerHTML = `<img src="${MySelfIcon}" alt="return" />`;
                button.title = "Return to User's Location";
                button.addEventListener('click', () => {
                    mapRef.current.setView(
                        [userPosition.lat, userPosition.lng],
                        13
                    );
                });
                return button;
            };
            returnToUserButton.addTo(map);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userPosition]);

    // 取得用戶資訊
    const fetchUserProfile = async () => {
        try {
            const profile = await liff.getProfile();
            setUserProfile(profile);
        } catch (err) {
            console.error('Error fetching user profile', err);
        }
    };

    return <div id="map" style={{ width: '100%', height: '100vh' }}></div>;
};

export default LeafletMap;

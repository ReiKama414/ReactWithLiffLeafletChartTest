import React from 'react';

const UserInfo = ({ label, value }) => {
    return (
        <div>
            <h5>{label}:</h5>
            <p className="text-ellipsis w-100 text-center">{value}</p>
        </div>
    );
};

export default UserInfo;

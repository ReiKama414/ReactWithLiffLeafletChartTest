import React from 'react';

const UserInfo = ({ label, value }) => {
    return (
        <>
            <h5>{label}:</h5>
            <p className="w-100 text-center " style={{overflowWrap: 'break-word'}}>{value}</p>
        </>
    );
};

export default UserInfo;

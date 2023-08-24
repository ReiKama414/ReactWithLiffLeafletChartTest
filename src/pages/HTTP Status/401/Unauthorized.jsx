import React from 'react';
import HttpStatus from '../../../components/HttpStatus';

const Unauthorized = () => {
    return (
        <HttpStatus
            color="#e4a980"
            title="401"
            message1="您沒有權限訪問此頁面"
            message2="You don't have permission to access this page."
        />
    );
};

export default Unauthorized;

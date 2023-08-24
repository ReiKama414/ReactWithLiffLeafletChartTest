import React from 'react';
import HttpStatus from '../../../components/HttpStatus';

const NotFound = () => {
    return (
        <HttpStatus
            color="#e9f0f1"
            title="404"
            message1=" 這個頁面不存在"
            message2="The page you are looking for doesn't exist."
        />
    );
};

export default NotFound;

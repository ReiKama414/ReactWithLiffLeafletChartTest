import React from 'react';
import HttpStatus from '../../../components/HttpStatus';

const Forbidden = () => {
    return (
        <HttpStatus
            color="#c18686"
            title="403"
            message1="服務器拒絕響應"
            message2="The server refused to respond."
        />
    );
};

export default Forbidden;

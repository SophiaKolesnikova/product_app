import React from 'react';

interface IErrorMessageProps {
    error: string
}

const Error = ({error}: IErrorMessageProps) => {
    return (
        <p className="text-center text-red-600">{error}</p>
    );
};

export default Error;
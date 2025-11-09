import React from 'react';

const MyContainer = ({className , children}) => {
    return (
        <div className={`${className} container mx-auto w-11/12` }>
            {children}
        </div>
    );
};

export default MyContainer;
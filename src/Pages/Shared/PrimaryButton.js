import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary text-3xl pb-12 px-7 pt-2">{children}</button>
    );
};

export default PrimaryButton;
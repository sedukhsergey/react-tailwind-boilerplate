import React from 'react';
import blueLogo from '../../images/react.svg';
import redLogo from '../../images/redLogo.svg';
const HeaderPublic = () => {
    return (
        <div
            className="
            md:flex md:flex-row md:justify-between
            p-3 bg-white rounded-sm mb-8 bg-gray-800 shadow-lg
        "
        >
            <div className="md:flex">
                <h2 className="text-white">Header</h2>
                <img
                    src={true ? blueLogo : redLogo}
                    alt="logo"
                    className="
                md:ml-2 md:w-6
                w-4 rounded-lg"
                />
            </div>
        </div>
    );
};

export default HeaderPublic;

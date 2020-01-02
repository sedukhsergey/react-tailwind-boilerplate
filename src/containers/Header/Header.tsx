import React, { useState } from 'react';
import blueLogo from '../../images/react.svg';
import redLogo from '../../images/redLogo.svg';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div
            className="
            md:flex md:flex-row md:justify-between
            p-3 bg-white rounded-sm mb-8 bg-blue-300 shadow-lg
        "
        >
            <div className="md:flex">
                <h2>Header company name</h2>
                <img
                    src={isOpen ? blueLogo : redLogo}
                    alt="logo"
                    className="
                md:ml-2 md:w-6
                w-4 rounded-lg"
                />
            </div>
            <button onClick={() => setIsOpen(state => !state)}>
                {isOpen ? 'logout' : 'login'}
            </button>
        </div>
    );
};

export default Header;

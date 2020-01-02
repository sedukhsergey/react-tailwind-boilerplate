import React, { useState } from 'react';
import blueLogo from '../../images/react.svg';
import redLogo from '../../images/redLogo.svg';
import { Button } from '../../components';
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
                <h2>Header</h2>
                <img
                    src={isOpen ? blueLogo : redLogo}
                    alt="logo"
                    className="
                md:ml-2 md:w-6
                w-4 rounded-lg"
                />
            </div>
            <Button
                handleClick={() => setIsOpen(state => !state)}
                looks={`${isOpen ? 'small' : 'large'}`}
                styles={{
                    background: 'grey',
                    padding: '20px',
                }}
            >
                Open chat
            </Button>
        </div>
    );
};

export default Header;

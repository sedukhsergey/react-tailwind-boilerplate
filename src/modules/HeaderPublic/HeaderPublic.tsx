import React from 'react';
import { RedirectRouter } from '../../routes';
import blueLogo from '../../images/react.svg';
import redLogo from '../../images/redLogo.svg';
import { Button } from '../../components';
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
            <Button
                handleClick={() => {
                    RedirectRouter.goToPage404();
                }}
                looks={`${true ? 'small' : 'large'}`}
                // customStyles={{
                //     background: 'grey',
                //     padding: '20px',
                // }}
            >
                Open chat
            </Button>
        </div>
    );
};

export default HeaderPublic;

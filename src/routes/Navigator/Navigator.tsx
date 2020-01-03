import React from 'react';
import { Redirect } from 'react-router';
import { localStorage } from '../../utils';
const browserLocale =
    (navigator.languages && navigator.languages[0]) || navigator.language
const browserLocaleWithoutRegionCode = browserLocale.toLowerCase().split(/[_-]+/)[0]
const Navigator = () => {

    // role should be receive from context or props or redux or localStorage
    const role = localStorage.getItem('role');
    if (role === 'member') {
        return <Redirect to={`/${browserLocaleWithoutRegionCode}/main`} />;
    }
    if (role === 'admin') {
        return <Redirect to={`/${browserLocaleWithoutRegionCode}/admin`} />;
    }
    return <Redirect to={`/${browserLocaleWithoutRegionCode}/login`} />;
};

export default Navigator;

import { useContext } from 'react';
import { __RouterContext as RouterContext } from 'react-router';

const useMatch = () => {
    const { match } = useContext(RouterContext);
    return match;
};

export default useMatch;

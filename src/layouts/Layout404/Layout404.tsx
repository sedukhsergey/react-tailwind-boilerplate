import React from 'react';

type Match = {
    params: any;
}
type Props = {
    children: React.ReactElement;
    match: Match
};

const Layout404: React.FC<Props> = ({ children, match}) => {
    return (
        <div className="">
            {React.cloneElement(children, match.params && match.params)}
        </div>
    );
};

export default Layout404;

import React from 'react';
import { Footer, Header } from '../../modules';

type Match = {
    params: any;
}
type Props = {
    children: React.ReactElement;
    match: Match
};

const DashboardLayout: React.FC<Props> = ({ children, match, ...rest}) => {
    return (
        <div className="flex flex-col justify-between h-screen bg-gray-100">
            <div>
                <Header />
                {React.cloneElement(children, {params: match.params})}
            </div>
            <div className="flex items-center justify-center bg-blue-200 p-3">
                <Footer />
            </div>
        </div>
    );
};

export default DashboardLayout;

import React, { use } from 'react';
import { Header, Main, Footer } from '../../containers';

function App() {
    return (
        <div className='flex flex-col justify-between h-screen bg-gray-100'>
            <div>
                <Header/>
                <Main />
            </div>
            <div className='flex items-center justify-center bg-blue-200 p-3'>
                <Footer />
            </div>
        </div>
    );
}

export default App;

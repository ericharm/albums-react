import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { Router } from './Router';
import Store from './Store';

const App: React.FC = () => {
    return (
        <Store>
            <RouterProvider router={Router} />
        </Store>
    );
};

export default App;

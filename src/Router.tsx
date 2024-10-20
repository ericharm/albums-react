import { createBrowserRouter } from 'react-router-dom';
import { AlbumsPage } from './components/pages/AlbumsPage';

export const root = '/';
export const albumsPath = '/albums';

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <AlbumsPage />,
    },
    {
        path: '/albums',
        element: <AlbumsPage />,
    },
]);

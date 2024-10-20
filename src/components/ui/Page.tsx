import styled from 'styled-components';
import { Breakpoints, Spacing } from '../../Theme';
import { useContext, useEffect } from 'react';
import { DispatchContext, StateContext } from '../../Store';
import { useNavigate } from 'react-router-dom';
import { Header } from '../header/Header';
import { LoginModal } from '../login/LoginModal';
import { loadUser } from '../../service/LocalStorage';
import { setUser } from '../../store/Action';
import { AlbumFormModal } from '../albums/AlbumFormModal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DeleteAlbumModal } from '../albums/DeleteAlbumModal';

const PageContents = styled.div`
    margin: 0 auto;
    padding: ${Spacing.standard};
    max-width: ${Breakpoints.lg};
`;

export const Page: React.FC<React.PropsWithChildren> = ({ children }) => {
    const navigate = useNavigate();
    const state = useContext(StateContext);
    const dispatch = useContext(DispatchContext);
    const { isLoginModalOpen, isAlbumFormModalOpen, isDeleteAlbumModalOpen } = state;

    useEffect(() => {
        let currentUser = loadUser();
        const tokenExpiration = currentUser?.token_expiration;
        const now = new Date();
        if (tokenExpiration && now > new Date(tokenExpiration)) currentUser = undefined;
        dispatch(setUser(currentUser));
    }, [loadUser]);

    return (
        <>
            <Header navigate={navigate} />
            {isLoginModalOpen && <LoginModal />}
            {isAlbumFormModalOpen && <AlbumFormModal />}
            {isDeleteAlbumModalOpen && <DeleteAlbumModal />}
            <PageContents>{children}</PageContents>
            <ToastContainer
                autoClose={1500}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
};

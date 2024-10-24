import React, { useCallback, useContext } from 'react';
import { Modal } from '../ui/Modal';
import { AlbumFormContainer } from './AlbumFormContainer';
import { DispatchContext } from '../../Store';
import { setAlbumFormModalOpen, setCurrentAlbum } from '../../store/actions';

export const AlbumFormModal: React.FC<React.PropsWithChildren> = () => {
    const dispatch = useContext(DispatchContext);

    const closeModal = useCallback(() => {
        dispatch(setAlbumFormModalOpen(false));
        dispatch(setCurrentAlbum(undefined));
    }, [dispatch]);

    return (
        <Modal onClose={closeModal}>
            <AlbumFormContainer />
        </Modal>
    );
};

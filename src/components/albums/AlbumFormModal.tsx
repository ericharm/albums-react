import React, { useCallback, useContext } from 'react';
import { Modal } from '../ui/Modal';
import { AlbumFormContainer } from './AlbumFormContainer';
import { DispatchContext } from '../../Store';
import { setAlbumFormModalOpen } from '../../store/Action';

export const AlbumFormModal: React.FC<React.PropsWithChildren> = () => {
    const dispatch = useContext(DispatchContext);

    const closeModal = useCallback(() => {
        dispatch(setAlbumFormModalOpen(false));
    }, [dispatch]);

    return (
        <Modal onClose={closeModal}>
            <AlbumFormContainer />
        </Modal>
    );
};

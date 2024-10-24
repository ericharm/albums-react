import React, { useCallback, useContext } from 'react';
import { Modal } from '../ui/Modal';
import { DispatchContext, StateContext } from '../../Store';
import { setAlbums, setDeleteAlbumModalOpen, setUser } from '../../store/actions';
import styled from 'styled-components';
import { Spacing } from '../../Theme';
import { Button, DeleteButton } from '../ui/Button';
import { deleteAlbum, searchAlbums } from '../../service/AlbumsService';
import { toast } from 'react-toastify';

const Form = styled.div`
    display: grid;
    grid-gap: ${Spacing.small};
`;

const Grid = styled.div`
    display: grid;
    grid-gap: ${Spacing.small};
    grid-template-columns: 1fr 1fr;
`;

export const DeleteAlbumModal: React.FC<React.PropsWithChildren> = () => {
    const state = useContext(StateContext);
    const dispatch = useContext(DispatchContext);
    const { currentAlbum } = state;

    const successText = 'Album deleted successfully';

    const closeModal = useCallback(() => {
        dispatch(setDeleteAlbumModalOpen(false));
    }, [dispatch]);

    const onSubmit = useCallback(async () => {
        if (!currentAlbum) return;
        try {
            await deleteAlbum(currentAlbum.id);
            toast.success(successText);
            dispatch(setDeleteAlbumModalOpen(false));
            const albumsResponse = await searchAlbums(1, undefined);
            dispatch(setAlbums(albumsResponse.data));
        } catch (error: any) {
            if (error && error.status === 403) {
                toast.error("You're not logged in");
                dispatch(setDeleteAlbumModalOpen(false));
                dispatch(setUser(undefined));
                return;
            }
            toast.error('Unable to delete album');
        }
    }, [dispatch]);

    const onCancel = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        dispatch(setDeleteAlbumModalOpen(false));
    }, []);

    return (
        <Modal onClose={closeModal}>
            <Form onSubmit={onSubmit}>
                Are you sure?
                <Grid>
                    <Button onClick={onCancel}>Cancel</Button>
                    <DeleteButton onClick={onSubmit}>Delete</DeleteButton>
                </Grid>
            </Form>
        </Modal>
    );
};

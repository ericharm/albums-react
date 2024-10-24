import { Page } from '../ui/Page';

import { searchAlbums } from '../../service/AlbumsService';
import styled from 'styled-components';
import { Spacing } from '../../Theme';
import { useCallback, useContext, useEffect } from 'react';
import { Album } from '../../models/Album';
import { Column } from '../ui/models';
import { DataGrid } from '../ui/DataGrid';
import { Color } from '../../Theme';
import { Button } from '../ui/Button';
import { DispatchContext, StateContext } from '../../Store';
import {
    setAlbums,
    setAlbumFormModalOpen,
    setCurrentAlbum,
    setDeleteAlbumModalOpen,
    setLoginModalOpen,
} from '../../store/actions';
import { Pagination } from '../ui/Pagination';
import { SearchAlbumsFormContainer } from '../albums/SearchAlbumsFormContainer';

const GridWrapper = styled.div`
    display: grid;
    grid-row-gap: ${Spacing.standard};
    border: 1px solid ${Color.black};
    border-radius: 4px;
    padding: ${Spacing.small};
`;

const Actions = styled.div`
    display: flex;
    margin: ${Spacing.standard} 0;
`;

const Spacer = styled.div`
    display: flex;
    flex-grow: 1;
`;

const columns: Column[] = [
    { key: 'artist', label: 'Artist' },
    { key: 'title', label: 'Title' },
    { key: 'released', label: 'Released' },
    { key: 'genres', label: 'Genres' },
    { key: 'label', label: 'Label' },
    { key: 'notes', label: 'Notes' },
];

export const AlbumsPage: React.FC<React.PropsWithChildren> = () => {
    const state = useContext(StateContext);
    const dispatch = useContext(DispatchContext);
    const {
        user,
        albums,
        currentAlbum,
        isLoginModalOpen,
        isAlbumFormModalOpen,
        isDeleteAlbumModalOpen,
    } = state;

    useEffect(() => {
        const fetchAlbums = async () => {
            const response = await searchAlbums(1);
            dispatch(setAlbums(response.data));
        };
        fetchAlbums();
    }, [searchAlbums, dispatch, setAlbums]);

    const closeModal = useCallback(() => {
        if (isAlbumFormModalOpen) dispatch(setAlbumFormModalOpen(false));
        if (isLoginModalOpen) dispatch(setLoginModalOpen(false));
        if (isDeleteAlbumModalOpen) dispatch(setDeleteAlbumModalOpen(false));
        if (currentAlbum) dispatch(setCurrentAlbum(undefined));
    }, [isAlbumFormModalOpen, isLoginModalOpen, currentAlbum]);

    useEffect(() => {
        addEventListener('keydown', (event: KeyboardEvent) => {
            if (event.key === 'Escape') closeModal();
        });

        return () =>
            removeEventListener('keydown', (event: KeyboardEvent) => {
                if (event.key === 'Escape') closeModal();
            });
    }, [closeModal]);

    const onSetPage = useCallback(
        async (page: number) => {
            const response = await searchAlbums(page);
            dispatch(setAlbums(response.data));
        },
        [dispatch, searchAlbums]
    );

    const onClickAlbumRow = useCallback(
        (album: Album) => {
            dispatch(setCurrentAlbum(album));
            dispatch(setAlbumFormModalOpen(true));
        },
        [dispatch, setCurrentAlbum, setAlbumFormModalOpen]
    );

    const openAlbumFormModal = useCallback(
        (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.preventDefault();
            dispatch(setAlbumFormModalOpen(true));
        },
        [dispatch, setAlbumFormModalOpen]
    );

    return (
        <Page>
            <Actions>
                <SearchAlbumsFormContainer />
                <Spacer />
                {user && <Button onClick={openAlbumFormModal}>Create Album</Button>}
            </Actions>

            <GridWrapper>
                <DataGrid<Album>
                    columns={columns}
                    data={albums.albums}
                    onClickRow={user ? onClickAlbumRow : undefined}
                />
            </GridWrapper>

            <Pagination
                page={albums.page}
                pageSize={albums.page_size}
                pages={albums.total_pages}
                total={albums.total_count}
                onSetPage={onSetPage}
            />
        </Page>
    );
};

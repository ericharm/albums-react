import { Page } from '../ui/Page';

import { getAlbums } from '../../service/AlbumsService';
import styled from 'styled-components';
import { Spacing } from '../../Theme';
import { useCallback, useContext, useEffect } from 'react';
import { Album } from '../../models/Album';
import { Column } from '../../models/ui';
import { DataGrid } from '../ui/DataGrid';
import { Color } from '../../Theme';
import { Button } from '../ui/Button';
import { DispatchContext, StateContext } from '../../Store';
import { setAlbums, setCreateAlbumModalOpen } from '../../store/Action';
import { Pagination } from '../ui/Pagination';

const GridWrapper = styled.div`
    display: grid;
    grid-row-gap: ${Spacing.standard};
    border: 1px solid ${Color.black};
    border-radius: 4px;
    padding: ${Spacing.small};
`;

const Flex = styled.div`
    display: flex;
    padding: ${Spacing.standard} 0;
    justify-content: end;
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
    const { user, albums } = state;

    const loadAlbums = useCallback(async () => {
        const response = await getAlbums(1);
        dispatch(setAlbums(response.data));
    }, [dispatch]);

    const loadAlbumsPage = useCallback(
        async (page: number) => {
            const response = await getAlbums(page);
            dispatch(setAlbums(response.data));
        },
        [dispatch]
    );

    const openCreateAlbumModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        dispatch(setCreateAlbumModalOpen(true));
    };

    useEffect(() => {
        loadAlbums();
    }, []);

    return (
        <Page>
            <Flex>{user && <Button onClick={openCreateAlbumModal}>Create Album</Button>}</Flex>
            <GridWrapper>
                <DataGrid<Album> columns={columns} data={albums.albums} />
            </GridWrapper>
            <Pagination
                page={albums.page}
                pageSize={albums.page_size}
                pages={albums.total_pages}
                total={albums.total_count}
                onSetPage={loadAlbumsPage}
            />
        </Page>
  );
};

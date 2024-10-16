import { Page } from '../ui/Page';

import { searchAlbums } from '../../service/AlbumsService';
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
    const { user, albums } = state;

    const loadAlbums = useCallback(async () => {
        const response = await searchAlbums(1);
        dispatch(setAlbums(response.data));
    }, []);

    const loadAlbumsPage = useCallback(async (page: number) => {
        const response = await searchAlbums(page);
        dispatch(setAlbums(response.data));
    }, []);

    const openCreateAlbumModal = useCallback(
        (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.preventDefault();
            dispatch(setCreateAlbumModalOpen(true));
        },
        []
    );

    useEffect(() => {
        loadAlbums();
    }, []);

    return (
        <Page>
            <Actions>
                <SearchAlbumsFormContainer />
                <Spacer />
                {user && <Button onClick={openCreateAlbumModal}>Create Album</Button>}
            </Actions>

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

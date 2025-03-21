import { State } from './models';

export const initialState: State = {
    albums: { albums: [], page: 0, page_size: 0, total_count: 0, total_pages: 0 },
    genres: undefined,
    user: undefined,
    isLoginModalOpen: false,
    isAlbumFormModalOpen: false,
    isDeleteAlbumModalOpen: false,
    currentAlbum: undefined,
    query: undefined,
};

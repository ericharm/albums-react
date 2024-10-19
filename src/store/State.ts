import { Album } from '../models/Album';
import { User } from '../models/User';
import { AlbumsResponse } from '../service/models/albums';

export interface State {
    albums: AlbumsResponse;
    user?: User;
    isLoginModalOpen: boolean;
    isAlbumFormModalOpen: boolean;
    isDeleteAlbumModalOpen: boolean;
    currentAlbum?: Album;
}

export const initialState: State = {
    albums: { albums: [], page: 0, page_size: 0, total_count: 0, total_pages: 0 },
    user: undefined,
    isLoginModalOpen: false,
    isAlbumFormModalOpen: false,
    isDeleteAlbumModalOpen: false,
    currentAlbum: undefined,
};

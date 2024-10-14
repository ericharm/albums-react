import { User } from '../models/User';
import { AlbumsResponse } from '../service/models/albums';

export interface State {
    albums: AlbumsResponse;
    user?: User;
    tokenAge?: Date;
    isLoginModalOpen: boolean;
    isCreateAlbumModalOpen: boolean;
}

export const initialState: State = {
    albums: { albums: [], page: 0, page_size: 0, total_count: 0, total_pages: 0 },
    user: undefined,
    tokenAge: undefined,
    isLoginModalOpen: false,
    isCreateAlbumModalOpen: false,
};

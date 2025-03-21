import { Album } from '../models/Album';
import { Genre } from '../models/Genre';
import { User } from '../models/User';
import { AlbumsResponse } from '../service/models/albums';

export interface Action {
    type: ActionKind;
    payload?: any;
}

export enum ActionKind {
    SetAlbums,
    SetGenres,
    AddGenre,
    SetUser,
    SetLoginModalOpen,
    SetAlbumFormModalOpen,
    SetDeleteAlbumModalOpen,
    SetCurrentAlbum,
    SetQuery,
}

export interface State {
    albums: AlbumsResponse;
    genres?: Genre[];
    user?: User;
    isLoginModalOpen: boolean;
    isAlbumFormModalOpen: boolean;
    isDeleteAlbumModalOpen: boolean;
    currentAlbum?: Album;
    query?: string;
}

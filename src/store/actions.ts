import { Album } from '../models/Album';
import { Genre } from '../models/Genre';
import { User } from '../models/User';
import { clearUser, saveUser } from '../service/LocalStorage';
import { AlbumsResponse } from '../service/models/albums';
import { ActionKind } from './models';

export const setAlbums = (albums: AlbumsResponse) => ({
    type: ActionKind.SetAlbums,
    payload: albums,
});

export const setGenres = (genres: Genre[]) => ({
    type: ActionKind.SetGenres,
    payload: genres,
});

export const setUser = (user?: User) => {
    if (user) saveUser(user);
    else clearUser();
    return { type: ActionKind.SetUser, payload: user };
};

export const setLoginModalOpen = (isLoginModalOpen: boolean) => ({
    type: ActionKind.SetLoginModalOpen,
    payload: isLoginModalOpen,
});

export const setAlbumFormModalOpen = (isAlbumFormModalOpen: boolean) => ({
    type: ActionKind.SetAlbumFormModalOpen,
    payload: isAlbumFormModalOpen,
});

export const setDeleteAlbumModalOpen = (isDeleteAlbumModalOpen: boolean) => ({
    type: ActionKind.SetDeleteAlbumModalOpen,
    payload: isDeleteAlbumModalOpen,
});

export const setCurrentAlbum = (currentAlbum?: Album) => ({
    type: ActionKind.SetCurrentAlbum,
    payload: currentAlbum,
});

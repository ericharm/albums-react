import { Album } from '../models/Album';
import { User } from '../models/User';
import { clearUser, saveUser } from '../service/LocalStorage';
import { AlbumsResponse } from '../service/models/albums';

export interface Action {
    type: ActionKind;
    payload?: any;
}

export enum ActionKind {
    SetAlbums,
    SetUser,
    SetLoginModalOpen,
    SetAlbumFormModalOpen,
    SetDeleteAlbumModalOpen,
    SetCurrentAlbum,
}

export const setAlbums = (albums: AlbumsResponse) => ({
    type: ActionKind.SetAlbums,
    payload: albums,
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

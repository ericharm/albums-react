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
    SetTokenAge,
    SetLoginModalOpen,
    SetCreateAlbumModalOpen,
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

export const setTokenAge = (tokenAge?: Date) => ({
    type: ActionKind.SetTokenAge,
    payload: tokenAge,
});

export const setLoginModalOpen = (isLoginModalOpen: boolean) => ({
    type: ActionKind.SetLoginModalOpen,
    payload: isLoginModalOpen,
});

export const setCreateAlbumModalOpen = (isCreateAlbumModalOpen: boolean) => ({
    type: ActionKind.SetCreateAlbumModalOpen,
    payload: isCreateAlbumModalOpen,
});

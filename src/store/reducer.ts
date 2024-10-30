import { State, Action, ActionKind } from './models';

export const reducer = (state: State, { type, payload }: Action) => {
    switch (type) {
        case ActionKind.SetAlbums:
            return { ...state, albums: payload };
        case ActionKind.SetGenres:
            return { ...state, genres: payload };
        case ActionKind.AddGenre:
            return { ...state, genres: state.genres ? [...state.genres, payload] : [payload] };
        case ActionKind.SetUser:
            return { ...state, user: payload };
        case ActionKind.SetLoginModalOpen:
            return { ...state, isLoginModalOpen: payload };
        case ActionKind.SetAlbumFormModalOpen:
            return { ...state, isAlbumFormModalOpen: payload };
        case ActionKind.SetDeleteAlbumModalOpen:
            return { ...state, isDeleteAlbumModalOpen: payload };
        case ActionKind.SetCurrentAlbum:
            return { ...state, currentAlbum: payload };
        default:
            console.warn('UNKNOWN ACTION', type);
            return state;
    }
};

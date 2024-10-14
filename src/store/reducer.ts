import { State } from './State';
import { Action, ActionKind } from './Action';

export const reducer = (state: State, { type, payload }: Action) => {
    switch (type) {
        case ActionKind.SetAlbums:
            return { ...state, albums: payload };
        case ActionKind.SetUser:
            return { ...state, user: payload };
        case ActionKind.SetTokenAge:
            return { ...state, tokenAge: payload };
        case ActionKind.SetLoginModalOpen:
            return { ...state, isLoginModalOpen: payload };
        case ActionKind.SetCreateAlbumModalOpen:
            return { ...state, isCreateAlbumModalOpen: payload };
        default:
            console.warn('UNKNOWN ACTION', type);
            return state;
    }
};

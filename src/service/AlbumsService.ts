import { AxiosResponse } from 'axios';
import { httpClient } from './Http';
import { AlbumsResponse, AlbumRequest, AlbumResponse } from './models/albums';
import { loadUser } from './LocalStorage';

const albumsUrl = 'albums';

export const searchAlbums = (
    pageNumber: number,
    query?: string
): Promise<AxiosResponse<AlbumsResponse>> => {
    const params: any = {
        page: pageNumber,
    };

    if (query) params.query = query;

    return httpClient.get(albumsUrl, {
        params: params,
    });
};

export const createAlbum = (request: AlbumRequest): Promise<AxiosResponse<AlbumResponse>> => {
    const user = loadUser();
    if (!user) throw new Error('Not logged in');
    return httpClient.post(albumsUrl, request, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.token}`,
        },
    });
};

export const updateAlbum = (
    id: string,
    request: AlbumRequest
): Promise<AxiosResponse<AlbumResponse>> => {
    const user = loadUser();
    if (!user) throw new Error('Not logged in');
    return httpClient.put(`${albumsUrl}/${id}`, request, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.token}`,
        },
    });
};

export const deleteAlbum = (id: string): Promise<AxiosResponse<void>> => {
    const user = loadUser();
    if (!user) throw new Error('Not logged in');
    return httpClient.delete(`${albumsUrl}/${id}`, {
        headers: {
            Authorization: `Bearer ${user.token}`,
        },
    });
};

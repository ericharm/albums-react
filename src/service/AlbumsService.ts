import { AxiosResponse } from 'axios';
import { httpClient } from './Http';
import { AlbumsResponse, CreateAlbumRequest, CreateAlbumResponse } from './models/albums';
import { loadUser } from './LocalStorage';

const albumsUrl = 'albums';

export const searchAlbums = (
    pageNumber: number,
    query?: string
): Promise<AxiosResponse<AlbumsResponse>> =>
    httpClient.get(albumsUrl, {
        params: {
            query: query,
            page: pageNumber,
        },
    });

export const createAlbum = (
    request: CreateAlbumRequest
): Promise<AxiosResponse<CreateAlbumResponse>> => {
    const user = loadUser();
    if (!user) throw new Error('Not logged in');
    return httpClient.post(albumsUrl, request, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.token}`,
        },
    });
};

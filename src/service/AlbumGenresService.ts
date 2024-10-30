import { AxiosResponse } from 'axios';
import { httpClient } from './Http';
import { AlbumGenreResponse } from './models/albumGenres';
import { loadUser } from './LocalStorage';

export const fetchAlbumGenres = (albumId: string): Promise<AxiosResponse<AlbumGenreResponse[]>> =>
    httpClient.get(`albums/${albumId}/genres`);

export const addAlbumGenreTag = (
    albumId: string,
    genreId: string
): Promise<AxiosResponse<AlbumGenreResponse>> => {
    const user = loadUser();
    if (!user) throw new Error('Not logged in');
    return httpClient.post(`albums/${albumId}/genres/${genreId}`, null, {
        headers: {
            Authorization: `Bearer ${user.token}`,
        },
    });
};

export const removeAlbumGenreTag = (albumGenreId: string): Promise<AxiosResponse<void>> => {
    const user = loadUser();
    if (!user) throw new Error('Not logged in');
    return httpClient.delete(`album_genres/${albumGenreId}`, {
        headers: {
            Authorization: `Bearer ${user.token}`,
        },
    });
};

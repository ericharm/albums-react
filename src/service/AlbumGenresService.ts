import { AxiosResponse } from 'axios';
import { httpClient } from './Http';
import { AlbumGenreResponse } from './models/albumGenres';

export const fetchAlbumGenres = (albumId: number): Promise<AxiosResponse<AlbumGenreResponse[]>> =>
    httpClient.get(`albums/${albumId}/genres`);

export const addAlbumGenreTag = (
    albumId: number,
    genreId: number
): Promise<AxiosResponse<AlbumGenreResponse>> =>
    httpClient.post(`albums/${albumId}/genres/${genreId}`);

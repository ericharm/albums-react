import { AxiosResponse } from 'axios';
import { httpClient } from './Http';
import { GenreResponse } from './models/genres';
import { loadUser } from './LocalStorage';

const genresUrl = 'genres';

export const fetchGenres = (): Promise<AxiosResponse<GenreResponse[]>> => httpClient.get(genresUrl);

export const createGenre = (name: string): Promise<AxiosResponse<GenreResponse>> => {
    const user = loadUser();
    if (!user) throw new Error('Not logged in');

    return httpClient.post(
        genresUrl,
        { name: name },
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.token}`,
            },
        }
    );
};

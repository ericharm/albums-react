import { AxiosResponse } from 'axios';
import { httpClient } from './Http';
import { GenreResponse } from './models/genres';

const genresUrl = 'genres';

export const fetchGenres = (): Promise<AxiosResponse<GenreResponse[]>> => httpClient.get(genresUrl);

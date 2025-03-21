import { PaginatedResponse } from './response';
import { Album } from '../../models/Album';

export interface SearchAlbumsRequest {
    query?: string;
}

export interface AlbumsResponse extends PaginatedResponse {
    albums: Album[];
}

export interface AlbumRequest {
    artist?: string;
    released?: string;
    title: string;
    format?: string; // TODO use an enum
    label?: string;
    notes?: string;
}

export interface AlbumResponse extends AlbumRequest {
    id: string;
    created_at: string;
    updated_at: string;
}

import { PaginatedResponse } from './response';
import { Album } from '../../models/Album';

export interface AlbumsResponse extends PaginatedResponse {
    albums: Album[];
}

export interface CreateAlbumRequest {
    artist?: string;
    released?: string;
    title: string;
    format?: string; // TODO use an enum
    label?: string;
    notes?: string;
}

export interface CreateAlbumResponse extends CreateAlbumRequest {
    id: string;
    created_at: string;
    updated_at: string;
}

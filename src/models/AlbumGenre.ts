export interface AlbumGenre {
    id: number; // The ID of the association between an album and a genre
    album_id: number;
    genre_id: number;
    genre_name: string;
}

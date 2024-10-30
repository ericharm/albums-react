export interface AlbumGenre {
    id: string; // The ID of the association between an album and a genre
    album_id: string;
    genre_id: string;
    genre_name: string;
}

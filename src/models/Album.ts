export interface Album {
    id: number;
    artist: string;
    title: string;
    released?: string;
    format?: string;
    label?: string;
    notes?: string;
    genres?: string[];
    created_at: string;
    updated_at: string;
}

import { FormikValues } from 'formik';
import { AlbumGenre } from '../../models/AlbumGenre';
import { SelectFieldOption } from '../ui/models';
import { Album } from '../../models/Album';

export interface AlbumFormProps extends FormikValues {
    currentAlbum?: Album;
    showDeleteButton: boolean;
    submitButtonText: string;
    onClickDeleteButton: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface GenresFormContainerProps {
    currentAlbum: Album;
}

export interface GenresFormProps {
    options: SelectFieldOption[];
    albumGenres?: AlbumGenre[];
    selectedGenre?: SelectFieldOption;
    onAddGenreOption: (genreName: string) => void;
    onChangeSelectedGenre: (newValue: SelectFieldOption) => void;
    onAddGenreToAlbum: () => void;
    onRemoveGenreFromAlbum: (albumGenreId: string) => void;
}

export interface GenrePillsProps {
    albumGenres: AlbumGenre[];
    onRemoveGenreFromAlbum: (id: string) => void;
}

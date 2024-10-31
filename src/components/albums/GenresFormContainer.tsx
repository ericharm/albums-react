import { useCallback, useContext, useEffect, useState } from 'react';
import { GenresForm } from './GenresForm';
import { GenresFormContainerProps } from './models';
import { createGenre, fetchGenres } from '../../service/GenresService';
import { toast } from 'react-toastify';
import { DispatchContext, StateContext } from '../../Store';
import { SelectFieldOption } from '../ui/models';
import { addGenre, setGenres, setUser } from '../../store/actions';
import { addAlbumGenreTag, removeAlbumGenreTag } from '../../service/AlbumGenresService';
import { fetchAlbumGenres } from '../../service/AlbumGenresService';
import { AlbumGenre } from '../../models/AlbumGenre';

export const GenresFormContainer: React.FC<GenresFormContainerProps> = ({ currentAlbum }) => {
    const dispatch = useContext(DispatchContext);
    const state = useContext(StateContext);
    const { genres } = state;
    const [genreOptions, setGenreOptions] = useState<SelectFieldOption[]>([]);
    const [selectedGenre, setSelectedGenre] = useState<SelectFieldOption | undefined>(undefined);
    const [albumGenres, setAlbumGenres] = useState<AlbumGenre[] | undefined>(undefined);

    // If the app hasn't already fetched a complete list of genres,
    // fetch them when the album form is going to be displayed
    useEffect(() => {
        const populateGenres = async () => {
            const response = await fetchGenres();
            dispatch(setGenres(response.data));
        };
        if (!genres) populateGenres();
    }, [fetchGenres, dispatch]);

    // Set the options for the genre select whenever the genres list becomes available
    useEffect(() => {
        if (genres) {
            setGenreOptions(
                genres.map(genre => ({
                    value: genre.id,
                    label: genre.name,
                }))
            );
        }
    }, [genres]);

    const populateAlbumGenres = useCallback(
        async (albumId: string) => {
            const response = await fetchAlbumGenres(albumId);
            setAlbumGenres(response.data);
        },
        [fetchAlbumGenres]
    );

    // If the edit version of the form is being loaded, also fetch any tagged genres for the album
    useEffect(() => {
        if (currentAlbum) populateAlbumGenres(currentAlbum.id);
    }, [currentAlbum, populateAlbumGenres]);

    const createGenreFromNewOption = useCallback(async (genreName: string) => {
        try {
            const response = await createGenre(genreName);
            toast.success(`Added genre "${genreName}"`);
            dispatch(addGenre(response.data));
        } catch (error: any) {
            if (error && error.status === 403) {
                toast.error("You're not logged in");
                dispatch(setUser(undefined));
                return;
            }
            toast.error('Unable to create genre album');
        }
    }, []);

    const onChangeSelectedGenre = useCallback(
        (newValue: SelectFieldOption) => {
            setSelectedGenre(newValue);
        },
        [setSelectedGenre]
    );

    const removeGenreFromAlbum = useCallback(async (albumGenreId: string) => {
      try {
        await removeAlbumGenreTag(albumGenreId);
        toast.success('Genre was removed from album');
        setAlbumGenres(albumGenres!.filter(albumGenre => albumGenre.id !== albumGenreId));
      } catch (error: any) {
        if (error && error.status === 403) {
          toast.error("You're not logged in");
          dispatch(setUser(undefined));
          return;
        }
        toast.error('Unable to remove genre from album');
      }
    }, []);

    const addGenreToAlbum = useCallback(async () => {
        try {
            const response = await addAlbumGenreTag(currentAlbum.id, selectedGenre!.value);
            toast.success(`Album was tagged as "${selectedGenre?.label}"`);
            const albumGenre: AlbumGenre = { ...response.data };
            // @ts-ignore
            setAlbumGenres([...albumGenres, albumGenre]);
        } catch (error: any) {
            if (error && error.status === 403) {
                toast.error("You're not logged in");
                dispatch(setUser(undefined));
                return;
            }
            toast.error('Unable to tag album with genre');
        }
    }, [selectedGenre, addAlbumGenreTag, toast, setAlbumGenres, dispatch, setUser]);

    return (
        <GenresForm
            options={genreOptions}
            albumGenres={albumGenres}
            selectedGenre={selectedGenre}
            onAddGenreOption={createGenreFromNewOption}
            onAddGenreToAlbum={addGenreToAlbum}
            onRemoveGenreFromAlbum={removeGenreFromAlbum}
            onChangeSelectedGenre={onChangeSelectedGenre}
        />
    );
};

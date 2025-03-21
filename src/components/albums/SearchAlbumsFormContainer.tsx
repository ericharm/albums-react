import React, { useCallback, useContext } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { DispatchContext } from '../../Store';
import { SearchAlbumsRequest } from '../../service/models/albums';
import { setAlbums, setQuery } from '../../store/actions';
import { searchAlbums } from '../../service/AlbumsService';
import { SearchAlbumsForm } from './SearchAlbumsForm';

const validationSchema = yup.object({
    query: yup.string(),
});

export const SearchAlbumsFormContainer: React.FC<React.PropsWithChildren> = () => {
    const dispatch = useContext(DispatchContext);

    const submitSearchAlbumsForm = useCallback(
        async (request: SearchAlbumsRequest) => {
            const albumsResponse = await searchAlbums(1, request.query);
            dispatch(setQuery(request.query));
            dispatch(setAlbums(albumsResponse.data));
        },
        [dispatch]
    );

    const formik = useFormik({
        initialValues: {
            query: String(),
        },
        validationSchema: validationSchema,
        onSubmit: (request: SearchAlbumsRequest) => {
            submitSearchAlbumsForm(request);
        },
    });

    return <SearchAlbumsForm formik={formik} />;
};

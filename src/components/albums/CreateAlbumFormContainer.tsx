import React, { useCallback, useContext } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { DispatchContext } from '../../Store';
import { CreateAlbumRequest } from '../../service/models/albums';
import { setAlbums, setCreateAlbumModalOpen } from '../../store/Action';
import { createAlbum, getAlbums } from '../../service/AlbumsService';
import { CreateAlbumForm } from './CreateAlbumForm';
import { toast } from 'react-toastify';

const validationSchema = yup.object({
  title: yup.string().required('The title is required'),
});

export const CreateAlbumFormContainer: React.FC<React.PropsWithChildren> = () => {
  const dispatch = useContext(DispatchContext);

  const submitCreateAlbumForm = useCallback(
    async (request: CreateAlbumRequest) => {
      try {
        const albumRespone = await createAlbum(request);
        console.log(albumRespone);
        toast.success('Your album was added');
        dispatch(setCreateAlbumModalOpen(false));
        const albumsResponse = await getAlbums(1);
        dispatch(setAlbums(albumsResponse.data));
      } catch (error) {
        console.error(error);
        toast.error('Unable to create album');
      }
    },
    [dispatch]
  );

  const formik = useFormik({
    initialValues: {
      artist: String(),
      released: String(),
      title: String(),
      format: String(), // TODO use an enum
      label: String(),
      notes: String(),
    },
    validationSchema: validationSchema,
    onSubmit: (request: CreateAlbumRequest) => {
      submitCreateAlbumForm(request);
    },
  });

  return <CreateAlbumForm formik={formik} />;
};

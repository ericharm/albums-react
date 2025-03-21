import React, { useCallback, useContext } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { DispatchContext, StateContext } from '../../Store';
import { AlbumRequest } from '../../service/models/albums';
import {
  setAlbums,
  setAlbumFormModalOpen,
  setCurrentAlbum,
  setDeleteAlbumModalOpen,
  setUser,
} from '../../store/actions';
import { createAlbum, searchAlbums, updateAlbum } from '../../service/AlbumsService';
import { AlbumForm } from './AlbumForm';
import { toast } from 'react-toastify';

const validationSchema = yup.object({
  title: yup.string().required('The title is required'),
});

export const AlbumFormContainer: React.FC<React.PropsWithChildren> = () => {
  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);
  const { currentAlbum } = state;

  const submitButtonText = currentAlbum ? 'Update' : 'Create';
  const showDeleteButton = !!currentAlbum;
  const successText = currentAlbum ? 'Album updated successfully' : 'Your album was added';
  const failureText = currentAlbum ? 'Unable to update album' : 'Unable to create album';

  const openDeleteAlbumModal = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();
      dispatch(setAlbumFormModalOpen(false));
      dispatch(setDeleteAlbumModalOpen(true));
    },
    [dispatch, setDeleteAlbumModalOpen, setAlbumFormModalOpen]
  );

  const handleAlbumFormSuccess = useCallback(async () => {
    toast.success(successText);
    dispatch(setAlbumFormModalOpen(false));
    dispatch(setCurrentAlbum(undefined));
    const albumsResponse = await searchAlbums(1, undefined);
    dispatch(setAlbums(albumsResponse.data));
  }, [toast, dispatch, setAlbumFormModalOpen, setCurrentAlbum, setAlbums]);

  const handleAlbumFormFailure = useCallback(
    (error: any) => {
      if (error && error.status === 403) {
        toast.error("You're not logged in");
        dispatch(setDeleteAlbumModalOpen(false));
        dispatch(setUser(undefined));
        return;
      }
      toast.error(failureText);
    },
    [toast, dispatch, setDeleteAlbumModalOpen, setUser]
  );

  const submitAlbumForm = useCallback(
    async (request: AlbumRequest) => {
      try {
        if (currentAlbum) await updateAlbum(currentAlbum.id, request);
        else await createAlbum(request);
        handleAlbumFormSuccess();
      } catch (error: any) {
        handleAlbumFormFailure(error);
      }
    },
    [updateAlbum, createAlbum, currentAlbum, handleAlbumFormSuccess, handleAlbumFormFailure]
  );

  const formik = useFormik({
    initialValues: {
      artist: currentAlbum?.artist || String(),
      released: currentAlbum?.released || String(),
      title: currentAlbum?.title || String(),
      format: currentAlbum?.format || String(), // TODO use an enum
      label: currentAlbum?.label || String(),
      notes: currentAlbum?.notes || String(),
    },
    validationSchema: validationSchema,
    onSubmit: (request: AlbumRequest) => {
      submitAlbumForm(request);
    },
  });

  return (
    <AlbumForm
      formik={formik}
      currentAlbum={currentAlbum}
      showDeleteButton={showDeleteButton}
      submitButtonText={submitButtonText}
      onClickDeleteButton={openDeleteAlbumModal}
    />
  );
};

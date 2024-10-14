import React, { useCallback, useContext } from "react";
import { Modal } from "../ui/Modal";
import { CreateAlbumFormContainer } from "./CreateAlbumFormContainer";
import { DispatchContext } from "../../Store";
import { setCreateAlbumModalOpen } from "../../store/Action";


export const CreateAlbumModal: React.FC<React.PropsWithChildren> = () => {
  const dispatch = useContext(DispatchContext);

  const closeModal = useCallback(() => {
    dispatch(setCreateAlbumModalOpen(false));
  }, [dispatch]);

  return (
    <Modal onClose={closeModal}>
      <CreateAlbumFormContainer />
    </Modal>
  );
}


import styled from "styled-components";
import { Breakpoints, Spacing } from "../../Theme";
import { useContext, useEffect } from "react";
import { DispatchContext, StateContext } from "../../Store";
import { useNavigate } from "react-router-dom";
import { Header } from "../header/Header";
import { LoginModal } from "../login/LoginModal";
import { loadUser, loadTokenAge } from "../../service/LocalStorage";
import { setUser } from "../../store/Action";
import { CreateAlbumModal } from "../albums/CreateAlbumModal";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const PageContents = styled.div`
  margin: 0 auto;
  padding: ${Spacing.standard};
  max-width: ${Breakpoints.lg};
`;

export const Page: React.FC<React.PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const { isLoginModalOpen, isCreateAlbumModalOpen } = state;

  useEffect(() => {
    let currentUser = loadUser()
    const tokenAge = loadTokenAge()

    const now = new Date().getTime()
    const oneHourAgo = now - 3600

    if (tokenAge && tokenAge.getTime() < oneHourAgo) {
      currentUser = undefined
    }

    dispatch(setUser(currentUser))
  }, [loadUser]);

  return (
    <>
      <Header navigate={navigate} />
      {isLoginModalOpen && <LoginModal />}
      {isCreateAlbumModalOpen && <CreateAlbumModal />}
      <PageContents>
        {children}
      </PageContents>
      <ToastContainer autoClose={1500} pauseOnFocusLoss draggable pauseOnHover theme="light" />
    </>
  )
};

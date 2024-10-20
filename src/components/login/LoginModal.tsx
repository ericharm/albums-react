import { Modal } from '../ui/Modal';
import { LoginFormContainer } from '../login/LoginFormContainer';
import { useCallback, useContext } from 'react';
import { DispatchContext } from '../../Store';
import { setLoginModalOpen } from '../../store/Action';

export const LoginModal: React.FC = () => {
    const dispatch = useContext(DispatchContext);

    const onCloseModal = useCallback(() => {
        dispatch(setLoginModalOpen(false));
    }, []);

    return (
        <Modal onClose={onCloseModal}>
            <LoginFormContainer />
        </Modal>
    );
};

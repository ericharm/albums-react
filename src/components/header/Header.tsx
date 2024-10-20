import { useCallback, useContext } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { DispatchContext, StateContext } from '../../Store';
import { Breakpoints, Spacing, TextSpacing } from '../../Theme';
import { Link } from '../ui/Link';
import styled from 'styled-components';
import { CurrentUser } from './CurrentUser';
import { LoginLink } from './LoginLink';
import { setLoginModalOpen, setUser } from '../../store/Action';
import { albumsPath } from '../../Router';

const StyledBar = styled.div`
    padding: ${TextSpacing.medium};
`;

const StyledToolbar = styled.div`
    display: flex;
    width: 100%;
    max-width: ${Breakpoints.lg};
    margin: 0 auto;
    padding: 0 ${Spacing.standard};
`;

const Flex = styled.div`
    flex-grow: 1;
`;

const BoldLink = styled(Link)`
    font-weight: bold;
`;

export interface HeaderProps {
    navigate: NavigateFunction;
}

export const Header: React.FC<HeaderProps> = ({ navigate }) => {
    const dispatch = useContext(DispatchContext);
    const state = useContext(StateContext);
    const { user } = state;

    const logOut = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if (user) {
            dispatch(setUser(undefined));
        }
        navigate(albumsPath);
    };

    const openLoginModal = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        dispatch(setLoginModalOpen(true));
    }, []);

    return (
        <StyledBar>
            <StyledToolbar>
                <Flex>
                    <BoldLink href="/">Harman Street Records</BoldLink>
                </Flex>
                <>
                    {user?.id ? (
                        <CurrentUser user={user} onClickLogout={logOut} />
                    ) : (
                        <LoginLink onClickLogin={openLoginModal} />
                    )}
                </>
            </StyledToolbar>
        </StyledBar>
    );
};

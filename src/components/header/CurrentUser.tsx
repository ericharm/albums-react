import styled from 'styled-components';
import { FontWeight, Spacing } from '../../Theme';
import { User } from '../../models/User';
import { Link } from '../ui/Link';

const Wrapper = styled.div`
    display: flex;
    gap: ${Spacing.small};
    font-weight: ${FontWeight.bold};
`;

const LightLink = styled(Link)`
    font-weight: ${FontWeight.normal};
`;

export interface CurrentUserProps {
    user: User;
    onClickLogout: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const CurrentUser: React.FC<CurrentUserProps> = ({ user, onClickLogout }) => (
    <Wrapper>
        {user.email}
        <LightLink onClick={onClickLogout}>Log Out</LightLink>
    </Wrapper>
);

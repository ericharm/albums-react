import styled from 'styled-components';
import { Color } from '../../Theme';

export const Link = styled.a`
    color: ${Color.blue};
    text-decoration: none;

    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;

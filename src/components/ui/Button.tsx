import styled from 'styled-components';
import { Color, FontSize, TextSpacing } from '../../Theme';

export const Button = styled.button`
    background-color: ${Color.white};
    color: ${Color.blue};
    border-radius: ${TextSpacing.small};
    border: 1px solid ${Color.blue};
    cursor: pointer;
    font-size: ${FontSize.small};
    padding: ${TextSpacing.medium} ${TextSpacing.large};
    text-align: center;
    font-family: monospace;

    &:hover {
        background-color: ${Color.blue};
        color: ${Color.white};
    }
`;

export const DeleteButton = styled(Button)`
    background-color: ${Color.white};
    color: ${Color.pink};
    border: 1px solid ${Color.pink};

    &:hover {
        background-color: ${Color.pink};
    }
`;

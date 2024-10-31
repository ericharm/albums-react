import React from 'react';
import styled from 'styled-components';
import { BorderRadius, Color, FontSize, FontWeight, TextSpacing } from '../../Theme';
import { PillProps } from './models';

const PillWrapper = styled.div<{ $includeX?: boolean }>`
    display: inline-block;
    background: ${Color.blue};
    color: ${Color.white};
    padding: ${TextSpacing.small} ${FontSize.small};
    ${props => (props.$includeX ? `padding-right: ${TextSpacing.medium};` : '')}
    border-radius: ${BorderRadius.heavy};

    & + & {
      margin-left: ${TextSpacing.small};
    }
`;

const PillX = styled.div`
    display: inline-flex;
    border-radius: ${BorderRadius.circular};
    font-weight: ${FontWeight.bold};
    width: ${FontSize.medium};
    height: ${FontSize.medium};
    justify-content: center;
    margin-left: ${TextSpacing.small};

    &:hover {
        cursor: pointer;
        color: ${Color.blue};
        background: ${Color.white};
        opacity: 50%;
    }
`;

export const Pill: React.FC<PillProps> = ({ text, onClickX }) => (
    <PillWrapper $includeX={!!onClickX}>
        {text}
        {onClickX && <PillX onClick={onClickX}>x</PillX>}
    </PillWrapper>
);

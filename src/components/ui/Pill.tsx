import React from 'react';
import styled from 'styled-components';
import { BorderRadius, Color, FontSize, FontWeight, TextSpacing } from '../../Theme';
import { PillProps } from './models';

const PillWrapper = styled.div`
    display: inline-block;
    background: ${Color.blue};
    color: ${Color.white};
    padding: ${TextSpacing.small};
    padding-left: ${FontSize.small};
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

    &:hover {
        cursor: pointer;
        color: ${Color.blue};
        background: ${Color.white};
        opacity: 50%;
    }
`;

export const Pill: React.FC<PillProps> = ({ text, onClickX }) => (
    <PillWrapper>
        {text}
        {onClickX && <PillX onClick={onClickX}>x</PillX>}
    </PillWrapper>
);

import styled from "styled-components";
import { Color, FontSize, TextSpacing } from "../../Theme";

export const Button = styled.button`
  background-color: ${Color.white};
  color: ${Color.purple};
  border-radius: ${TextSpacing.small};
  border: 1px solid ${Color.purple};
  cursor: pointer;
  font-size: ${FontSize.small};
  padding: ${TextSpacing.medium} ${TextSpacing.large};
  text-align: center;
  font-family: monospace;

  &:hover {
    background-color: ${Color.purple};
    color: ${Color.white};
  }
`;


export const DeleteButton = styled(Button)`
    background-color: ${Color.white};
    color: ${Color.crimson};
    border: 1px solid ${Color.crimson};

    &:hover {
        background-color: ${Color.crimson};
    }
`;

import styled from 'styled-components';
import { ModalProps } from '../../models/props';
import { Color, FontSize, Spacing, TextSpacing } from '../../Theme';

const ModalCurtain = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border-radius: 5px;
`;

const CloseButton = styled.div`
    &:before {
        content: 'X';
        text-align: center;
        position: absolute;
        top: ${TextSpacing.medium};
        right: ${Spacing.small};
        font-size: ${FontSize.medium};
        border-radius: 50%;
        border: 1px solid ${Color.purple};
        width: 1em;
        height: 1em;
        line-height: 1em;
    }
    &:hover:before {
      cursor: pointer;
      color: ${Color.white};
      background: ${Color.purple};
    }
`;

export const Modal: React.FC<ModalProps> = ({ onClose, children }) => (
  <ModalCurtain>
    <ModalContent>
      <CloseButton onClick={onClose} />
      {children}
    </ModalContent>
  </ModalCurtain>
);

import React from 'react';
import { ModalBlock, ModalBody, ModalContainer, ModalOverlay } from './style';

const Modal = ({ children, active, hideModal }) => {
    return (
        <>
            {active && (
                <ModalBlock>
                    <ModalOverlay onClick={() => hideModal()}></ModalOverlay>
                    <ModalContainer>
                        <ModalBody>{children}</ModalBody>
                    </ModalContainer>
                </ModalBlock>
            )}
        </>
    );
};

export default Modal;

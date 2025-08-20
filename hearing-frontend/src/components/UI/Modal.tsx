'use client'
import React from 'react';
import {useModal} from "@/providers/ModalProvider";
import styled from "styled-components";
import {whiteColor} from "@/styles/colors";
import SubmitButton from "@/components/UI/SubmitButton";

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
`
const ModalContent = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    background-color: ${whiteColor};
    border-radius: 25px;
    padding: 44px 36px;
    z-index: 100;
`



const Modal = () => {
    const {isOpen, closeModal, modalContent} = useModal();

    if(!isOpen) return null;

    return (
        <ModalOverlay>
            <ModalContent>
                {modalContent}
                <SubmitButton width={200} height={45} label={'Закрыть'} onClick={closeModal} marginTop={24} primary />
            </ModalContent>
        </ModalOverlay>
    );
};

export default Modal;
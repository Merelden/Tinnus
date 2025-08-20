import React from 'react';
import styled from "styled-components";
import {lightGrayColor, primaryColor} from "@/styles/colors";

interface IProps {
    isReception: boolean;
    setIsReception: (isReception: boolean) => void;
    type?: string
}
const CheckBoxLabel = styled.label`
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 16px;
    font-family: var(--font-manrope);
    color: #333;
`;

const StyledCheckbox = styled.input`
    display: none; 

    &:checked + span {
        background-color: ${primaryColor}; 
        border-color: ${primaryColor};
    }

    &:checked + span svg {
        opacity: 1;  
    }
`;

const CheckboxWrapper = styled.span`
    width: 28px;
    height: 28px;
    border: 2px solid ${lightGrayColor};
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;  

    svg {
        opacity: 0;  
        transition: opacity 0.3s ease; 
    }
    @media (max-width: 500px) {
        width: 22px;
        height: 22px;
    }
    @media (max-width: 350px) {
        width: 18px;
        height: 18px;
    }
`;

const Reception = ({ isReception, setIsReception, type }: IProps) => {

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsReception(event.target.checked);
    };

    return (
        <CheckBoxLabel>
            <StyledCheckbox
                type={type ? type : 'checkbox'}
                checked={isReception}
                onChange={handleCheckboxChange}
            />
            <CheckboxWrapper>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.83325 13.9032L11.3446 19.25L22.1666 8.75" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </CheckboxWrapper>
        </CheckBoxLabel>
    );
};

export default Reception;

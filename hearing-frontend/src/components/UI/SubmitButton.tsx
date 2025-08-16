import React from 'react';
import styled from "styled-components";
import {blackColor, lightGrayColor, primaryColor, textColor, whiteColor} from "@/styles/colors";

interface IProps {
    label: string;
    width?: number;
    height?: number;
    disabled?: boolean;
    onClick?: () => void;
    primary?: boolean;
}

const StyledButton = styled.button<{$width: number, $height: number, $primary: boolean}>`
    width: ${({ $width }) => $width ? `${$width}px` : "100%"};
    height: ${({ $height }) => $height ? $height : 50}px;
    background-color: ${({ $primary }) => $primary ? primaryColor : lightGrayColor};
    border-radius: 6px;
    transition: background-color .4s ease, color .4s ease;
    
    font-family: var(--font-manrope), serif;
    font-weight: 500;
    font-size: 22px;
    color: ${({ $primary }) => $primary ? whiteColor : blackColor};
    
    &:disabled {
        background-color: ${lightGrayColor};
        color: ${blackColor};
    }
`

const SubmitButton = ({label, width=200, height=50, onClick, disabled, primary=false}: IProps) => {
    return (
        <StyledButton onClick={onClick} $width={width} $height={height} $primary={primary} disabled={disabled}>
            {label}
        </StyledButton>
    );
};

export default SubmitButton;
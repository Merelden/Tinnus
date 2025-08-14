import React from 'react';
import styled from "styled-components";
import {blackColor, lightGrayColor, primaryColor, whiteColor} from "@/styles/colors";

interface IProps {
    label: string;
    width?: number;
    height?: number;
    disabled?: boolean;
    onClick?: () => void;
}

const StyledButton = styled.button<{$width: number, $height: number}>`
    width: ${({ $width }) => $width ? `${$width}px` : "100%"};
    height: ${({ $height }) => $height ? $height : 50}px;
    background-color: ${primaryColor};
    border-radius: 6px;
    transition: background-color .4s ease, color .4s ease;
    
    font-family: var(--font-manrope), serif;
    font-size: 24px;
    color: ${whiteColor};
    
    &:disabled {
        background-color: ${lightGrayColor};
        color: ${blackColor};
    }
`

const SubmitButton = ({label, width=200, height=50, onClick, disabled}: IProps) => {
    return (
        <StyledButton onClick={onClick} $width={width} $height={height} disabled={disabled}>
            {label}
        </StyledButton>
    );
};

export default SubmitButton;
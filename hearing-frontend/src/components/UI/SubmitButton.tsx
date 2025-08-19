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
    hidden?: boolean
    marginTop?: number
}

const StyledButton = styled.button<{$width: number, $height: number, $primary: boolean, $hidden: boolean, $marginTop: number}>`
    width: ${({ $width }) => $width ? `${$width}px` : "100%"};
    height: ${({ $height, $hidden }) => $hidden ? '0px' : ($height ? `${$height}px` : '50px')};
    background-color: ${({ $primary }) => $primary ? primaryColor : lightGrayColor};
    border-radius: 6px;
    transition: background-color .4s ease, color .4s ease, height .3s ease;
    margin-top: ${({$marginTop})=> $marginTop ? $marginTop : 0}px;
    
    font-family: var(--font-manrope), serif;
    font-weight: 500;
    font-size: 22px;
    color: ${({ $primary }) => $primary ? whiteColor : blackColor};
    opacity: ${({ $hidden }) => $hidden ? 0 : 1};
    
    &:disabled {
        background-color: ${lightGrayColor};
        color: ${blackColor};
        cursor: auto;
    }
`

const SubmitButton = ({label, width=200, height=50, onClick, disabled, primary=false, hidden=false, marginTop=0}: IProps) => {
    return (
        <StyledButton
            onClick={onClick}
            $width={width}
            $height={height}
            $primary={primary}
            disabled={disabled}
            $hidden={hidden}
            $marginTop={marginTop}
        >
            {label}
        </StyledButton>
    );
};

export default SubmitButton;
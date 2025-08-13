import styled from "styled-components";
import {primaryColor} from "@/styles/colors";

//Общее
export const ContainerHome = styled.section`
    
`
export const ButtonHome = styled.a<{$primary?: boolean}>`
    height: 48px;
    width: 180px;
    border-radius: 8px;
    background: ${({$primary}) => $primary ? primaryColor : "#fff"};
`

// Начальная секция
export const InitialSection = styled.section`
    background-image: url("/backgrounds/mainHeader.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 928px;
`
export const InitialContent = styled.div`
    
`
export const Header = styled.header`
    
`
export const ButtonContainer = styled.div`
    display: flex;
`
export const InitialText = styled.div`
    
`

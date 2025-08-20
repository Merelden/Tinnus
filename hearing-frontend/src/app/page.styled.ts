import styled from "styled-components";
import Link from "next/link";
import {primaryColor, whiteColor, blackColor} from "@/styles/colors";


//Общее
export const ContainerHome = styled.section`
    max-width: 1520px;
    margin: 0 auto;
    width: 90%;
    
    @media (max-width: 1519px) {
        width: 95%;
        max-width: 100%;
    }
    
    @media (max-width: 1200px) {
        width: 90%;
    }
    
    @media (max-width: 768px) {
        width: 100%;
        padding: 0 20px;
    }
`
export const ButtonHome = styled(Link)<{$primary?: boolean, $width: number}>`
    height: 48px;
    text-wrap: nowrap;
    width: ${({ $width }) => $width}px;
    border-radius: 8px;
    background: ${({$primary}) => $primary ? primaryColor : "transparent"};
    color: ${({$primary}) => $primary ? whiteColor : primaryColor};
    border: 1px solid ${primaryColor};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: clamp(14px, 1.5vw, 20px);
    font-family: var(--font-montserrat);
    font-weight: 500;
    transition: background-color .4s, color .4s;
    &:hover {
        background: ${({$primary}) => $primary ? "transparent" : primaryColor};
        color: ${({$primary}) => $primary ? primaryColor : whiteColor};
    }
    
    @media (max-width: 1200px) {
        height: 44px;
        width: ${({ $width }) => $width - 20}px;
    }
    @media (max-width: 1000px) {
        height: 36px;
        width: ${({ $width }) => $width - 40}px;
    }
    @media (max-width: 768px) {
        font-size: 16px;
        height: 40px;
    }
`
export const TitleHome = styled.h2`
    color: ${primaryColor};
    font-size: clamp(28px, 4vw, 55px);
    font-family: var(--font-montserrat);
    font-weight: 700;
    line-height: 1;
    
    @media (max-width: 768px) {
        text-align: center;
        font-size: clamp(20px, 6vw, 42px);
    }
    @media (max-width: 420px) {
        font-size: clamp(20px, 8vw, 42px);
    }
`
export const DescriptionHome = styled.p`
    font-family: var(--font-manrope), serif;
    font-size: clamp(16px, 1.5vw, 22px);
    color: ${blackColor};
    width: 90%;
    
    @media (max-width: 768px) {
        text-align: center;
        font-size: clamp(14px, 1vw, 20px);
    }
    
`

// Начальная секция
export const InitialSection = styled.section`
    background-image: url("/backgrounds/mainHeader.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 928px;

    @media (max-width: 1400px) {
        height: 800px;
    }
    
    @media (max-width: 1200px) {
        height: 700px;
    }
    
    @media (max-width: 768px) {
        height: 600px;
    }
    @media (max-width: 500px) {
        height: 500px;
    }
    
`
export const InitialContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 100px;
    
    @media (max-width: 1400px) {
        margin-top: 80px;
        gap: 30px;
    }
    
    @media (max-width: 1200px) {
        margin-top: 80px;
        gap: 40px;
    }
    
    @media (max-width: 768px) {
        flex-direction: column;
        margin-top: 60px;
        gap: 30px;
        text-align: center;
    }
`
export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 12px;
    
    @media (max-width: 768px) {
        padding-top: 20px;
    }
    @media (max-width: 600px) {
        .logo{
            content: url("/icons/logo.svg");
            width: 64px;
            height: 64px;
        }
    }
`
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 24px;

    @media (max-width: 1000px) {
        gap: 16px;
    }
    @media (max-width: 768px) {
        gap: 16px;
        justify-content: center;
    }
    @media (max-width: 450px) {
        &:nth-child(2){
            & > a:first-of-type {
                display: none;
            }
        }
        &:nth-child(3){
            & > a:nth-last-child(1) {
                display: none;
            }
        }
    }
    
`
export const InitialText = styled.div`
    width: max-content;
    h1{
        font-family: var(--font-montserrat);
        font-weight: 800;
        font-size: clamp(42px, 6vw, 90px);
        line-height: 0.9; 
        color: #000;
        width: max-content;
        
        @media (max-width: 768px) {
            width: 100%;
            text-align: center;
            font-size: clamp(24px, 8vw, 64px);
            line-height: 1;
        }
        
    }
    p{
        margin: 80px 0 40px;
        max-width: 640px;

        @media (max-width: 1400px) {
            margin: 60px 0 30px;
            max-width: 580px;
        }
        
        @media (max-width: 1200px) {
            margin: 40px 0 20px;
            max-width: 540px;
        }
        
        @media (max-width: 768px) {
            margin: 40px 0 20px;
            max-width: 100%;
            width: 100%;
        }
    }
    
    @media (max-width: 768px) {
        width: 100%;
    }
`
export const InitialImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 605px;
    height: 557px;

    @media (max-width: 1400px) {
        width: 550px;
        height: 500px;
    }
    
    @media (max-width: 1200px) {
        width: 500px;
        height: 460px;
    }
    
    @media (max-width: 768px) {
        display: none;
    }
`

// Участие важно
export const ImportanceSection = styled.section`
    margin-top: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .description{
        text-align: center;
        margin: 44px 0 80px;
        
        @media (max-width: 768px) {
            margin: 30px 0 50px;
        }
        @media (max-width: 1100px) {
            margin: 10px 0 40px;
        }
    }
    
    @media (max-width: 768px) {
        margin-top: 80px;
    }
    @media (max-width: 468px) {
        a{
            width: 300px;
        }
    }
`
export const ImportanceCards = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: clamp(40px, 5vw, 64px);
    
    @media (max-width: 1400px) {
        gap: 30px;
        flex-wrap: wrap;
        justify-content: center;
    }
    
    @media (max-width: 1200px) {
        gap: 30px;
        flex-wrap: wrap;
        justify-content: center;
    }
    
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 24px;
    }
`

// Как работает
export const HowItWorksSection = styled.section`
    margin-top: 190px;
    
    @media (max-width: 768px) {
        margin-top: 120px;
    }
`
export const HowItWorksHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin-bottom: 80px;
    h2{
        width: max-content;
        
        
        @media (max-width: 768px) {
            width: 100%;
            margin-bottom: 30px;
        }
    }
    p{
        max-width: 543px;
        width: 100%;
        @media (max-width: 1200px) {
            width: 40%;
        }
        @media (max-width: 768px) {
            width: 100%;
        }
    }
    
    @media (max-width: 768px) {
        flex-direction: column;
        margin-bottom: 50px;
        text-align: center;
        align-items: center;
    }
`
export const HowItWorksCards = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    @media (max-width: 1400px) {
        gap: 30px;
        flex-wrap: wrap;
        justify-content: center;
    }
    @media (max-width: 1200px) {
        gap: 40px;
        flex-wrap: wrap;
        justify-content: center;
    }
    
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 30px;
    }
`

// Футер
export const Footer = styled.footer`
    margin-top: 190px;
    background-image: url("/backgrounds/mainHeader.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 458px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    h2{
        color: #000;
        width: 558px;
        text-align: center;
        line-height: 1;
        
        @media (max-width: 768px) {
            width: 100%;
        }
    }
    p{
        text-align: center;
        width: 560px;
        margin: 28px 0 36px;
        
        @media (max-width: 768px) {
            width: 80%;
            margin: 20px 0 24px;
        }
    }
    
    @media (max-width: 768px) {
        margin-top: 120px;
        height: 350px;
        padding: 0 20px;
    }
    
    @media (max-width: 480px) {
        height: 300px;
    }
`

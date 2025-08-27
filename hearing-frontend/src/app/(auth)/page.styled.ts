import styled from "styled-components";
import {primaryColor, redColor, whiteColor} from "@/styles/colors";

export const BackgroundPage = styled.section`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 24px;
    z-index: 10;
    .content {
        animation: fadeInUp 400ms ease-out both;
    }

    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(16px) scale(0.9); }
        to { opacity: 1; transform: translateY(0) scale(1); }
    }
    @media (max-width: 500px) {
        padding: 0;
    }}
`

export const AuthForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 14px;
    margin: 24px 0 12px;
    z-index: 20;
    width: 100%;
    button{
        margin-top: 14px;
        background-color: ${primaryColor};
        font-size: 24px;
        font-family: var(--font-manrope), serif;
        color: ${whiteColor};
        height: 50px;
        border-radius: 6px;
        width: 100%;
    }
    @media (max-width: 500px) {
        margin: 12px 0;
        button{
            height: 45px;
            font-size: 20px;
            margin-top: 14px;
        }
    }

`
export const ContentBlock = styled.div`
    position: relative;
`
export const OtherErrors = styled.div<{$message: string | undefined}>`
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: ${({$message})=> $message ? "114%" : "100%"};
    opacity: ${({$message})=> $message ? 1 : 0};
    background-color: ${redColor};
    border-radius: 25px;
    z-index: 1;
    transition: .4s;
    
    display: flex;
    justify-content: center;
    align-items: end;
    padding: 4.5%;

    font-family: var(--font-manrope), serif;
    font-weight: 500;
    font-size: 24px;
    color: ${whiteColor};
    @media (max-width: 500px) {
        font-size: 20px;
        height: ${({$message})=> $message ? "112%" : "100%"};
        padding: 3.2%;
    }
    @media (max-width: 400px) {
        padding: 3.2%;
    }
    @media (max-width: 320px) {
        padding: 4%;
    }
`

export const ForgotPassword = styled.a`
    display: flex;
    justify-content: end;
    align-items: center;
    width: 100%;
    font-family: var(--font-manrope), serif;
    color: ${primaryColor};
`
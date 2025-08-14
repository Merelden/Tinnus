import styled from "styled-components";
import {primaryColor, whiteColor} from "@/styles/colors";

export const BackgroundPage = styled.section`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 24px;

    .content {
        animation: fadeInUp 400ms ease-out both;
    }

    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(16px); }
        to { opacity: 1; transform: translateY(0); }
    }
`

export const AuthForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 14px;
    margin: 24px 0;
    button{
        margin-top: 28px;
        background-color: ${primaryColor};
        font-size: 24px;
        font-family: var(--font-manrope), serif;
        color: ${whiteColor};
        height: 50px;
        border-radius: 6px;
        width: 100%;
    }
`
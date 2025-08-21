import styled from "styled-components";
import {lightGrayColor, blackColor} from "@/styles/colors";

export const TextareaComplete = styled.textarea`
    background: ${lightGrayColor};
    padding: 12px 10px;
    border-radius: 10px;

    resize: none;
    height: 110px;
    width: 600px;
    margin-top: 8px;

    font-size: 18px;
    font-family: var(--font-manrope), serif;
    color: ${blackColor};
    @media (max-width: 700px) {
        width: 90%;
        font-size: 16px;
        padding: 10px 8px;
    }
`
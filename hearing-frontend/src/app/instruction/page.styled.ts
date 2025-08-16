import styled from "styled-components";
import {blackColor, lightGrayColor, primaryColor, whiteColor} from "@/styles/colors";

export const TitleInstruction = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 16px;
    p{
        width: 800px;
    }
`
export const CardsInstruction = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    margin: 50px 0;
`

export const CardInstruction = styled.div`
    background-color: ${lightGrayColor};
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: start;
    padding: 20px;
    gap: 8px;
    h4{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 32px;
        height: 32px;
        background-color: ${primaryColor};
        color: ${whiteColor};
        border-radius: 8px;
        font-size: 20px ;
        font-family: var(--font-montserrat), serif;
        font-weight: 700;
    }
    div{
        display: flex;
        justify-content: start;
        align-items: start;
        flex-direction: column;
        gap: 8px;
        h3{
            font-family: var(--font-montserrat), serif;
            font-weight: 700;
            color: ${blackColor};
            font-size: 22px;
            margin-top: 3px;
        }
        p{
            font-family: var(--font-manrope), serif;
            color: ${blackColor};
            text-align: start;
            max-width: 270px;
        }
    }
`
export const NoteInstruction = styled.p`
    margin-top: 20px;
`
import styled from "styled-components";
import {blackColor, lightGrayColor, primaryColor, whiteColor} from "@/styles/colors";

export const WrapperInstruction = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (max-width: 420px) {
        .submit-btn{
            font-size: 18px;
            height: 45px;
            width: 250px;
        }
    }
`

export const TitleInstruction = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 16px;
    h2{
        text-wrap: wrap;
    }
    p{
        width: 800px;
    }
    @media (max-width: 740px) {
        p{
            font-size: 16px !important;
            width: 100%;
        }
    }
`
export const CardsInstruction = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    margin: 50px 0;
    @media (max-width: 1150px) {
        gap: 14px;
    }
    @media (max-width: 850px) {
        flex-wrap: wrap;
    }
    @media (max-width: 740px) {
        margin: 24px 0;
    }
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
        min-width: 32px;
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
    @media (max-width: 1200px) {
        h4{
            font-size: 18px;
            min-width: 28px;
            height: 28px;
        }
        div{
            h3{
                font-size: 20px;
            }
            p{
                font-size: 16px;
            }
        }
    }
    @media (max-width: 740px) {
        width: 100%;
        div{
            width: 100%;
            p{
                max-width: 100%;
            }
        }
    }
    @media (max-width: 450px) {
        h4{
            font-size: 16px;
            min-width: 24px;
            height: 24px;
        }
        div{
            gap: 6px;
            h3{
                font-size: 18px;
            }
            p{
                font-size: 14px;
            }
        }
    }
`
export const NoteInstruction = styled.p`
    margin-top: 20px;
    @media (max-width: 740px) {
        font-size: 16px !important;
        width: 100%;
    }
`


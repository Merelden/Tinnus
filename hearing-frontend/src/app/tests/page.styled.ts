import styled from "styled-components";
import {blackColor, lightGrayColor, primaryColor, textColor, whiteColor} from "@/styles/colors";

export const TestSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 32px;
    width: 600px;
    @media (max-width: 700px) {
        max-width: 500px;
        h2{
            font-size: 30px;
        }
    }
    @media (max-width: 550px) {
        max-width: 470px;
        h2{
            font-size: 26px;
        }
    }
    @media (max-width: 500px) {
        max-width: 100%;
        h2{
            font-size: 24px;
        }
    }
`
export const TitleTest = styled.div`
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    h2{
        text-align: start;
        text-wrap: wrap;
    }
`
export const FormTest = styled.form`
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    width: 100%;
    gap: 16px;
    @media (max-width: 700px) {
        gap: 14px;
    }
`
export const QuestionBlock = styled.label`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 12px;
    p{
        text-align: start;
        font-size: 20px;
        font-weight: 400;
        color: ${blackColor};
    }
    @media (max-width: 700px) {
        p{
            font-size: 18px;
        }
    }
    @media (max-width: 500px) {
        p{
            font-size: 16px;
        }
    }
`
export const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    @media (max-width: 700px) {
        button{
            font-size: 22px;
            height: 47px;
        }
        button:nth-last-child(1){
            width: 170px;
        }
        button:nth-last-child(2){
            width: 150px;
        }
    }
`
export const ButtonTest = styled.button<{$primary?: boolean}>`
    border-radius: 6px;
    background: ${({$primary}) => $primary ? primaryColor : lightGrayColor};
    font-size: 24px;
    font-weight: 700;
    font-family: var(--font-manrope), serif;
    color: ${({$primary})=> $primary ? whiteColor : blackColor};
    width:  ${({$primary}) => $primary ? '200px' : '150px'};
    height: 56px;
    transition: background .4s ease, color .4s ease;
    
    &:disabled{
        background: ${lightGrayColor};
        color: ${blackColor};
        cursor: auto;
    }
`

export const TextAreaStyled = styled.textarea`
    background: ${lightGrayColor};
    padding: 12px 10px;
    border-radius: 10px;
    
    resize: none;
    height: 110px;
    width: 100%;
    margin-top: 8px;

    font-size: 18px;
    font-family: var(--font-manrope), serif;
    color: ${blackColor};
    @media (max-width: 700px) {
        font-size: 16px;
        padding: 10px 8px;
        height: 90px;
    }
`
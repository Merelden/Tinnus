import styled from "styled-components";
import {blackColor, lightGrayColor, primaryColor, textColor, whiteColor} from "@/styles/colors";

export const TestSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 32px;
    width: 600px;
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
    }
`
export const FormTest = styled.form`
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    width: 100%;
    gap: 16px;
`
export const QuestionBlock = styled.label`
    display: flex;
    justify-content: start;
    align-items: start;
    gap: 12px;
    p{
        text-align: start;
        font-size: 20px;
        font-weight: 400;
        color: ${blackColor};
    }
`
export const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
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
`
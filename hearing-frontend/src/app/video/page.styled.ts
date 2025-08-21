import styled from 'styled-components'
import {blackColor, GrayColor, lightGrayColor, primaryColor, textColor, whiteColor} from "@/styles/colors";

export const WrapperWindowVide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (max-width: 750px) {
        .submit-btn{
            font-size: 18px;
            width: 240px;
        }
    }
`

export const TitleInstruction = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    p{
        width: 920px;
        margin-bottom: 32px;
    }
    @media (max-width: 1000px) {
        p{
            width: 100%;
            font-size: 16px;
        }
    }
    @media (max-width: 600px) {
        h2{
           text-wrap: auto;
        }
        p{
            font-size: 14px;
        }
    }
    @media (max-width: 400px) {
        h2{
            font-size: 18px;
        }
        p{
            font-size: 10px;
        }
    }
`
export const VideoWrapper = styled.div`
    width: 940px;
    height: 490px;
    border-radius: 24px;
    overflow: hidden;
    video{
        width: 100%;
    }
    @media (max-width: 1000px) {
        width: 100%;
        height: 450px;
    }
    @media (max-width: 800px) {
        height: 380px;
    }
    @media (max-width: 600px) {
        height: 240px;
    }
    @media (max-width: 400px) {
        height: 180px;
    }
`
export const VideoError = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    border-radius: 24px;
    color: #666;
`
export const VideoControls = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin-top: 16px;
    width: 100%;
    @media (max-width: 550px) {
        flex-wrap: wrap;
        justify-content: flex-start;
    }
    @media (max-width: 450px) {
        flex-wrap: wrap;
    }
`
export const VideoButton = styled.button<{$primary?: boolean}>`
    background-color: ${({$primary}) => $primary ? primaryColor : lightGrayColor};
    color: ${({$primary}) => $primary ? whiteColor : blackColor};
    min-width: ${({$primary}) => $primary ? '101px' : '86px'};
    height: 43px;
    font-size: 20px;
    border-radius: 8px;
    font-family: var(--font-manrope), serif;
    font-weight: 500;
    @media (max-width: 750px) {
        font-size: 18px;
        height: 40px;
        min-width: ${({$primary}) => $primary ? '80px' : '64px'};
    }
    @media (max-width: 600px) {
        font-size: 16px;
        height: 36px;
        min-width: ${({$primary}) => $primary ? '70px' : '54px'};
    }
    @media (max-width: 550px) {
        flex: 0 0 auto;
        order: 2;
    }
`
export const VideoRange = styled.input`
    border-radius: 8px;
    -webkit-appearance: none;
    width: 100%;
    height: 12px;
    background-color: ${GrayColor};
    margin: 0 20px;
    cursor: pointer;

    /* === Chrome / Safari / Edge === */
    &::-webkit-slider-runnable-track {
        height: 12px;
        border-radius: 8px;
        background: linear-gradient(
            to right,
            ${primaryColor} 0%,
            ${primaryColor} var(--value, 0%),
            ${GrayColor} var(--value, 0%),
            ${GrayColor} 100%
        );
    }
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: ${whiteColor};
        border: 5px solid ${primaryColor};
        cursor: pointer;
        margin-top: -2px;
        position: relative;
        z-index: 2;
        transition: transform 0.1s ease;
    }
    
    &::-webkit-slider-thumb:hover {
        transform: scale(1.1);
    }

    /* === Firefox === */
    &::-moz-range-track {
        height: 12px;
        border-radius: 8px;
        background: ${GrayColor};
    }
    &::-moz-range-progress {
        background-color: ${primaryColor};
        height: 100%;
        border-radius: 8px;
    }
    &::-moz-range-thumb {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: ${whiteColor};
        border: 5px solid ${primaryColor};
        cursor: pointer;
        transition: transform 0.1s ease;
    }
    
    &::-moz-range-thumb:hover {
        transform: scale(1.1);
    }
    
    /* Focus styles */
    &:focus {
        outline: none;
    }
    
    &:focus::-webkit-slider-thumb {
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.3);
    }
    
    &:focus::-moz-range-thumb {
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.3);
    }
    
    /* Disabled state */
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
    
    &:disabled::-webkit-slider-thumb {
        cursor: not-allowed;
    }
    
    &:disabled::-moz-range-thumb {
        cursor: not-allowed;
    }
    @media (max-width: 600px) {
        height: 6px;
    }
    @media (max-width: 550px) {
        flex: 1 1 100%;
        order: 5;
        margin: 10px 0;
    }
`

export const VideTime = styled.p`
    font-size: 18px;
    color: ${textColor};
    font-family: var(--font-manrope), serif;
    font-weight: 700;
    @media (max-width: 750px) {
        font-size: 16px !important;
    }
    @media (max-width: 600px) {
        display: none;
    }
    @media (max-width: 550px) {
        display: block;
        order: 2;
        flex: 1 1 auto;
    }
`
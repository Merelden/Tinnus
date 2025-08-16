import styled from 'styled-components'
import {blackColor, GrayColor, lightGrayColor, primaryColor, textColor, whiteColor} from "@/styles/colors";

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
`
export const VideoWrapper = styled.div`
    width: 940px;
    height: 490px;
    border-radius: 24px;
    overflow: hidden;
`
export const VideoControls = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin: 16px 0 32px;
    width: 100%;
`
export const VideoButton = styled.button<{$primary?: boolean}>`
    background-color: ${({$primary}) => $primary ? primaryColor : lightGrayColor};
    color: ${({$primary}) => $primary ? whiteColor : blackColor};
    min-width: ${({$primary}) => $primary ? '86px' : '101px'};
    height: 43px;
    font-size: 20px;
    border-radius: 8px;
    font-family: var(--font-manrope), serif;
    font-weight: 500;
`
export const VideoRange = styled.input`
    border-radius: 8px;
    -webkit-appearance: none;
    width: 100%;
    height: 12px;
    background-color: ${GrayColor};
    margin: 0 20px;

    &::-webkit-slider-thumb{
        -webkit-appearance: none;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: ${whiteColor};
        border: 5px solid ${primaryColor};
        cursor: pointer;
    }
    &::-moz-range-thumb{
        -webkit-appearance: none;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: ${whiteColor};
        border: 5px solid ${primaryColor};
        cursor: pointer;
    }
    &::-webkit-slider-runnable-track{
        background-color: ${primaryColor};
    }
    &::-moz-range-progress{
        background-color: ${primaryColor};
        height: 100%;
        border-radius: 8px;
    }
    
`
export const VideTime = styled.p`
    font-size: 18px;
    color: ${textColor};
    font-family: var(--font-manrope), serif;
    font-weight: 700;
`
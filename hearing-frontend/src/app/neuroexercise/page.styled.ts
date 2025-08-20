import styled from 'styled-components'
import {blackColor, GrayColor, lightGrayColor, primaryColor, textColor, whiteColor} from "@/styles/colors";
import NeuroexercisePage from "@/app/neuroexercise/page";

export const TitleNeuroexercise = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    width: 100%;
    margin-bottom: 32px;
    p{
        width: 744px;
        margin-top: 8px;
        text-align: start !important;
    }
    div{
        display: flex;
        justify-content: space-between;
        align-items: start;
        flex-direction: column;
    }
    &:nth-last-child(1){
        margin-top: 20px;
        margin-bottom: 0;
    }
`
export const InfoWindow = styled.p<{$primary?: boolean}>`
    width: 160px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({$primary}) => $primary ? primaryColor : textColor} !important;
    border: ${({$primary}) => $primary ? '2px solid rgba(21, 122, 254, .4)' : '2px solid rgb(239, 239, 239)'};
    background-color: ${({$primary}) => $primary ? 'rgba(21, 122, 254, .1)' : 'rgba(239, 239, 239, .4)'};
    border-radius: 32px;
    font-size: 20px;
    font-family: var(--font-manrope), serif;
    font-weight: 500;
    padding: 5px 24px;
    white-space: nowrap;
`
export const VideoWrapper = styled.div`
    width: 940px;
    height: 490px;
    border-radius: 24px;
    overflow: hidden;
`

import styled from "styled-components";
import {primaryColor} from "@/styles/colors";

export const ReceptionCondition = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    
    button{
        color: ${primaryColor};
        position: relative;
        &::before{
            content: '';
            background-color: ${primaryColor};
            position: absolute;
            bottom: 1px;
            left: 0;
            width: 100%;
            height: 1px;
        }
    }
`
export const StartSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 24px;
`
export const RoundIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(21, 122, 254, .4);
    width: 124px;
    height: 124px;
    border-radius: 50%;
`
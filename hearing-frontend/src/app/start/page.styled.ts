import styled from "styled-components";
import {blackColor, primaryColor} from "@/styles/colors";

export const ReceptionCondition = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    p{
        color: ${blackColor};
        text-wrap: nowrap;
    }
    
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
    @media (max-width: 500px) {
        p{
            font-size: 16px;
        }
    }
    @media (max-width: 350px) {
        p{
            font-size: 14px;
        }
    }
`
export const StartSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 24px;
    @media (max-width: 500px) {
        gap: 18px;
        .submit-btn{
            font-size: 20px;
            height: 45px;
            width: 250px;
        }
    }
    @media (max-width: 400px) {
        .submit-btn{
            font-size: 18px;
            height: 40px;
            width: 220px;
        }
    }
`
export const RoundIcon = styled.div<{$marginLeft?: number}>`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(21, 122, 254, .4);
    width: 124px;
    height: 124px;
    border-radius: 50%;
    img{
        margin-left: ${props => props.$marginLeft || 0}px;   
    }
    @media (max-width: 500px) {
        width: 100px;
        height: 100px;
    }
`
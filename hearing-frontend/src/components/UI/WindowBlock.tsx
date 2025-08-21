import React, {Children} from 'react';
import styled from "styled-components";
import {primaryColor, textColor, whiteColor} from "@/styles/colors";

const Wrapper = styled.div`
    background-color: ${whiteColor};
    z-index: 10;
    position: relative;
    border-radius: 25px;
    padding: 44px 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    transition: height .4s ease;
    h2{
        font-family: var(--font-montserrat);
        font-weight: 800;
        font-size: 32px;
        line-height: 1;
        text-align: center;
        text-wrap: nowrap;
    }
    p{
        font-family: var(--font-manrope), serif;
        color: ${textColor};
        text-align: center;
        font-size: 18px;
        &.description-start{
            width: 620px;
            font-weight: 400;
        }
        &.description-mini{
            font-size: 16px;
            margin-top: 16px;
        }
        a{
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
    }
    @media (max-width: 700px) {
        p{
            &.description-start{
                width: 100%;
            }
        }
    }
    @media (max-width: 550px) {
        width: 100vw;
        padding: 32px 16px;
        h2{
            font-size: 30px;
        }
        p{
            &.description-mini{
                font-size: 14px;
                width: 110%;
                margin-top: 14px;
            }
            &.description-start{
                font-size: 16px;
            }
        }
    }
    @media (max-width: 400px) {
        h2{
            font-size: 28px;
        }
        p{
            &.description-mini{
                font-size: 12px;
                margin-top: 12px;
                width: 120%;
            }
            &.description-start{
                font-size: 14px;
            }
        }
    }
`

const WindowBlock = ({children}: Readonly<{ children: React.ReactNode }>) => {
    const isEmpty = Children.count(children) === 0;

    if(isEmpty){
        return null;
    }

    return (
        <Wrapper className={'content'}>
            {children}
        </Wrapper>
    );
};

export default WindowBlock;
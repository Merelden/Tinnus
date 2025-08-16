import React from 'react';
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
    h2{
        font-family: var(--font-montserrat);
        font-weight: 800;
        font-size: 32px;
        line-height: 1;
        text-align: center;
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
    
`

const WindowBlock = ({children}: Readonly<{ children: React.ReactNode }>) => {
    return (
        <Wrapper className={'content'}>
            {children}
        </Wrapper>
    );
};

export default WindowBlock;
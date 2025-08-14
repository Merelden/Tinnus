import React from 'react';
import styled from "styled-components";
import Image from "next/image";
import {lightGrayColor, textColor} from "@/styles/colors";

const Wrapper = styled.div`
    width: 100%;
`
const WrapperOr = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 11px;
    width: 100%;
    p{
        font-size: 20px;
        font-family: var(--font-manrope), serif;
        color: ${textColor};
        margin-bottom: 8px;
    }
    hr{
        width: 100%;
        height: .5px;
        background-color: ${textColor};
    }
`
const WrapperButtons = styled.div`
    margin-top: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`
const Button = styled.button`
    width: 160px;
    height: 44px;
    border-radius: 6px;
    background-color: ${lightGrayColor};
`

const OAuthBtns = () => {

    return (
        <Wrapper>
            <WrapperOr>
                <hr/>
                <p>или</p>
                <hr/>
            </WrapperOr>
            <WrapperButtons>
                <Button>
                    <Image width={125} height={25} src={'/icons/auth/vk-auth.svg'} alt={'Вконтакте'} />
                </Button>
                <Button>
                    <Image width={110} height={25} src={'/icons/auth/tg-auth.svg'} alt={'Вконтакте'} />
                </Button>
            </WrapperButtons>
        </Wrapper>
    );
};

export default OAuthBtns;
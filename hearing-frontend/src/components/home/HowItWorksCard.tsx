import React from 'react';
import styled from "styled-components";
import {lightGrayColor} from "@/styles/colors";
import Image from "next/image";

interface IProps {
    image: string;
    title: string;
    description: string;
}

const Wrapper = styled.div`
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    
    @media (max-width: 1200px) {
        max-width: 350px;
    }
    
    @media (max-width: 768px) {
        max-width: 60%;
        text-align: center;
        align-items: center;
    }
    @media (max-width: 380px) {
        max-width: 100%;
    }
`;
const Title = styled.h3`
    font-size: 24px;
    color: #000;
    font-family: var(--font-montserrat);
    width: 418px;
    font-weight: 800;
    margin: 24px 0 12px;
    
    @media (max-width: 1200px) {
        font-size: 22px;
        width: 350px;
        margin: 20px 0 10px;
    }
    
    @media (max-width: 768px) {
        width: 100%;
        font-size: 20px;
        margin: 20px 0 12px;
    }
    
    @media (max-width: 480px) {
        font-size: 18px;
        margin: 16px 0 8px;
    }
`
const Description = styled.p`
    font-size: 20px;
    font-family: var(--font-manrope), serif;
    font-weight: 400;
    width: 348px;
    
    @media (max-width: 1200px) {
        font-size: 18px;
        width: 320px;
    }
    
    @media (max-width: 768px) {
        width: 100%;
        font-size: 16px;
    }
    
    @media (max-width: 480px) {
        font-size: 14px;
    }
`

const ImportanceCard = ({image, title, description}:IProps) => {
    return (
        <Wrapper>
            <Image width={80} height={80} src={`/icons/${image}.svg`} alt={image} />
            <Title>{title}</Title>
            <Description>{description}</Description>
        </Wrapper>
    );
};

export default ImportanceCard;
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
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background-color: ${lightGrayColor};
    border-radius: 20px;
    width: 434px;
    height: 417px;
    transition: box-shadow 0.3s ease, transform 0.3s ease;

    &:hover {
        box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);  
        transform: scale(1.01);
    }
    
    @media (max-width: 1200px) {
        width: 380px;
        height: 380px;
        img{
            width: 100px;
            height: 100px;
        }
    }
    
    @media (max-width: 768px) {
        width: 100%;
        max-width: 400px;
        height: auto;
        min-height: 350px;
        padding: 20px;
    }
    
    @media (max-width: 480px) {
        min-height: 300px;
        width: 80%;
        padding: 16px;
        img{
            width: 80px;
            height: 80px;
        }
    }
    @media (max-width: 340px) {
        width: 100%;
    }
`;
const Title = styled.h3`
    font-size: 24px;
    color: #000;
    font-family: var(--font-montserrat);
    width: 380px;
    text-align: center;
    font-weight: 800;
    margin: 36px 0 24px;
    
    @media (max-width: 1200px) {
        font-size: 22px;
        width: 340px;
        margin: 30px 0 20px;
    }
    
    @media (max-width: 768px) {
        width: 100%;
        font-size: 20px;
        margin: 24px 0 16px;
    }
    
    @media (max-width: 480px) {
        font-size: 18px;
        margin: 20px 0 12px;
    }
`
const Description = styled.p`
    font-size: 20px;
    font-family: var(--font-manrope), serif;
    font-weight: 400;
    width: 380px;
    text-align: center;
    
    @media (max-width: 1200px) {
        font-size: 18px;
        width: 340px;
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
            <Image width={128} height={128} src={`/icons/${image}.svg`} alt={image} />
            <Title>{title}</Title>
            <Description>{description}</Description>
        </Wrapper>
    );
};

export default ImportanceCard;
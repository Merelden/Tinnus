import React from 'react';
import styled from "styled-components";
import {GrayColor, primaryColor, textColor} from "@/styles/colors";

interface IProps {
    totalQuestions: number,
    currentQuestion: number
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 14px;
    width: 100%;
`
const ProgressStyled = styled.progress`
    height: 14px;
    width: 100%;
    border-radius: 12px;
    overflow: hidden;

    &::-webkit-progress-bar {
        background-color: ${GrayColor};
        border-radius: 12px;
    }

    &::-webkit-progress-value {
        background-color: ${primaryColor};
        border-radius: 12px;
        transition: width 0.3s;
    }

    &::-moz-progress-bar {
        background-color: ${primaryColor};
        border-radius: 12px;
    }
`;
const Percent = styled.p`
    font-size: 20px !important;
    color:${textColor};
    font-weight: 700;
    font-family: var(--font-manrope), serif;
`

const ProgressBar = ({totalQuestions, currentQuestion}:IProps) => {

    const percent = Math.round((currentQuestion/totalQuestions) * 100);

    return (
        <Wrapper>
            <ProgressStyled max={totalQuestions} value={currentQuestion}></ProgressStyled>
            <Percent>{percent}%</Percent>
        </Wrapper>
    );
};

export default ProgressBar;
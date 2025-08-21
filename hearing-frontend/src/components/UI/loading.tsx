import React from 'react';
import styled, {keyframes} from "styled-components";
import {whiteColor} from "@/styles/colors";

const spinTo = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(200deg);
  }
`;
const spinFrom = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-200deg);
  }
`;
const hidden = keyframes`
  0% {
    opacity: 1;
  }
    80%{
        opacity: 1;
    }
  100% {
    opacity: 0;
  }
`;

const Window = styled.div`
    position: fixed;
    overflow: hidden;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${whiteColor};
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${hidden} 1s linear forwards;
    will-change: opacity;
    svg{
        width: 40vh;
        height: 40vh;
        .to-path{
            animation: ${spinFrom} 1s linear;
            transform-origin: 50% 50%;
        }
        .from-path{
            transform-origin: 50% 50%;
            animation: ${spinTo} 1s linear;
        }
    }
    
`

const Loading = () => {
    return (
        <Window>
            <svg width="500" height="500" viewBox="0 0 129 129" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="64.5001" cy="64.5" r="15.8421" fill="#157AFE"/>
                <path className={'to-path'} d="M68.4939 26.1388C68.812 23.0829 71.5607 20.8287 74.5523 21.5285C80.7712 22.9833 86.6229 25.7762 91.6884 29.7382C98.2202 34.8469 103.18 41.6926 106.001 49.4906C108.821 57.2886 109.387 65.7235 107.634 73.8284C105.882 81.9334 101.881 89.3806 96.0903 95.3164C90.2998 101.252 82.9542 105.437 74.8952 107.39C66.8361 109.343 58.3898 108.986 50.5243 106.36C42.6587 103.734 35.6922 98.9452 30.423 92.5421C26.3367 87.5763 23.3995 81.7957 21.791 75.6147C21.0172 72.6414 23.2026 69.8377 26.2496 69.4439C29.2966 69.0501 32.0409 71.2242 32.9403 74.162C34.1999 78.2763 36.2574 82.1223 39.0142 85.4724C42.9549 90.2612 48.1651 93.8428 54.0477 95.8068C59.9303 97.7708 66.2472 98.0377 72.2744 96.5768C78.3017 95.116 83.7954 91.9866 88.126 87.5473C92.4566 83.1079 95.4488 77.5383 96.7598 71.4766C98.0707 65.415 97.6472 59.1067 95.538 53.2746C93.4287 47.4426 89.719 42.3228 84.834 38.502C81.4165 35.8291 77.5207 33.8677 73.3764 32.7104C70.4173 31.8842 68.1757 29.1946 68.4939 26.1388Z" fill="#157AFE"/>
                <path className={'from-path'} d="M70.6723 5.21517C70.9522 2.52642 73.3642 0.554797 76.024 1.03769C90.7704 3.71492 104.182 11.4599 113.888 23.0137C124.646 35.8213 130.009 52.3074 128.843 68.9934C127.678 85.6794 120.076 101.26 107.642 112.448C96.425 122.541 82.0668 128.346 67.0914 128.948C64.3903 129.057 62.2758 126.769 62.3723 124.067C62.4688 121.366 64.7409 119.277 67.4403 119.132C79.8744 118.463 91.7651 113.565 101.094 105.171C111.641 95.6809 118.089 82.4649 119.078 68.3114C120.066 54.1579 115.518 40.174 106.392 29.3103C98.32 19.7011 87.2255 13.1979 75.0051 10.8073C72.3521 10.2884 70.3924 7.90392 70.6723 5.21517Z" fill="#157AFE"/>
            </svg>
        </Window>
    );
};

export default Loading;
'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';

const TRANSITION_MS = 700;
const SESSION_STORAGE_KEY = 'prev-path';

type WavePoseVars = {
    '--wave1-x': string;
    '--wave1-y': string;
    '--wave1-rot': string;
    '--wave2-x': string;
    '--wave2-y': string;
    '--wave2-rot': string;
    '--wave3-x': string;
    '--wave3-y': string;
    '--wave3-rot': string;
};

const WrapperWave = styled.div`
    position: fixed; 
    inset: 0;
    width: 100vw;
    height: 100vh;
    z-index: -10;
    pointer-events: none;

    .wave {
        display: block;
        width: 100%;
        height: 100%;
    }
    
    .wave-layer {
        transition: transform ${TRANSITION_MS}ms ease-in-out, opacity ${TRANSITION_MS}ms ease-in-out;
        will-change: transform;
        transform-origin: 100% 100%;
    }

    .wave-layer.layer-1 {
        transform: translate(var(--wave1-x, 0px), var(--wave1-y, 0px)) rotate(var(--wave1-rot, 0deg));
    }

    .wave-layer.layer-2 {
        transform: translate(var(--wave2-x, 0px), var(--wave2-y, 0px)) rotate(var(--wave2-rot, 0deg));
    }

    .wave-layer.layer-3 {
        transform: translate(var(--wave3-x, 0px), var(--wave3-y, 0px)) rotate(var(--wave3-rot, 0deg));
    }
`;

function hashPath(path: string): number {
    let h = 0;
    for (let i = 0; i < path.length; i++) {
        h = (h * 31 + path.charCodeAt(i)) | 0;
    }
    return Math.abs(h);
}

function poseFromPath(path: string): WavePoseVars {
    const h = hashPath(path);
    const deterministicOffset = (shift: number, amplitudePx: number) => {
        const v = ((h >> shift) % (amplitudePx * 2 + 1)) - amplitudePx;
        return v;
    };
    const px = (v: number) => `${v}px`;
    const deg = (v: number) => `${v}deg`;

    const w1x = px(deterministicOffset(1, 8));
    const w1y = px(deterministicOffset(2, 6));
    const w1r = deg(deterministicOffset(3, 2));

    const w2x = px(deterministicOffset(4, 10));
    const w2y = px(deterministicOffset(5, 8));
    const w2r = deg(deterministicOffset(6, 3));

    const w3x = px(0);
    const w3y = px(deterministicOffset(8, 10));
    const w3r = deg(0);

    return {
        '--wave1-x': w1x,
        '--wave1-y': w1y,
        '--wave1-rot': w1r,
        '--wave2-x': w2x,
        '--wave2-y': w2y,
        '--wave2-rot': w2r,
        '--wave3-x': w3x,
        '--wave3-y': w3y,
        '--wave3-rot': w3r,
    };
}

const WaveSvg: React.FC = () => {
    const pathname = usePathname() || '/';
    const [vars, setVars] = useState<WavePoseVars>(() => {
        if (typeof window !== 'undefined') {
            const prev = window.sessionStorage.getItem(SESSION_STORAGE_KEY);
            return poseFromPath(prev || pathname);
        }
        return poseFromPath(pathname);
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.sessionStorage.setItem(SESSION_STORAGE_KEY, pathname);
        }
    }, [pathname]);

    useEffect(() => {
        const id = requestAnimationFrame(() => setVars(poseFromPath(pathname)));
        return () => cancelAnimationFrame(id);
    }, [pathname]);

    return (
        <WrapperWave style={vars as React.CSSProperties}>
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 1920 1080"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="wave"
                preserveAspectRatio="xMaxYMax slice"
                aria-hidden="true"
                focusable="false"
            >
                <g>
                    <rect width="1920" height="1080" fill="#D8F5FF" />
                    <path
                        className="wave-layer layer-1"
                        d="M1789.5 65.5C1889.5 41.5 1820 44 1883.5 -21.5H1950.5V1084H-114.5C-107.167 956.333 -70.3 692.7 18.5 659.5C129.5 618 96.5 618.5 201 599C305.5 579.5 327.5 594.5 492.5 559.5C657.5 524.5 553.5 466 653.5 427C753.5 388 684 335.5 849.5 272.5C940.354 237.915 1087.69 205 1189 205C1280.5 205 1267.5 213.5 1485 194C1702.5 174.5 1565.5 150.5 1641.5 111.5C1717.5 72.5 1689.5 89.5 1789.5 65.5Z"
                        fill="#D4F0FF"
                    />
                    <path
                        className="wave-layer layer-2"
                        d="M1692 268C1791.6 259.2 1913.17 296.333 1961.5 316V1258L-82 1245V955.5C-22.5 951.167 16 834.7 112 831.5C232 827.5 214 764 334 733.5C369.085 724.582 505.5 705.5 645 653C784.5 600.5 743 588 841 453C939 318 943 372.5 1167.5 342C1392 311.5 1308.5 344 1448 342C1587.5 340 1567.5 279 1692 268Z"
                        fill="#D1ECFF"
                    />
                    <path
                        className="wave-layer layer-3"
                        d="M1539.5 422C1643.1 360 1922.5 308.5 1944.5 415.5V1205H-150C-150 1132 -146.6 995.2 -133 1032C-116 1078 -35.3833 1010.16 172.5 951.5C413.5 883.5 369.5 848.5 646 733C922.5 617.5 1041.5 715 1240.5 662C1376.78 625.704 1410 499.5 1539.5 422Z"
                        fill="#CDE4FF"
                    />
                </g>
            </svg>
        </WrapperWave>
    );
};

export default WaveSvg;

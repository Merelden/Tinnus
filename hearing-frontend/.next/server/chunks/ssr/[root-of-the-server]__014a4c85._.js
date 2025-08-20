module.exports = {

"[project]/src/components/UI/WaveSvg.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const TRANSITION_MS = 700;
const SESSION_STORAGE_KEY = 'prev-path';
const WrapperWave = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "WaveSvg__WrapperWave",
    componentId: "sc-55e59422-0"
})`
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
function hashPath(path) {
    let h = 0;
    for(let i = 0; i < path.length; i++){
        h = h * 31 + path.charCodeAt(i) | 0;
    }
    return Math.abs(h);
}
function poseFromPath(path) {
    const h = hashPath(path);
    const deterministicOffset = (shift, amplitudePx)=>{
        const v = (h >> shift) % (amplitudePx * 2 + 1) - amplitudePx;
        return v;
    };
    const px = (v)=>`${v}px`;
    const deg = (v)=>`${v}deg`;
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
        '--wave3-rot': w3r
    };
}
const WaveSvg = ()=>{
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])() || '/';
    const [vars, setVars] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return poseFromPath(pathname);
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, [
        pathname
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const id = requestAnimationFrame(()=>setVars(poseFromPath(pathname)));
        return ()=>cancelAnimationFrame(id);
    }, [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(WrapperWave, {
        style: vars,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "100%",
            height: "100%",
            viewBox: "0 0 1920 1080",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: "wave",
            preserveAspectRatio: "xMaxYMax slice",
            "aria-hidden": "true",
            focusable: "false",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        width: "1920",
                        height: "1080",
                        fill: "#D8F5FF"
                    }, void 0, false, {
                        fileName: "[project]/src/components/UI/WaveSvg.tsx",
                        lineNumber: 132,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        className: "wave-layer layer-1",
                        d: "M1789.5 65.5C1889.5 41.5 1820 44 1883.5 -21.5H1950.5V1084H-114.5C-107.167 956.333 -70.3 692.7 18.5 659.5C129.5 618 96.5 618.5 201 599C305.5 579.5 327.5 594.5 492.5 559.5C657.5 524.5 553.5 466 653.5 427C753.5 388 684 335.5 849.5 272.5C940.354 237.915 1087.69 205 1189 205C1280.5 205 1267.5 213.5 1485 194C1702.5 174.5 1565.5 150.5 1641.5 111.5C1717.5 72.5 1689.5 89.5 1789.5 65.5Z",
                        fill: "#D4F0FF"
                    }, void 0, false, {
                        fileName: "[project]/src/components/UI/WaveSvg.tsx",
                        lineNumber: 133,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        className: "wave-layer layer-2",
                        d: "M1692 268C1791.6 259.2 1913.17 296.333 1961.5 316V1258L-82 1245V955.5C-22.5 951.167 16 834.7 112 831.5C232 827.5 214 764 334 733.5C369.085 724.582 505.5 705.5 645 653C784.5 600.5 743 588 841 453C939 318 943 372.5 1167.5 342C1392 311.5 1308.5 344 1448 342C1587.5 340 1567.5 279 1692 268Z",
                        fill: "#D1ECFF"
                    }, void 0, false, {
                        fileName: "[project]/src/components/UI/WaveSvg.tsx",
                        lineNumber: 138,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        className: "wave-layer layer-3",
                        d: "M1539.5 422C1643.1 360 1922.5 308.5 1944.5 415.5V1205H-150C-150 1132 -146.6 995.2 -133 1032C-116 1078 -35.3833 1010.16 172.5 951.5C413.5 883.5 369.5 848.5 646 733C922.5 617.5 1041.5 715 1240.5 662C1376.78 625.704 1410 499.5 1539.5 422Z",
                        fill: "#CDE4FF"
                    }, void 0, false, {
                        fileName: "[project]/src/components/UI/WaveSvg.tsx",
                        lineNumber: 143,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/UI/WaveSvg.tsx",
                lineNumber: 131,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/UI/WaveSvg.tsx",
            lineNumber: 120,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/UI/WaveSvg.tsx",
        lineNumber: 119,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = WaveSvg;
}),
"[project]/src/components/UI/WindowBlock.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/styles/colors.ts [app-ssr] (ecmascript)");
;
;
;
const Wrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "WindowBlock__Wrapper",
    componentId: "sc-bcdc8c7e-0"
})`
    background-color: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whiteColor"]};
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
    }
    p{
        font-family: var(--font-manrope), serif;
        color: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["textColor"]};
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
            color: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["primaryColor"]};
            position: relative;
            &::before{
                content: '';
                background-color: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["primaryColor"]};
                position: absolute;
                bottom: 1px;
                left: 0;
                width: 100%;
                height: 1px;
            }
        }
    }
    
`;
const WindowBlock = ({ children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Wrapper, {
        className: 'content',
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/UI/WindowBlock.tsx",
        lineNumber: 56,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = WindowBlock;
}),
"[project]/src/app/(auth)/page.styled.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "AuthForm": ()=>AuthForm,
    "BackgroundPage": ()=>BackgroundPage,
    "ContentBlock": ()=>ContentBlock,
    "OtherErrors": ()=>OtherErrors
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/styles/colors.ts [app-ssr] (ecmascript)");
;
;
const BackgroundPage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].section.withConfig({
    displayName: "page.styled__BackgroundPage",
    componentId: "sc-9b415218-0"
})`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 24px;
    z-index: 10;

    .content {
        animation: fadeInUp 400ms ease-out both;
    }

    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(16px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
const AuthForm = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].form.withConfig({
    displayName: "page.styled__AuthForm",
    componentId: "sc-9b415218-1"
})`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 14px;
    margin: 24px 0;
    z-index: 20;
    button{
        margin-top: 28px;
        background-color: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["primaryColor"]};
        font-size: 24px;
        font-family: var(--font-manrope), serif;
        color: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whiteColor"]};
        height: 50px;
        border-radius: 6px;
        width: 100%;
    }
`;
const ContentBlock = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "page.styled__ContentBlock",
    componentId: "sc-9b415218-2"
})`
    position: relative;
`;
const OtherErrors = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "page.styled__OtherErrors",
    componentId: "sc-9b415218-3"
})`
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: ${({ $message })=>$message ? "114%" : "100%"};
    opacity: ${({ $message })=>$message ? 1 : 0};
    background-color: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["redColor"]};
    border-radius: 25px;
    z-index: 1;
    transition: .4s;
    
    display: flex;
    justify-content: center;
    align-items: end;
    padding: 4.5%;

    font-family: var(--font-manrope), serif;
    font-weight: 500;
    font-size: 24px;
    color: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whiteColor"]};
`;
}),
"[project]/src/app/video/page.styled.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "TitleInstruction": ()=>TitleInstruction,
    "VideTime": ()=>VideTime,
    "VideoButton": ()=>VideoButton,
    "VideoControls": ()=>VideoControls,
    "VideoError": ()=>VideoError,
    "VideoRange": ()=>VideoRange,
    "VideoWrapper": ()=>VideoWrapper
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/styles/colors.ts [app-ssr] (ecmascript)");
;
;
const TitleInstruction = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "page.styled__TitleInstruction",
    componentId: "sc-908372da-0"
})`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    p{
        width: 920px;
        margin-bottom: 32px;
    }
`;
const VideoWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "page.styled__VideoWrapper",
    componentId: "sc-908372da-1"
})`
    width: 940px;
    height: 490px;
    border-radius: 24px;
    overflow: hidden;
    video{
        width: 100%;
    }
`;
const VideoError = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "page.styled__VideoError",
    componentId: "sc-908372da-2"
})`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    border-radius: 24px;
    color: #666;
`;
const VideoControls = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "page.styled__VideoControls",
    componentId: "sc-908372da-3"
})`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin-top: 16px;
    width: 100%;
`;
const VideoButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "page.styled__VideoButton",
    componentId: "sc-908372da-4"
})`
    background-color: ${({ $primary })=>$primary ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["primaryColor"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lightGrayColor"]};
    color: ${({ $primary })=>$primary ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whiteColor"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blackColor"]};
    min-width: ${({ $primary })=>$primary ? '101px' : '86px'};
    height: 43px;
    font-size: 20px;
    border-radius: 8px;
    font-family: var(--font-manrope), serif;
    font-weight: 500;
`;
const VideoRange = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].input.withConfig({
    displayName: "page.styled__VideoRange",
    componentId: "sc-908372da-5"
})`
    border-radius: 8px;
    -webkit-appearance: none;
    width: 100%;
    height: 12px;
    background-color: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GrayColor"]};
    margin: 0 20px;
    cursor: pointer;

    /* === Chrome / Safari / Edge === */
    &::-webkit-slider-runnable-track {
        height: 12px;
        border-radius: 8px;
        background: linear-gradient(
            to right,
            ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["primaryColor"]} 0%,
            ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["primaryColor"]} var(--value, 0%),
            ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GrayColor"]} var(--value, 0%),
            ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GrayColor"]} 100%
        );
    }
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whiteColor"]};
        border: 5px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["primaryColor"]};
        cursor: pointer;
        margin-top: -2px;
        position: relative;
        z-index: 2;
        transition: transform 0.1s ease;
    }
    
    &::-webkit-slider-thumb:hover {
        transform: scale(1.1);
    }

    /* === Firefox === */
    &::-moz-range-track {
        height: 12px;
        border-radius: 8px;
        background: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GrayColor"]};
    }
    &::-moz-range-progress {
        background-color: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["primaryColor"]};
        height: 100%;
        border-radius: 8px;
    }
    &::-moz-range-thumb {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whiteColor"]};
        border: 5px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["primaryColor"]};
        cursor: pointer;
        transition: transform 0.1s ease;
    }
    
    &::-moz-range-thumb:hover {
        transform: scale(1.1);
    }
    
    /* Focus styles */
    &:focus {
        outline: none;
    }
    
    &:focus::-webkit-slider-thumb {
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.3);
    }
    
    &:focus::-moz-range-thumb {
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.3);
    }
    
    /* Disabled state */
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
    
    &:disabled::-webkit-slider-thumb {
        cursor: not-allowed;
    }
    
    &:disabled::-moz-range-thumb {
        cursor: not-allowed;
    }
`;
const VideTime = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "page.styled__VideTime",
    componentId: "sc-908372da-6"
})`
    font-size: 18px;
    color: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["textColor"]};
    font-family: var(--font-manrope), serif;
    font-weight: 700;
`;
}),
"[externals]/util [external] (util, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/path [external] (path, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/assert [external] (assert, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}}),
"[externals]/tty [external] (tty, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[project]/src/api/request.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "NetworkService": ()=>NetworkService
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].defaults.withCredentials = true;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].defaults.xsrfCookieName = "csrftoken";
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].defaults.xsrfHeaderName = 'X-CSRFToken';
function getApiBaseUrl() {
    const explicit = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : process.env.NEXT_PUBLIC_API_BASE_URL;
    if (explicit) return explicit;
    const host = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '127.0.0.1';
    return `http://${host}:8000/api`;
}
const axiosInstance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: getApiBaseUrl(),
    withCredentials: true
});
let inMemoryCsrfToken = null;
function getCookie(name) {
    const matches = typeof document !== 'undefined' ? document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')) : null;
    return matches ? decodeURIComponent(matches[1]) : null;
}
axiosInstance.interceptors.request.use((config)=>{
    const method = (config.method || 'get').toLowerCase();
    const needsCsrf = [
        'post',
        'put',
        'patch',
        'delete'
    ].includes(method);
    if (needsCsrf) {
        const token = inMemoryCsrfToken || getCookie('csrftoken');
        if (token) {
            if (!config.headers) config.headers = {};
            config.headers['X-CSRFToken'] = token;
        }
    }
    return config;
});
axiosInstance.interceptors.response.use((response)=>response, async (error)=>{
    const originalConfig = error.config;
    if (error.response && error.response.status === 403 && !originalConfig?._retry) {
        try {
            originalConfig._retry = true;
            const res = await axiosInstance.get('/csrf/');
            inMemoryCsrfToken = getCookie('csrftoken') || res?.data?.csrftoken || null;
            return await axiosInstance.request(originalConfig);
        } catch (csrfError) {
            return Promise.reject(csrfError);
        }
    }
    return Promise.reject(error);
});
class NetworkService {
    // Токены
    static async csrf() {
        try {
            const res = await axiosInstance.get('/csrf/');
            inMemoryCsrfToken = getCookie('csrftoken') || res?.data?.csrftoken || null;
            return res;
        } catch (error) {
            return error.response;
        }
    }
    // Авторизация
    static async register(data) {
        try {
            return await axiosInstance.post('/register/', data);
        } catch (error) {
            return error.response;
        }
    }
    static async login(data) {
        try {
            return await axiosInstance.post('/login/', data);
        } catch (error) {
            return error.response;
        }
    }
    static async isAuth() {
        try {
            return await axiosInstance.get('/auth/status/');
        } catch (error) {
            return error.response;
        }
    }
    static async streak() {
        try {
            return await axiosInstance.get('/streak/');
        } catch (error) {
            return error.response;
        }
    }
    // Тесты
    static async questions() {
        try {
            return await axiosInstance.get('/questions/');
        } catch (error) {
            return error.response;
        }
    }
    static async answers(data) {
        try {
            return await axiosInstance.post('/tests/submit/', data);
        } catch (error) {
            return error.response;
        }
    }
    // Видео
    static async calming(data) {
        try {
            return await axiosInstance.post('/calming/', data);
        } catch (error) {
            return error.response;
        }
    }
}
}),
"[project]/src/app/video/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>VideoPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$WaveSvg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/WaveSvg.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$WindowBlock$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/WindowBlock.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(auth)/page.styled.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$video$2f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/video/page.styled.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$SubmitButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/SubmitButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/request.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
function VideoPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [currentTime, setCurrentTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [duration, setDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [videoError, setVideoError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isVideoReady, setIsVideoReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const videoUrl = 'https://www.w3schools.com/html/mov_bbb.mp4';
    const handleNext = ()=>{
        router.push(`/neuroexercise?timestamp=${Math.floor(currentTime)}`);
    };
    //Управление видео
    const togglePlay = async ()=>{
        if (!videoRef.current) return;
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkService"].streak();
        console.log(res);
        try {
            if (videoRef.current.paused) {
                await videoRef.current.play();
                setIsPlaying(true);
            } else {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        } catch (error) {
            console.error('Error playing video:', error);
        }
    };
    const rewind = (seconds)=>{
        if (videoRef.current) {
            const newTime = videoRef.current.currentTime + seconds;
            videoRef.current.currentTime = Math.max(0, Math.min(newTime, videoRef.current.duration));
        }
    };
    const handleRangeChange = (e)=>{
        const newTime = Number(e.target.value);
        if (videoRef.current) {
            videoRef.current.currentTime = newTime;
            setCurrentTime(newTime);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const video = videoRef.current;
        if (!video) return;
        const handleTimeUpdate = ()=>{
            setCurrentTime(video.currentTime);
        };
        const handleLoadedMetadata = ()=>{
            if (video.duration && !isNaN(video.duration) && video.duration > 0 && video.duration !== Infinity) {
                setDuration(video.duration);
                setIsVideoReady(true);
                console.log('Video duration loaded:', video.duration);
            }
        };
        const handleCanPlay = ()=>{
            if (duration === 0 && video.duration && !isNaN(video.duration) && video.duration > 0 && video.duration !== Infinity) {
                setDuration(video.duration);
                setIsVideoReady(true);
                console.log('Video duration loaded from canplay:', video.duration);
            }
        };
        const handleEnded = ()=>{
            setIsPlaying(false);
        };
        const handleError = ()=>{
            setVideoError(true);
            setIsVideoReady(false);
            console.error('Video failed to load');
        };
        // Принудительно загружаем метаданные при монтировании
        if (video.readyState >= 1) {
            // Если видео уже загружено
            if (video.duration && !isNaN(video.duration) && video.duration > 0 && video.duration !== Infinity) {
                setDuration(video.duration);
                setIsVideoReady(true);
                console.log('Video already loaded, duration:', video.duration);
            }
        } else {
            // Если видео еще не загружено, загружаем метаданные
            video.load();
        }
        // Fallback: проверяем duration через небольшую задержку
        const fallbackTimer = setTimeout(()=>{
            if (duration === 0 && video.duration && !isNaN(video.duration) && video.duration > 0 && video.duration !== Infinity) {
                setDuration(video.duration);
                setIsVideoReady(true);
                console.log('Video duration loaded from fallback timer:', video.duration);
            }
        }, 1000);
        // Дополнительная проверка через 2 секунды
        const additionalTimer = setTimeout(()=>{
            if (duration === 0 && video.duration && !isNaN(video.duration) && video.duration > 0 && video.duration !== Infinity) {
                setDuration(video.duration);
                setIsVideoReady(true);
                console.log('Video duration loaded from additional timer:', video.duration);
            }
        }, 2000);
        video.addEventListener("timeupdate", handleTimeUpdate);
        video.addEventListener("loadedmetadata", handleLoadedMetadata);
        video.addEventListener("canplay", handleCanPlay);
        video.addEventListener("ended", handleEnded);
        video.addEventListener("error", handleError);
        return ()=>{
            clearTimeout(fallbackTimer);
            clearTimeout(additionalTimer);
            video.removeEventListener('timeupdate', handleTimeUpdate);
            video.removeEventListener('loadedmetadata', handleLoadedMetadata);
            video.removeEventListener('canplay', handleCanPlay);
            video.removeEventListener('ended', handleEnded);
            video.removeEventListener('error', handleError);
        };
    }, [
        duration
    ]);
    // Формат времени
    const formatTime = (time)=>{
        if (isNaN(time) || time === 0 || time === Infinity) return '0:00';
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${String(seconds).padStart(2, '0')}`;
    };
    // Проверяем, что duration действительно валидный
    const isValidDuration = duration > 0 && !isNaN(duration) && duration !== Infinity;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BackgroundPage"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$WaveSvg$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/video/page.tsx",
                lineNumber: 163,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$WindowBlock$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$video$2f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TitleInstruction"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Теперь прослушайте аудиофайл"
                            }, void 0, false, {
                                fileName: "[project]/src/app/video/page.tsx",
                                lineNumber: 166,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Как только вы услышите шум, похожий на ваш, нажмите кнопку «Я услышал свой шум», чтобы продолжить. Это поможет нам точно зафиксировать ваш симптом и направить вас к нужному нейроупражнению."
                            }, void 0, false, {
                                fileName: "[project]/src/app/video/page.tsx",
                                lineNumber: 167,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/video/page.tsx",
                        lineNumber: 165,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$video$2f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VideoWrapper"], {
                        children: videoError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$video$2f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VideoError"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Ошибка загрузки видео. Попробуйте обновить страницу."
                            }, void 0, false, {
                                fileName: "[project]/src/app/video/page.tsx",
                                lineNumber: 172,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/video/page.tsx",
                            lineNumber: 171,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                            onClick: togglePlay,
                            ref: videoRef,
                            preload: "metadata",
                            onLoadedMetadata: ()=>{
                                if (videoRef.current && videoRef.current.duration && !isNaN(videoRef.current.duration) && videoRef.current.duration > 0 && videoRef.current.duration !== Infinity) {
                                    setDuration(videoRef.current.duration);
                                    setIsVideoReady(true);
                                    console.log('Video duration from onLoadedMetadata:', videoRef.current.duration);
                                }
                            },
                            onCanPlay: ()=>{
                                if (videoRef.current && duration === 0 && videoRef.current.duration && !isNaN(videoRef.current.duration) && videoRef.current.duration > 0 && videoRef.current.duration !== Infinity) {
                                    setDuration(videoRef.current.duration);
                                    setIsVideoReady(true);
                                    console.log('Video duration from onCanPlay:', videoRef.current.duration);
                                }
                            },
                            onError: ()=>setVideoError(true),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                    src: videoUrl,
                                    type: "video/mp4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/video/page.tsx",
                                    lineNumber: 195,
                                    columnNumber: 29
                                }, this),
                                "Ваш браузер не поддерживает видео."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/video/page.tsx",
                            lineNumber: 175,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/video/page.tsx",
                        lineNumber: 169,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$video$2f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VideoControls"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$video$2f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VideoButton"], {
                                onClick: ()=>rewind(-10),
                                disabled: videoError || !isVideoReady,
                                children: "-10c"
                            }, void 0, false, {
                                fileName: "[project]/src/app/video/page.tsx",
                                lineNumber: 201,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$video$2f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VideoButton"], {
                                $primary: true,
                                onClick: togglePlay,
                                disabled: videoError || !isVideoReady,
                                children: isPlaying ? 'Пауза' : 'Пуск'
                            }, void 0, false, {
                                fileName: "[project]/src/app/video/page.tsx",
                                lineNumber: 202,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$video$2f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VideoButton"], {
                                onClick: ()=>rewind(10),
                                disabled: videoError || !isVideoReady,
                                children: "+10c"
                            }, void 0, false, {
                                fileName: "[project]/src/app/video/page.tsx",
                                lineNumber: 205,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$video$2f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VideoRange"], {
                                type: "range",
                                min: 0,
                                max: isValidDuration ? duration : 0,
                                step: 0.1,
                                value: currentTime,
                                onChange: handleRangeChange,
                                style: {
                                    ['--value']: isValidDuration ? `${currentTime / duration * 100}%` : '0%'
                                },
                                disabled: videoError || !isVideoReady
                            }, void 0, false, {
                                fileName: "[project]/src/app/video/page.tsx",
                                lineNumber: 206,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$video$2f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VideTime"], {
                                children: isVideoReady && isValidDuration ? `${formatTime(currentTime)}/${formatTime(duration)}` : 'Загрузка...'
                            }, void 0, false, {
                                fileName: "[project]/src/app/video/page.tsx",
                                lineNumber: 216,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/video/page.tsx",
                        lineNumber: 200,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$SubmitButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        marginTop: 12,
                        width: 315,
                        height: 50,
                        label: 'Я услышал свой шум',
                        primary: true,
                        onClick: handleNext,
                        hidden: isPlaying || !(currentTime > 0)
                    }, void 0, false, {
                        fileName: "[project]/src/app/video/page.tsx",
                        lineNumber: 224,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/video/page.tsx",
                lineNumber: 164,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/video/page.tsx",
        lineNumber: 162,
        columnNumber: 9
    }, this);
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__014a4c85._.js.map
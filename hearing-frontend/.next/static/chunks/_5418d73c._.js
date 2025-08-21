(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/UI/WaveSvg.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    position: fixed; \n    inset: 0;\n    width: 100vw;\n    height: 100vh;\n    z-index: -10;\n    pointer-events: none;\n\n    .wave {\n        display: block;\n        width: 100%;\n        height: 100%;\n    }\n    \n    .wave-layer {\n        transition: transform ",
        "ms ease-in-out, opacity ",
        "ms ease-in-out;\n        will-change: transform;\n        transform-origin: 100% 100%;\n    }\n\n    .wave-layer.layer-1 {\n        transform: translate(var(--wave1-x, 0px), var(--wave1-y, 0px)) rotate(var(--wave1-rot, 0deg));\n    }\n\n    .wave-layer.layer-2 {\n        transform: translate(var(--wave2-x, 0px), var(--wave2-y, 0px)) rotate(var(--wave2-rot, 0deg));\n    }\n\n    .wave-layer.layer-3 {\n        transform: translate(var(--wave3-x, 0px), var(--wave3-y, 0px)) rotate(var(--wave3-rot, 0deg));\n    }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const TRANSITION_MS = 700;
const SESSION_STORAGE_KEY = 'prev-path';
const WrapperWave = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "WaveSvg__WrapperWave",
    componentId: "sc-55e59422-0"
})(_templateObject(), TRANSITION_MS, TRANSITION_MS);
_c = WrapperWave;
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
    const px = (v)=>"".concat(v, "px");
    const deg = (v)=>"".concat(v, "deg");
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
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])() || '/';
    const [vars, setVars] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "WaveSvg.useState": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const prev = window.sessionStorage.getItem(SESSION_STORAGE_KEY);
                return poseFromPath(prev || pathname);
            }
            //TURBOPACK unreachable
            ;
        }
    }["WaveSvg.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WaveSvg.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                window.sessionStorage.setItem(SESSION_STORAGE_KEY, pathname);
            }
        }
    }["WaveSvg.useEffect"], [
        pathname
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WaveSvg.useEffect": ()=>{
            const id = requestAnimationFrame({
                "WaveSvg.useEffect.id": ()=>setVars(poseFromPath(pathname))
            }["WaveSvg.useEffect.id"]);
            return ({
                "WaveSvg.useEffect": ()=>cancelAnimationFrame(id)
            })["WaveSvg.useEffect"];
        }
    }["WaveSvg.useEffect"], [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WrapperWave, {
        style: vars,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "100%",
            height: "100%",
            viewBox: "0 0 1920 1080",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: "wave",
            preserveAspectRatio: "xMaxYMax slice",
            "aria-hidden": "true",
            focusable: "false",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        width: "1920",
                        height: "1080",
                        fill: "#D8F5FF"
                    }, void 0, false, {
                        fileName: "[project]/src/components/UI/WaveSvg.tsx",
                        lineNumber: 132,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        className: "wave-layer layer-1",
                        d: "M1789.5 65.5C1889.5 41.5 1820 44 1883.5 -21.5H1950.5V1084H-114.5C-107.167 956.333 -70.3 692.7 18.5 659.5C129.5 618 96.5 618.5 201 599C305.5 579.5 327.5 594.5 492.5 559.5C657.5 524.5 553.5 466 653.5 427C753.5 388 684 335.5 849.5 272.5C940.354 237.915 1087.69 205 1189 205C1280.5 205 1267.5 213.5 1485 194C1702.5 174.5 1565.5 150.5 1641.5 111.5C1717.5 72.5 1689.5 89.5 1789.5 65.5Z",
                        fill: "#D4F0FF"
                    }, void 0, false, {
                        fileName: "[project]/src/components/UI/WaveSvg.tsx",
                        lineNumber: 133,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        className: "wave-layer layer-2",
                        d: "M1692 268C1791.6 259.2 1913.17 296.333 1961.5 316V1258L-82 1245V955.5C-22.5 951.167 16 834.7 112 831.5C232 827.5 214 764 334 733.5C369.085 724.582 505.5 705.5 645 653C784.5 600.5 743 588 841 453C939 318 943 372.5 1167.5 342C1392 311.5 1308.5 344 1448 342C1587.5 340 1567.5 279 1692 268Z",
                        fill: "#D1ECFF"
                    }, void 0, false, {
                        fileName: "[project]/src/components/UI/WaveSvg.tsx",
                        lineNumber: 138,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_s(WaveSvg, "nrJPTxgfY6oa70bswP3DLjQEnlY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c1 = WaveSvg;
const __TURBOPACK__default__export__ = WaveSvg;
var _c, _c1;
__turbopack_context__.k.register(_c, "WrapperWave");
__turbopack_context__.k.register(_c1, "WaveSvg");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/WindowBlock.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/styles/colors.ts [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    background-color: ",
        ";\n    z-index: 10;\n    position: relative;\n    border-radius: 25px;\n    padding: 44px 36px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    height: 100%;\n    transition: height .4s ease;\n    h2{\n        font-family: var(--font-montserrat);\n        font-weight: 800;\n        font-size: 32px;\n        line-height: 1;\n        text-align: center;\n        text-wrap: nowrap;\n    }\n    p{\n        font-family: var(--font-manrope), serif;\n        color: ",
        ";\n        text-align: center;\n        font-size: 18px;\n        &.description-start{\n            width: 620px;\n            font-weight: 400;\n        }\n        &.description-mini{\n            font-size: 16px;\n            margin-top: 16px;\n        }\n        a{\n            color: ",
        ";\n            position: relative;\n            &::before{\n                content: '';\n                background-color: ",
        ";\n                position: absolute;\n                bottom: 1px;\n                left: 0;\n                width: 100%;\n                height: 1px;\n            }\n        }\n    }\n    @media (max-width: 700px) {\n        p{\n            &.description-start{\n                width: 100%;\n            }\n        }\n    }\n    @media (max-width: 550px) {\n        width: 100vw;\n        padding: 32px 16px;\n        h2{\n            font-size: 30px;\n        }\n        p{\n            &.description-mini{\n                font-size: 14px;\n                width: 110%;\n                margin-top: 14px;\n            }\n            &.description-start{\n                font-size: 16px;\n            }\n        }\n    }\n    @media (max-width: 400px) {\n        h2{\n            font-size: 28px;\n        }\n        p{\n            &.description-mini{\n                font-size: 12px;\n                margin-top: 12px;\n                width: 120%;\n            }\n            &.description-start{\n                font-size: 14px;\n            }\n        }\n    }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
;
;
;
;
const Wrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "WindowBlock__Wrapper",
    componentId: "sc-bcdc8c7e-0"
})(_templateObject(), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["whiteColor"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textColor"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primaryColor"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primaryColor"]);
_c = Wrapper;
const WindowBlock = (param)=>{
    let { children } = param;
    const isEmpty = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].count(children) === 0;
    if (isEmpty) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Wrapper, {
        className: 'content',
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/UI/WindowBlock.tsx",
        lineNumber: 101,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = WindowBlock;
const __TURBOPACK__default__export__ = WindowBlock;
var _c, _c1;
__turbopack_context__.k.register(_c, "Wrapper");
__turbopack_context__.k.register(_c1, "WindowBlock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(auth)/page.styled.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AuthForm": ()=>AuthForm,
    "BackgroundPage": ()=>BackgroundPage,
    "ContentBlock": ()=>ContentBlock,
    "OtherErrors": ()=>OtherErrors
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/styles/colors.ts [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    min-height: 100vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    padding: 24px;\n    z-index: 10;\n\n    .content {\n        animation: fadeInUp 400ms ease-out both;\n    }\n\n    @keyframes fadeInUp {\n        from { opacity: 0; transform: translateY(16px) scale(0.9); }\n        to { opacity: 1; transform: translateY(0) scale(1); }\n    }\n    @media (max-width: 500px) {\n        padding: 0;\n    }}\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function _templateObject1() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    gap: 14px;\n    margin: 24px 0;\n    z-index: 20;\n    width: 100%;\n    button{\n        margin-top: 28px;\n        background-color: ",
        ";\n        font-size: 24px;\n        font-family: var(--font-manrope), serif;\n        color: ",
        ";\n        height: 50px;\n        border-radius: 6px;\n        width: 100%;\n    }\n    @media (max-width: 500px) {\n        margin: 12px 0;\n        button{\n            height: 45px;\n            font-size: 20px;\n            margin-top: 14px;\n        }\n    }\n\n"
    ]);
    _templateObject1 = function() {
        return data;
    };
    return data;
}
function _templateObject2() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    position: relative;\n"
    ]);
    _templateObject2 = function() {
        return data;
    };
    return data;
}
function _templateObject3() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 100%;\n    height: ",
        ";\n    opacity: ",
        ";\n    background-color: ",
        ";\n    border-radius: 25px;\n    z-index: 1;\n    transition: .4s;\n    \n    display: flex;\n    justify-content: center;\n    align-items: end;\n    padding: 4.5%;\n\n    font-family: var(--font-manrope), serif;\n    font-weight: 500;\n    font-size: 24px;\n    color: ",
        ";\n    @media (max-width: 500px) {\n        font-size: 20px;\n        height: ",
        ";\n        padding: 3.2%;\n    }\n    @media (max-width: 400px) {\n        padding: 3.2%;\n    }\n    @media (max-width: 320px) {\n        padding: 4%;\n    }\n"
    ]);
    _templateObject3 = function() {
        return data;
    };
    return data;
}
;
;
const BackgroundPage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].section.withConfig({
    displayName: "page.styled__BackgroundPage",
    componentId: "sc-9b415218-0"
})(_templateObject());
const AuthForm = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].form.withConfig({
    displayName: "page.styled__AuthForm",
    componentId: "sc-9b415218-1"
})(_templateObject1(), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primaryColor"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["whiteColor"]);
const ContentBlock = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "page.styled__ContentBlock",
    componentId: "sc-9b415218-2"
})(_templateObject2());
const OtherErrors = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "page.styled__OtherErrors",
    componentId: "sc-9b415218-3"
})(_templateObject3(), (param)=>{
    let { $message } = param;
    return $message ? "114%" : "100%";
}, (param)=>{
    let { $message } = param;
    return $message ? 1 : 0;
}, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["redColor"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["whiteColor"], (param)=>{
    let { $message } = param;
    return $message ? "112%" : "100%";
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/tests/page.styled.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ButtonTest": ()=>ButtonTest,
    "ButtonsWrapper": ()=>ButtonsWrapper,
    "FormTest": ()=>FormTest,
    "QuestionBlock": ()=>QuestionBlock,
    "TestSection": ()=>TestSection,
    "TextAreaStyled": ()=>TextAreaStyled,
    "TitleTest": ()=>TitleTest
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/styles/colors.ts [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    gap: 32px;\n    width: 600px;\n    @media (max-width: 700px) {\n        max-width: 500px;\n        h2{\n            font-size: 30px;\n        }\n    }\n    @media (max-width: 550px) {\n        max-width: 470px;\n        h2{\n            font-size: 26px;\n        }\n    }\n    @media (max-width: 500px) {\n        max-width: 100%;\n        h2{\n            font-size: 24px;\n        }\n    }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function _templateObject1() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    display: flex;\n    justify-content: start;\n    align-items: start;\n    flex-direction: column;\n    gap: 16px;\n    width: 100%;\n    h2{\n        text-align: start;\n        text-wrap: auto;\n    }\n"
    ]);
    _templateObject1 = function() {
        return data;
    };
    return data;
}
function _templateObject2() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    display: flex;\n    justify-content: start;\n    align-items: start;\n    flex-direction: column;\n    width: 100%;\n    gap: 16px;\n    @media (max-width: 700px) {\n        gap: 14px;\n    }\n"
    ]);
    _templateObject2 = function() {
        return data;
    };
    return data;
}
function _templateObject3() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    gap: 12px;\n    p{\n        text-align: start;\n        font-size: 20px;\n        font-weight: 400;\n        color: ",
        ";\n    }\n    @media (max-width: 700px) {\n        p{\n            font-size: 18px;\n        }\n    }\n    @media (max-width: 500px) {\n        p{\n            font-size: 16px;\n        }\n    }\n"
    ]);
    _templateObject3 = function() {
        return data;
    };
    return data;
}
function _templateObject4() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    @media (max-width: 700px) {\n        button{\n            font-size: 22px;\n            height: 47px;\n        }\n        button:nth-last-child(1){\n            width: 170px;\n        }\n        button:nth-last-child(2){\n            width: 150px;\n        }\n    }\n"
    ]);
    _templateObject4 = function() {
        return data;
    };
    return data;
}
function _templateObject5() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    border-radius: 6px;\n    background: ",
        ";\n    font-size: 24px;\n    font-weight: 700;\n    font-family: var(--font-manrope), serif;\n    color: ",
        ";\n    width:  ",
        ";\n    height: 56px;\n    transition: background .4s ease, color .4s ease;\n    \n    &:disabled{\n        background: ",
        ";\n        color: ",
        ";\n        cursor: auto;\n    }\n"
    ]);
    _templateObject5 = function() {
        return data;
    };
    return data;
}
function _templateObject6() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    background: ",
        ";\n    padding: 12px 10px;\n    border-radius: 10px;\n    \n    resize: none;\n    height: 110px;\n    width: 100%;\n    margin-top: 8px;\n\n    font-size: 18px;\n    font-family: var(--font-manrope), serif;\n    color: ",
        ";\n    @media (max-width: 700px) {\n        font-size: 16px;\n        padding: 10px 8px;\n        height: 90px;\n    }\n"
    ]);
    _templateObject6 = function() {
        return data;
    };
    return data;
}
;
;
const TestSection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "page.styled__TestSection",
    componentId: "sc-e591badf-0"
})(_templateObject());
const TitleTest = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "page.styled__TitleTest",
    componentId: "sc-e591badf-1"
})(_templateObject1());
const FormTest = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].form.withConfig({
    displayName: "page.styled__FormTest",
    componentId: "sc-e591badf-2"
})(_templateObject2());
const QuestionBlock = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].label.withConfig({
    displayName: "page.styled__QuestionBlock",
    componentId: "sc-e591badf-3"
})(_templateObject3(), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blackColor"]);
const ButtonsWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "page.styled__ButtonsWrapper",
    componentId: "sc-e591badf-4"
})(_templateObject4());
const ButtonTest = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "page.styled__ButtonTest",
    componentId: "sc-e591badf-5"
})(_templateObject5(), (param)=>{
    let { $primary } = param;
    return $primary ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primaryColor"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightGrayColor"];
}, (param)=>{
    let { $primary } = param;
    return $primary ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["whiteColor"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blackColor"];
}, (param)=>{
    let { $primary } = param;
    return $primary ? '200px' : '150px';
}, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightGrayColor"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blackColor"]);
const TextAreaStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].textarea.withConfig({
    displayName: "page.styled__TextAreaStyled",
    componentId: "sc-e591badf-6"
})(_templateObject6(), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightGrayColor"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blackColor"]);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/ProgressBar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/styles/colors.ts [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 14px;\n    width: 100%;\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function _templateObject1() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    height: 14px;\n    width: 100%;\n    border-radius: 12px;\n    overflow: hidden;\n\n    &::-webkit-progress-bar {\n        background-color: ",
        ";\n        border-radius: 12px;\n    }\n\n    &::-webkit-progress-value {\n        background-color: ",
        ";\n        border-radius: 12px;\n        transition: width 0.3s;\n    }\n\n    &::-moz-progress-bar {\n        background-color: ",
        ";\n        border-radius: 12px;\n    }\n    @media (max-width: 430px) {\n        height: 12px;\n    }\n"
    ]);
    _templateObject1 = function() {
        return data;
    };
    return data;
}
function _templateObject2() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    font-size: 20px !important;\n    color:",
        ";\n    font-weight: 700;\n    font-family: var(--font-manrope), serif;\n    @media (max-width: 430px) {\n        font-size: 18px !important;\n    }\n"
    ]);
    _templateObject2 = function() {
        return data;
    };
    return data;
}
;
;
;
const Wrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ProgressBar__Wrapper",
    componentId: "sc-2b648f3c-0"
})(_templateObject());
_c = Wrapper;
const ProgressStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].progress.withConfig({
    displayName: "ProgressBar__ProgressStyled",
    componentId: "sc-2b648f3c-1"
})(_templateObject1(), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GrayColor"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primaryColor"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primaryColor"]);
_c1 = ProgressStyled;
const Percent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "ProgressBar__Percent",
    componentId: "sc-2b648f3c-2"
})(_templateObject2(), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textColor"]);
_c2 = Percent;
const ProgressBar = (param)=>{
    let { totalQuestions, currentQuestion } = param;
    const percent = Math.round(currentQuestion / totalQuestions * 100);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Wrapper, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProgressStyled, {
                max: totalQuestions,
                value: currentQuestion
            }, void 0, false, {
                fileName: "[project]/src/components/UI/ProgressBar.tsx",
                lineNumber: 58,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Percent, {
                children: [
                    percent,
                    "%"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/UI/ProgressBar.tsx",
                lineNumber: 59,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/UI/ProgressBar.tsx",
        lineNumber: 57,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c3 = ProgressBar;
const __TURBOPACK__default__export__ = ProgressBar;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Wrapper");
__turbopack_context__.k.register(_c1, "ProgressStyled");
__turbopack_context__.k.register(_c2, "Percent");
__turbopack_context__.k.register(_c3, "ProgressBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/Reception.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/styles/colors.ts [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    font-size: 16px;\n    font-family: var(--font-manrope);\n    color: #333;\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function _templateObject1() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    display: none; \n\n    &:checked + span {\n        background-color: ",
        "; \n        border-color: ",
        ";\n    }\n\n    &:checked + span svg {\n        opacity: 1;  \n    }\n"
    ]);
    _templateObject1 = function() {
        return data;
    };
    return data;
}
function _templateObject2() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    width: 28px;\n    height: 28px;\n    border: 2px solid ",
        ";\n    border-radius: 4px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: all 0.3s ease;  \n\n    svg {\n        opacity: 0;  \n        transition: opacity 0.3s ease; \n    }\n    @media (max-width: 500px) {\n        width: 22px;\n        height: 22px;\n    }\n    @media (max-width: 350px) {\n        width: 18px;\n        height: 18px;\n    }\n"
    ]);
    _templateObject2 = function() {
        return data;
    };
    return data;
}
;
;
;
const CheckBoxLabel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].label.withConfig({
    displayName: "Reception__CheckBoxLabel",
    componentId: "sc-45e736c2-0"
})(_templateObject());
_c = CheckBoxLabel;
const StyledCheckbox = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].input.withConfig({
    displayName: "Reception__StyledCheckbox",
    componentId: "sc-45e736c2-1"
})(_templateObject1(), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primaryColor"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primaryColor"]);
_c1 = StyledCheckbox;
const CheckboxWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "Reception__CheckboxWrapper",
    componentId: "sc-45e736c2-2"
})(_templateObject2(), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightGrayColor"]);
_c2 = CheckboxWrapper;
const Reception = (param)=>{
    let { isReception, setIsReception, type } = param;
    const handleCheckboxChange = (event)=>{
        setIsReception(event.target.checked);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckBoxLabel, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledCheckbox, {
                type: type ? type : 'checkbox',
                checked: isReception,
                onChange: handleCheckboxChange
            }, void 0, false, {
                fileName: "[project]/src/components/UI/Reception.tsx",
                lineNumber: 64,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckboxWrapper, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "28",
                    height: "28",
                    viewBox: "0 0 28 28",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M5.83325 13.9032L11.3446 19.25L22.1666 8.75",
                        stroke: "white",
                        "stroke-width": "3",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/UI/Reception.tsx",
                        lineNumber: 71,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/UI/Reception.tsx",
                    lineNumber: 70,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/UI/Reception.tsx",
                lineNumber: 69,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/UI/Reception.tsx",
        lineNumber: 63,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c3 = Reception;
const __TURBOPACK__default__export__ = Reception;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "CheckBoxLabel");
__turbopack_context__.k.register(_c1, "StyledCheckbox");
__turbopack_context__.k.register(_c2, "CheckboxWrapper");
__turbopack_context__.k.register(_c3, "Reception");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/tests/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$WaveSvg$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/WaveSvg.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$WindowBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/WindowBlock.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$page$2e$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(auth)/page.styled.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$tests$2f$page$2e$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/tests/page.styled.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$ProgressBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/ProgressBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Reception$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/Reception.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/request.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$streakStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/streakStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
;
const QuestionsForm = ()=>{
    var _currentQuestion_options, _currentQuestion_options1, _this;
    _s();
    const [questions, setQuestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [interstitialTexts, setInterstitialTexts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isStreakLoaded, setIsStreakLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const streakDay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$streakStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["streak"])();
    const testDay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$streakStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTestDay"])();
    // Текстовые вставки
    const interstitials = {
        14: {
            title: "Госпитальная шкала тревоги и депрессии (HADS). Ответьте, пожалуйста, на следующие вопросы:",
            text: "Часть 1. Тревога. Каждому утверждению соответствуют 4 варианта ответа. Выберите тот из ответов, который соответствует Вашему состоянию:"
        },
        21: {
            title: "Госпитальная шкала тревоги и депрессии (HADS). Ответьте, пожалуйста, на следующие вопросы:",
            text: "Часть 2. Депрессия. Каждому утверждению соответствуют 4 варианта ответа. Выберите тот из ответов, который соответствует Вашему состоянию:"
        },
        28: {
            title: "Ниже вы найдете 13 утверждений, описывающих различные мысли и чувства, которые могут быть связаны с шумом в ушах у вас.",
            text: "Шкала катастрофизации тиннитуса (TCS). Шкала катастрофизации тиннитуса направлена на определение мыслей и чувств, которые вы испытываете при ощущении шума в ушах. С помощью данного опросника мы хотим выяснить, какое влияние оказывает шум в ушах на ваше состояние: на настроение, поведение, отношение."
        }
    };
    // 1) Загружаем streak в стор и отмечаем готовность
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuestionsForm.useEffect": ()=>{
            let mounted = true;
            ({
                "QuestionsForm.useEffect": async ()=>{
                    try {
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$streakStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadStreak"])();
                        if (mounted) setIsStreakLoaded(true);
                    } catch (err) {
                        console.log(err);
                        if (mounted) setIsStreakLoaded(true);
                    }
                }
            })["QuestionsForm.useEffect"]();
            return ({
                "QuestionsForm.useEffect": ()=>{
                    mounted = false;
                }
            })["QuestionsForm.useEffect"];
        }
    }["QuestionsForm.useEffect"], []);
    // 2) После загрузки streak реагируем на актуальное значение testDay
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuestionsForm.useEffect": ()=>{
            if (!isStreakLoaded) return;
            if (!testDay) {
                router.push("/instruction");
                return;
            }
            ({
                "QuestionsForm.useEffect": async ()=>{
                    try {
                        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetworkService"].questions();
                        setQuestions(res.data.questions);
                    } catch (err) {
                        console.log(err);
                        setQuestions([]);
                    }
                }
            })["QuestionsForm.useEffect"]();
        }
    }["QuestionsForm.useEffect"], [
        isStreakLoaded,
        testDay,
        router
    ]);
    const handleSubmit = async ()=>{
        const outAnswers = Object.entries(answers).map((param)=>{
            let [key, value] = param;
            const questionId = Number(key);
            const questionMeta = questions.find((q)=>q.id === questionId);
            const out = {
                question: questionId
            };
            if (value.selected && value.selected.length > 0) {
                if ((questionMeta === null || questionMeta === void 0 ? void 0 : questionMeta.type) === 'single') {
                    out.selected = value.selected[0];
                } else if ((questionMeta === null || questionMeta === void 0 ? void 0 : questionMeta.type) === 'multiple') {
                    out.selected = value.selected;
                }
            }
            if (value.input && value.input.trim() !== '') {
                out.input = value.input.trim();
            }
            if (out.selected === undefined && !out.input) return null;
            return out;
        }).filter((v)=>v !== null);
        const payload = {
            day: streakDay,
            answers: outAnswers
        };
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetworkService"].answers(payload);
        router.push("/instruction");
    };
    // Изменение состояния ответов
    const handleMultipleChange = (qId, optionId, checked)=>{
        setAnswers((prev)=>{
            var _prev_qId;
            const prevAns = ((_prev_qId = prev[qId]) === null || _prev_qId === void 0 ? void 0 : _prev_qId.selected) || [];
            const newAns = checked ? [
                ...prevAns,
                optionId
            ] : prevAns.filter((id)=>id !== optionId);
            return {
                ...prev,
                [qId]: {
                    ...prev[qId],
                    selected: newAns
                }
            };
        });
    };
    const handleSingleChange = (questionId, optionId)=>{
        setAnswers((prev)=>({
                ...prev,
                [questionId]: {
                    selected: [
                        optionId
                    ]
                }
            }));
    };
    const handleInputChange = (qId, value)=>{
        setAnswers((prev)=>({
                ...prev,
                [qId]: {
                    ...prev[qId],
                    input: value
                }
            }));
    };
    //Переключение вопросов
    const handlePrevQuestion = ()=>{
        if (interstitialTexts) {
            setInterstitialTexts(null);
            return;
        }
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };
    const handleNextQuestion = (e)=>{
        e.preventDefault();
        const currentQ = questions[currentQuestionIndex];
        if (currentQ && interstitials[currentQ.id]) {
            setInterstitialTexts(interstitials[currentQ.id]);
            return;
        }
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prev)=>prev + 1);
        } else {
            handleSubmit();
        }
    };
    const handleNextFromInterstitial = ()=>{
        setInterstitialTexts(null);
        setCurrentQuestionIndex((prev)=>prev + 1);
    };
    // Проверка ответа на вопрос
    const isAnswered = (question)=>{
        const ans = answers[question.id];
        if (question.type === 'multiple' || question.type === 'single') {
            return !!(ans === null || ans === void 0 ? void 0 : ans.selected) && ans.selected.length > 0;
        }
        if (question.type === 'input') {
            return !!(ans === null || ans === void 0 ? void 0 : ans.input) && ans.input.trim() !== '';
        }
        return false;
    };
    const currentQuestion = questions[currentQuestionIndex];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$page$2e$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BackgroundPage"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$WaveSvg$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/tests/page.tsx",
                lineNumber: 199,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$WindowBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: currentQuestion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$tests$2f$page$2e$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TestSection"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$tests$2f$page$2e$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TitleTest"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$ProgressBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    totalQuestions: questions.length,
                                    currentQuestion: currentQuestionIndex + 1
                                }, void 0, false, {
                                    fileName: "[project]/src/app/tests/page.tsx",
                                    lineNumber: 204,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: !interstitialTexts && currentQuestion.question
                                }, void 0, false, {
                                    fileName: "[project]/src/app/tests/page.tsx",
                                    lineNumber: 208,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                interstitialTexts && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "interstitialTexts.title"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/tests/page.tsx",
                                    lineNumber: 209,
                                    columnNumber: 51
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/tests/page.tsx",
                            lineNumber: 203,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$tests$2f$page$2e$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormTest"], {
                            id: "questionForm",
                            onSubmit: handleNextQuestion,
                            children: interstitialTexts ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$tests$2f$page$2e$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuestionBlock"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        cursor: "auto"
                                    },
                                    children: interstitialTexts.text
                                }, void 0, false, {
                                    fileName: "[project]/src/app/tests/page.tsx",
                                    lineNumber: 214,
                                    columnNumber: 37
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/tests/page.tsx",
                                lineNumber: 213,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    currentQuestion.type === 'multiple' && ((_currentQuestion_options = currentQuestion.options) === null || _currentQuestion_options === void 0 ? void 0 : _currentQuestion_options.map((opt)=>{
                                        var _answers_currentQuestion_id;
                                        const selected = ((_answers_currentQuestion_id = answers[currentQuestion.id]) === null || _answers_currentQuestion_id === void 0 ? void 0 : _answers_currentQuestion_id.selected) || [];
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$tests$2f$page$2e$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuestionBlock"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Reception$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    isReception: selected.includes(opt.id),
                                                    setIsReception: (checked)=>handleMultipleChange(currentQuestion.id, opt.id, checked)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/tests/page.tsx",
                                                    lineNumber: 223,
                                                    columnNumber: 53
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: opt.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/tests/page.tsx",
                                                    lineNumber: 229,
                                                    columnNumber: 53
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, opt.id, true, {
                                            fileName: "[project]/src/app/tests/page.tsx",
                                            lineNumber: 222,
                                            columnNumber: 49
                                        }, ("TURBOPACK compile-time value", void 0));
                                    })),
                                    currentQuestion.type === 'single' && ((_currentQuestion_options1 = currentQuestion.options) === null || _currentQuestion_options1 === void 0 ? void 0 : _currentQuestion_options1.map((opt)=>{
                                        var _answers_currentQuestion_id_selected, _answers_currentQuestion_id;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$tests$2f$page$2e$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuestionBlock"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Reception$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    type: "radio",
                                                    isReception: ((_answers_currentQuestion_id = answers[currentQuestion.id]) === null || _answers_currentQuestion_id === void 0 ? void 0 : (_answers_currentQuestion_id_selected = _answers_currentQuestion_id.selected) === null || _answers_currentQuestion_id_selected === void 0 ? void 0 : _answers_currentQuestion_id_selected[0]) === opt.id,
                                                    setIsReception: (checked)=>checked && handleSingleChange(currentQuestion.id, opt.id)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/tests/page.tsx",
                                                    lineNumber: 236,
                                                    columnNumber: 49
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: opt.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/tests/page.tsx",
                                                    lineNumber: 243,
                                                    columnNumber: 49
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, opt.id, true, {
                                            fileName: "[project]/src/app/tests/page.tsx",
                                            lineNumber: 235,
                                            columnNumber: 45
                                        }, ("TURBOPACK compile-time value", void 0));
                                    })),
                                    currentQuestion.input && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$tests$2f$page$2e$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextAreaStyled"], {
                                        placeholder: currentQuestion.input,
                                        value: ((_this = answers[currentQuestion.id]) === null || _this === void 0 ? void 0 : _this.input) || '',
                                        onChange: (e)=>handleInputChange(currentQuestion.id, e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/tests/page.tsx",
                                        lineNumber: 247,
                                        columnNumber: 41
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/src/app/tests/page.tsx",
                            lineNumber: 211,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$tests$2f$page$2e$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonsWrapper"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$tests$2f$page$2e$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonTest"], {
                                    onClick: handlePrevQuestion,
                                    disabled: currentQuestionIndex === 0 && !interstitialTexts,
                                    children: "Назад"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/tests/page.tsx",
                                    lineNumber: 258,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$tests$2f$page$2e$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonTest"], {
                                    $primary: true,
                                    disabled: !interstitialTexts && !isAnswered(currentQuestion),
                                    type: interstitialTexts ? 'button' : 'submit',
                                    onClick: interstitialTexts ? handleNextFromInterstitial : undefined,
                                    form: "questionForm",
                                    children: currentQuestionIndex === questions.length - 1 && !interstitialTexts ? 'Отправить' : 'Далее'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/tests/page.tsx",
                                    lineNumber: 259,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/tests/page.tsx",
                            lineNumber: 257,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/tests/page.tsx",
                    lineNumber: 202,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/tests/page.tsx",
                lineNumber: 200,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/tests/page.tsx",
        lineNumber: 198,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(QuestionsForm, "/l9XRNVy6N6NyUFESPmDwbQUSKM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = QuestionsForm;
const __TURBOPACK__default__export__ = QuestionsForm;
var _c;
__turbopack_context__.k.register(_c, "QuestionsForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=_5418d73c._.js.map
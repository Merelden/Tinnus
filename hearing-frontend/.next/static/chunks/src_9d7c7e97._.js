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
_s(WaveSvg, "4G7VsQ4tx51+/IZTEZ1hwPknRQ8=", false, function() {
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
"[project]/src/styles/colors.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "blackColor": ()=>blackColor,
    "lightGrayColor": ()=>lightGrayColor,
    "primaryColor": ()=>primaryColor,
    "textColor": ()=>textColor,
    "whiteColor": ()=>whiteColor
});
const primaryColor = '#157AFE';
const whiteColor = '#fff';
const lightGrayColor = '#F5F7F9';
const textColor = '#84868A';
const blackColor = '#333';
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/styles/colors.ts [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    background-color: ",
        ";\n    border-radius: 25px;\n    padding: 44px 36px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    h2{\n        font-family: var(--font-montserrat);\n        font-weight: 800;\n        font-size: 32px;\n    }\n    p{\n        font-family: var(--font-manrope), serif;\n        color: ",
        ";\n        text-align: center;\n        font-size: 18px;\n        &.description-start{\n            width: 620px;\n            font-weight: 400;\n        }\n        &.description-mini{\n            font-size: 16px;\n            margin-top: 16px;\n        }\n        a{\n            color: ",
        ";\n            position: relative;\n            &::before{\n                content: '';\n                background-color: ",
        ";\n                position: absolute;\n                bottom: 1px;\n                left: 0;\n                width: 100%;\n                height: 1px;\n            }\n        }\n    }\n    \n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Wrapper, {
        className: 'content',
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/UI/WindowBlock.tsx",
        lineNumber: 50,
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
    "BackgroundPage": ()=>BackgroundPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/styles/colors.ts [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    min-height: 100vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    padding: 24px;\n\n    .content {\n        animation: fadeInUp 400ms ease-out both;\n    }\n\n    @keyframes fadeInUp {\n        from { opacity: 0; transform: translateY(16px); }\n        to { opacity: 1; transform: translateY(0); }\n    }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function _templateObject1() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    gap: 14px;\n    margin: 24px 0;\n    button{\n        margin-top: 28px;\n        background-color: ",
        ";\n        font-size: 24px;\n        font-family: var(--font-manrope), serif;\n        color: ",
        ";\n        height: 50px;\n        border-radius: 6px;\n        width: 100%;\n    }\n"
    ]);
    _templateObject1 = function() {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/InputAuth.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/styles/colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$phone$2d$number$2d$input$2f$min$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-phone-number-input/min/index.js [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    background-color: ",
        ";\n    width: 412px;\n    padding: 5px 6px;\n    border-radius: 6px;\n    \n    .PhoneInput{\n        width: 100%;\n    }\n    .PhoneInputCountry{\n        display: none;\n    }\n    \n    input{\n        font-family: var(--font-manrope), serif;\n        font-size: 20px;\n        color: ",
        ";\n        margin-left: 5px;\n        width: 100%;\n    }\n"
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
;
;
const Wrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "InputAuth__Wrapper",
    componentId: "sc-71d7189b-0"
})(_templateObject(), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightGrayColor"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textColor"]);
_c = Wrapper;
const InputAuth = (param)=>{
    let { image, label, value, onChange, type } = param;
    const handlePhoneChange = (phoneValue)=>{
        onChange(phoneValue || '');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Wrapper, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                width: 40,
                height: 40,
                src: "/icons/auth/".concat(image, ".svg"),
                alt: image
            }, void 0, false, {
                fileName: "[project]/src/components/UI/InputAuth.tsx",
                lineNumber: 50,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            type === 'tel' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$phone$2d$number$2d$input$2f$min$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                placeholder: label,
                value: value,
                onChange: handlePhoneChange,
                defaultCountry: "RU"
            }, void 0, false, {
                fileName: "[project]/src/components/UI/InputAuth.tsx",
                lineNumber: 52,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                placeholder: label,
                value: value,
                onChange: (e)=>onChange(e.target.value),
                type: type ? type : 'text',
                required: true
            }, void 0, false, {
                fileName: "[project]/src/components/UI/InputAuth.tsx",
                lineNumber: 59,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/UI/InputAuth.tsx",
        lineNumber: 49,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = InputAuth;
const __TURBOPACK__default__export__ = InputAuth;
var _c, _c1;
__turbopack_context__.k.register(_c, "Wrapper");
__turbopack_context__.k.register(_c1, "InputAuth");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/OAuthBtns.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/styles/colors.ts [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    width: 100%;\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function _templateObject1() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 11px;\n    width: 100%;\n    p{\n        font-size: 20px;\n        font-family: var(--font-manrope), serif;\n        color: ",
        ";\n        margin-bottom: 8px;\n    }\n    hr{\n        width: 100%;\n        height: .5px;\n        background-color: ",
        ";\n    }\n"
    ]);
    _templateObject1 = function() {
        return data;
    };
    return data;
}
function _templateObject2() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    margin-top: 16px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n"
    ]);
    _templateObject2 = function() {
        return data;
    };
    return data;
}
function _templateObject3() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    width: 160px;\n    height: 44px;\n    border-radius: 6px;\n    background-color: ",
        ";\n"
    ]);
    _templateObject3 = function() {
        return data;
    };
    return data;
}
;
;
;
;
const Wrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "OAuthBtns__Wrapper",
    componentId: "sc-4c8d90e7-0"
})(_templateObject());
_c = Wrapper;
const WrapperOr = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "OAuthBtns__WrapperOr",
    componentId: "sc-4c8d90e7-1"
})(_templateObject1(), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textColor"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textColor"]);
_c1 = WrapperOr;
const WrapperButtons = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "OAuthBtns__WrapperButtons",
    componentId: "sc-4c8d90e7-2"
})(_templateObject2());
_c2 = WrapperButtons;
const Button = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "OAuthBtns__Button",
    componentId: "sc-4c8d90e7-3"
})(_templateObject3(), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightGrayColor"]);
_c3 = Button;
const OAuthBtns = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Wrapper, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WrapperOr, {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                        fileName: "[project]/src/components/UI/OAuthBtns.tsx",
                        lineNumber: 46,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "или"
                    }, void 0, false, {
                        fileName: "[project]/src/components/UI/OAuthBtns.tsx",
                        lineNumber: 47,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                        fileName: "[project]/src/components/UI/OAuthBtns.tsx",
                        lineNumber: 48,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/UI/OAuthBtns.tsx",
                lineNumber: 45,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WrapperButtons, {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            width: 125,
                            height: 25,
                            src: '/icons/auth/vk-auth.svg',
                            alt: 'Вконтакте'
                        }, void 0, false, {
                            fileName: "[project]/src/components/UI/OAuthBtns.tsx",
                            lineNumber: 52,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/UI/OAuthBtns.tsx",
                        lineNumber: 51,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            width: 110,
                            height: 25,
                            src: '/icons/auth/tg-auth.svg',
                            alt: 'Вконтакте'
                        }, void 0, false, {
                            fileName: "[project]/src/components/UI/OAuthBtns.tsx",
                            lineNumber: 55,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/UI/OAuthBtns.tsx",
                        lineNumber: 54,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/UI/OAuthBtns.tsx",
                lineNumber: 50,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/UI/OAuthBtns.tsx",
        lineNumber: 44,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c4 = OAuthBtns;
const __TURBOPACK__default__export__ = OAuthBtns;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "Wrapper");
__turbopack_context__.k.register(_c1, "WrapperOr");
__turbopack_context__.k.register(_c2, "WrapperButtons");
__turbopack_context__.k.register(_c3, "Button");
__turbopack_context__.k.register(_c4, "OAuthBtns");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(auth)/login/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>AuthPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$WaveSvg$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/WaveSvg.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$WindowBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/WindowBlock.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$page$2e$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(auth)/page.styled.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$InputAuth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/InputAuth.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$OAuthBtns$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/OAuthBtns.tsx [app-client] (ecmascript)");
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
function AuthPage() {
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$page$2e$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BackgroundPage"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$WaveSvg$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/(auth)/login/page.tsx",
                lineNumber: 18,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$WindowBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Вход в приложение"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(auth)/login/page.tsx",
                        lineNumber: 21,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: 'description-mini',
                        children: [
                            "Введите вашу почту и пароль, чтобы продолжить.",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/app/(auth)/login/page.tsx",
                                lineNumber: 24,
                                columnNumber: 67
                            }, this),
                            "Если у вас нет аккаунта, ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: '/register',
                                children: "зарегистрируйтесь"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(auth)/login/page.tsx",
                                lineNumber: 25,
                                columnNumber: 46
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(auth)/login/page.tsx",
                        lineNumber: 23,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$page$2e$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthForm"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$InputAuth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                image: 'mail',
                                label: 'Email',
                                value: email,
                                type: 'email',
                                onChange: setEmail
                            }, void 0, false, {
                                fileName: "[project]/src/app/(auth)/login/page.tsx",
                                lineNumber: 29,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$InputAuth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                image: 'lock',
                                label: 'Пароль',
                                value: password,
                                type: 'password',
                                onChange: setPassword
                            }, void 0, false, {
                                fileName: "[project]/src/app/(auth)/login/page.tsx",
                                lineNumber: 36,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                children: "Войти"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(auth)/login/page.tsx",
                                lineNumber: 43,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(auth)/login/page.tsx",
                        lineNumber: 28,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$OAuthBtns$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/(auth)/login/page.tsx",
                        lineNumber: 46,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(auth)/login/page.tsx",
                lineNumber: 19,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(auth)/login/page.tsx",
        lineNumber: 17,
        columnNumber: 9
    }, this);
}
_s(AuthPage, "TSZhDBNy8CmbxXgprY/vvMmTG1Q=");
_c = AuthPage;
var _c;
__turbopack_context__.k.register(_c, "AuthPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_9d7c7e97._.js.map
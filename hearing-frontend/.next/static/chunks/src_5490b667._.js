(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

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
"[project]/src/app/page.styled.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ButtonContainer": ()=>ButtonContainer,
    "ButtonHome": ()=>ButtonHome,
    "ContainerHome": ()=>ContainerHome,
    "DescriptionHome": ()=>DescriptionHome,
    "Footer": ()=>Footer,
    "Header": ()=>Header,
    "HowItWorksCards": ()=>HowItWorksCards,
    "HowItWorksHeader": ()=>HowItWorksHeader,
    "HowItWorksSection": ()=>HowItWorksSection,
    "ImportanceCards": ()=>ImportanceCards,
    "ImportanceSection": ()=>ImportanceSection,
    "InitialContent": ()=>InitialContent,
    "InitialImage": ()=>InitialImage,
    "InitialSection": ()=>InitialSection,
    "InitialText": ()=>InitialText,
    "TitleHome": ()=>TitleHome
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/styles/colors.ts [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    max-width: 1520px;\n    margin: 0 auto;\n    width: 90%;\n    \n    @media (max-width: 1519px) {\n        width: 95%;\n        max-width: 100%;\n    }\n    \n    @media (max-width: 1200px) {\n        width: 90%;\n    }\n    \n    @media (max-width: 768px) {\n        width: 100%;\n        padding: 0 20px;\n    }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function _templateObject1() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    height: 48px;\n    width: ",
        "px;\n    border-radius: 8px;\n    background: ",
        ";\n    color: ",
        ";\n    border: 1px solid ",
        ";\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: clamp(14px, 1.5vw, 20px);\n    font-family: var(--font-montserrat);\n    font-weight: 500;\n    transition: background-color .4s, color .4s;\n    &:hover {\n        background: ",
        ";\n        color: ",
        ";\n    }\n    \n    @media (max-width: 1200px) {\n        height: 44px;\n        width: ",
        "px;\n    }\n    @media (max-width: 1000px) {\n        height: 36px;\n        width: ",
        "px;\n    }\n    @media (max-width: 768px) {\n        font-size: 16px;\n        height: 40px;\n    }\n"
    ]);
    _templateObject1 = function() {
        return data;
    };
    return data;
}
function _templateObject2() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    color: ",
        ";\n    font-size: clamp(28px, 4vw, 55px);\n    font-family: var(--font-montserrat);\n    font-weight: 700;\n    line-height: 1;\n    \n    @media (max-width: 768px) {\n        text-align: center;\n        font-size: clamp(20px, 6vw, 42px);\n    }\n    @media (max-width: 420px) {\n        font-size: clamp(20px, 8vw, 42px);\n    }\n"
    ]);
    _templateObject2 = function() {
        return data;
    };
    return data;
}
function _templateObject3() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    font-family: var(--font-manrope), serif;\n    font-size: clamp(16px, 1.5vw, 22px);\n    color: ",
        ";\n    width: 90%;\n    \n    @media (max-width: 768px) {\n        text-align: center;\n        font-size: clamp(14px, 1vw, 20px);\n    }\n    \n"
    ]);
    _templateObject3 = function() {
        return data;
    };
    return data;
}
function _templateObject4() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        '\n    background-image: url("/backgrounds/mainHeader.svg");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    width: 100vw;\n    height: 928px;\n\n    @media (max-width: 1400px) {\n        height: 800px;\n    }\n    \n    @media (max-width: 1200px) {\n        height: 700px;\n    }\n    \n    @media (max-width: 768px) {\n        height: 600px;\n    }\n    @media (max-width: 500px) {\n        height: 500px;\n    }\n    \n'
    ]);
    _templateObject4 = function() {
        return data;
    };
    return data;
}
function _templateObject5() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-top: 100px;\n    \n    @media (max-width: 1400px) {\n        margin-top: 80px;\n        gap: 30px;\n    }\n    \n    @media (max-width: 1200px) {\n        margin-top: 80px;\n        gap: 40px;\n    }\n    \n    @media (max-width: 768px) {\n        flex-direction: column;\n        margin-top: 60px;\n        gap: 30px;\n        text-align: center;\n    }\n"
    ]);
    _templateObject5 = function() {
        return data;
    };
    return data;
}
function _templateObject6() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        '\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-top: 12px;\n    \n    @media (max-width: 768px) {\n        padding-top: 20px;\n    }\n    @media (max-width: 600px) {\n        .logo{\n            content: url("/icons/logo.svg");\n            width: 64px;\n            height: 64px;\n        }\n    }\n'
    ]);
    _templateObject6 = function() {
        return data;
    };
    return data;
}
function _templateObject7() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    gap: 24px;\n\n    @media (max-width: 1000px) {\n        gap: 16px;\n    }\n    @media (max-width: 768px) {\n        gap: 16px;\n        justify-content: center;\n    }\n    @media (max-width: 450px) {\n        &:nth-child(2){\n            & > a:first-of-type {\n                display: none;\n            }\n        }\n        &:nth-child(3){\n            & > a:nth-last-child(1) {\n                display: none;\n            }\n        }\n    }\n    \n"
    ]);
    _templateObject7 = function() {
        return data;
    };
    return data;
}
function _templateObject8() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    width: max-content;\n    h1{\n        font-family: var(--font-montserrat);\n        font-weight: 800;\n        font-size: clamp(42px, 6vw, 90px);\n        line-height: 0.9; \n        color: #000;\n        width: max-content;\n        \n        @media (max-width: 768px) {\n            width: 100%;\n            text-align: center;\n            font-size: clamp(24px, 8vw, 64px);\n            line-height: 1;\n        }\n        \n    }\n    p{\n        margin: 80px 0 40px;\n        max-width: 640px;\n\n        @media (max-width: 1400px) {\n            margin: 60px 0 30px;\n            max-width: 580px;\n        }\n        \n        @media (max-width: 1200px) {\n            margin: 40px 0 20px;\n            max-width: 540px;\n        }\n        \n        @media (max-width: 768px) {\n            margin: 40px 0 20px;\n            max-width: 100%;\n            width: 100%;\n        }\n    }\n    \n    @media (max-width: 768px) {\n        width: 100%;\n    }\n"
    ]);
    _templateObject8 = function() {
        return data;
    };
    return data;
}
function _templateObject9() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 605px;\n    height: 557px;\n\n    @media (max-width: 1400px) {\n        width: 550px;\n        height: 500px;\n    }\n    \n    @media (max-width: 1200px) {\n        width: 500px;\n        height: 460px;\n    }\n    \n    @media (max-width: 768px) {\n        display: none;\n    }\n"
    ]);
    _templateObject9 = function() {
        return data;
    };
    return data;
}
function _templateObject10() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    margin-top: 120px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    .description{\n        text-align: center;\n        margin: 44px 0 80px;\n        \n        @media (max-width: 768px) {\n            margin: 30px 0 50px;\n        }\n        @media (max-width: 1100px) {\n            margin: 10px 0 40px;\n        }\n    }\n    \n    @media (max-width: 768px) {\n        margin-top: 80px;\n    }\n    @media (max-width: 468px) {\n        a{\n            width: 300px;\n        }\n    }\n"
    ]);
    _templateObject10 = function() {
        return data;
    };
    return data;
}
function _templateObject11() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    margin-bottom: clamp(40px, 5vw, 64px);\n    \n    @media (max-width: 1400px) {\n        gap: 30px;\n        flex-wrap: wrap;\n        justify-content: center;\n    }\n    \n    @media (max-width: 1200px) {\n        gap: 30px;\n        flex-wrap: wrap;\n        justify-content: center;\n    }\n    \n    @media (max-width: 768px) {\n        flex-direction: column;\n        gap: 24px;\n    }\n"
    ]);
    _templateObject11 = function() {
        return data;
    };
    return data;
}
function _templateObject12() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    margin-top: 190px;\n    \n    @media (max-width: 768px) {\n        margin-top: 120px;\n    }\n"
    ]);
    _templateObject12 = function() {
        return data;
    };
    return data;
}
function _templateObject13() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    display: flex;\n    justify-content: space-between;\n    align-items: start;\n    margin-bottom: 80px;\n    h2{\n        width: max-content;\n        \n        \n        @media (max-width: 768px) {\n            width: 100%;\n            margin-bottom: 30px;\n        }\n    }\n    p{\n        max-width: 543px;\n        width: 100%;\n        @media (max-width: 1200px) {\n            width: 40%;\n        }\n        @media (max-width: 768px) {\n            width: 100%;\n        }\n    }\n    \n    @media (max-width: 768px) {\n        flex-direction: column;\n        margin-bottom: 50px;\n        text-align: center;\n        align-items: center;\n    }\n"
    ]);
    _templateObject13 = function() {
        return data;
    };
    return data;
}
function _templateObject14() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n\n    @media (max-width: 1400px) {\n        gap: 30px;\n        flex-wrap: wrap;\n        justify-content: center;\n    }\n    @media (max-width: 1200px) {\n        gap: 40px;\n        flex-wrap: wrap;\n        justify-content: center;\n    }\n    \n    @media (max-width: 768px) {\n        flex-direction: column;\n        gap: 30px;\n    }\n"
    ]);
    _templateObject14 = function() {
        return data;
    };
    return data;
}
function _templateObject15() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        '\n    margin-top: 190px;\n    background-image: url("/backgrounds/mainHeader.svg");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    width: 100vw;\n    height: 458px;\n    \n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    \n    h2{\n        color: #000;\n        width: 558px;\n        text-align: center;\n        line-height: 1;\n        \n        @media (max-width: 768px) {\n            width: 100%;\n        }\n    }\n    p{\n        text-align: center;\n        width: 560px;\n        margin: 28px 0 36px;\n        \n        @media (max-width: 768px) {\n            width: 80%;\n            margin: 20px 0 24px;\n        }\n    }\n    \n    @media (max-width: 768px) {\n        margin-top: 120px;\n        height: 350px;\n        padding: 0 20px;\n    }\n    \n    @media (max-width: 480px) {\n        height: 300px;\n    }\n'
    ]);
    _templateObject15 = function() {
        return data;
    };
    return data;
}
;
;
;
const ContainerHome = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].section.withConfig({
    displayName: "page.styled__ContainerHome",
    componentId: "sc-5a1fa87c-0"
})(_templateObject());
const ButtonHome = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).withConfig({
    displayName: "page.styled__ButtonHome",
    componentId: "sc-5a1fa87c-1"
})(_templateObject1(), (param)=>{
    let { $width } = param;
    return $width;
}, (param)=>{
    let { $primary } = param;
    return $primary ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primaryColor"] : "transparent";
}, (param)=>{
    let { $primary } = param;
    return $primary ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["whiteColor"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primaryColor"];
}, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primaryColor"], (param)=>{
    let { $primary } = param;
    return $primary ? "transparent" : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primaryColor"];
}, (param)=>{
    let { $primary } = param;
    return $primary ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primaryColor"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["whiteColor"];
}, (param)=>{
    let { $width } = param;
    return $width - 20;
}, (param)=>{
    let { $width } = param;
    return $width - 40;
});
const TitleHome = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h2.withConfig({
    displayName: "page.styled__TitleHome",
    componentId: "sc-5a1fa87c-2"
})(_templateObject2(), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primaryColor"]);
const DescriptionHome = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "page.styled__DescriptionHome",
    componentId: "sc-5a1fa87c-3"
})(_templateObject3(), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blackColor"]);
const InitialSection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].section.withConfig({
    displayName: "page.styled__InitialSection",
    componentId: "sc-5a1fa87c-4"
})(_templateObject4());
const InitialContent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "page.styled__InitialContent",
    componentId: "sc-5a1fa87c-5"
})(_templateObject5());
const Header = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].header.withConfig({
    displayName: "page.styled__Header",
    componentId: "sc-5a1fa87c-6"
})(_templateObject6());
const ButtonContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "page.styled__ButtonContainer",
    componentId: "sc-5a1fa87c-7"
})(_templateObject7());
const InitialText = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "page.styled__InitialText",
    componentId: "sc-5a1fa87c-8"
})(_templateObject8());
const InitialImage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "page.styled__InitialImage",
    componentId: "sc-5a1fa87c-9"
})(_templateObject9());
const ImportanceSection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].section.withConfig({
    displayName: "page.styled__ImportanceSection",
    componentId: "sc-5a1fa87c-10"
})(_templateObject10());
const ImportanceCards = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "page.styled__ImportanceCards",
    componentId: "sc-5a1fa87c-11"
})(_templateObject11());
const HowItWorksSection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].section.withConfig({
    displayName: "page.styled__HowItWorksSection",
    componentId: "sc-5a1fa87c-12"
})(_templateObject12());
const HowItWorksHeader = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "page.styled__HowItWorksHeader",
    componentId: "sc-5a1fa87c-13"
})(_templateObject13());
const HowItWorksCards = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "page.styled__HowItWorksCards",
    componentId: "sc-5a1fa87c-14"
})(_templateObject14());
const Footer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].footer.withConfig({
    displayName: "page.styled__Footer",
    componentId: "sc-5a1fa87c-15"
})(_templateObject15());
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/home/ImportanceCard.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n\n    background-color: ",
        ";\n    border-radius: 20px;\n    width: 434px;\n    height: 417px;\n    transition: box-shadow 0.3s ease, transform 0.3s ease;\n\n    &:hover {\n        box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);  \n        transform: scale(1.01);\n    }\n    \n    @media (max-width: 1200px) {\n        width: 380px;\n        height: 380px;\n        img{\n            width: 100px;\n            height: 100px;\n        }\n    }\n    \n    @media (max-width: 768px) {\n        width: 100%;\n        max-width: 400px;\n        height: auto;\n        min-height: 350px;\n        padding: 20px;\n    }\n    \n    @media (max-width: 480px) {\n        min-height: 300px;\n        width: 80%;\n        padding: 16px;\n        img{\n            width: 80px;\n            height: 80px;\n        }\n    }\n    @media (max-width: 340px) {\n        width: 100%;\n    }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function _templateObject1() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    font-size: 24px;\n    color: #000;\n    font-family: var(--font-montserrat);\n    width: 380px;\n    text-align: center;\n    font-weight: 800;\n    margin: 36px 0 24px;\n    \n    @media (max-width: 1200px) {\n        font-size: 22px;\n        width: 340px;\n        margin: 30px 0 20px;\n    }\n    \n    @media (max-width: 768px) {\n        width: 100%;\n        font-size: 20px;\n        margin: 24px 0 16px;\n    }\n    \n    @media (max-width: 480px) {\n        font-size: 18px;\n        margin: 20px 0 12px;\n    }\n"
    ]);
    _templateObject1 = function() {
        return data;
    };
    return data;
}
function _templateObject2() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    font-size: 20px;\n    font-family: var(--font-manrope), serif;\n    font-weight: 400;\n    width: 380px;\n    text-align: center;\n    \n    @media (max-width: 1200px) {\n        font-size: 18px;\n        width: 340px;\n    }\n    \n    @media (max-width: 768px) {\n        width: 100%;\n        font-size: 16px;\n    }\n    \n    @media (max-width: 480px) {\n        font-size: 14px;\n    }\n"
    ]);
    _templateObject2 = function() {
        return data;
    };
    return data;
}
;
;
;
;
const Wrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ImportanceCard__Wrapper",
    componentId: "sc-69d50d02-0"
})(_templateObject(), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightGrayColor"]);
_c = Wrapper;
const Title = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h3.withConfig({
    displayName: "ImportanceCard__Title",
    componentId: "sc-69d50d02-1"
})(_templateObject1());
_c1 = Title;
const Description = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "ImportanceCard__Description",
    componentId: "sc-69d50d02-2"
})(_templateObject2());
_c2 = Description;
const ImportanceCard = (param)=>{
    let { image, title, description } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Wrapper, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                width: 128,
                height: 128,
                src: "/icons/".concat(image, ".svg"),
                alt: image
            }, void 0, false, {
                fileName: "[project]/src/components/home/ImportanceCard.tsx",
                lineNumber: 110,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/home/ImportanceCard.tsx",
                lineNumber: 111,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Description, {
                children: description
            }, void 0, false, {
                fileName: "[project]/src/components/home/ImportanceCard.tsx",
                lineNumber: 112,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/home/ImportanceCard.tsx",
        lineNumber: 109,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c3 = ImportanceCard;
const __TURBOPACK__default__export__ = ImportanceCard;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Wrapper");
__turbopack_context__.k.register(_c1, "Title");
__turbopack_context__.k.register(_c2, "Description");
__turbopack_context__.k.register(_c3, "ImportanceCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/home/HowItWorksCard.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
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
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    display: flex;\n    justify-content: start;\n    align-items: start;\n    flex-direction: column;\n    \n    @media (max-width: 1200px) {\n        max-width: 350px;\n    }\n    \n    @media (max-width: 768px) {\n        max-width: 60%;\n        text-align: center;\n        align-items: center;\n    }\n    @media (max-width: 380px) {\n        max-width: 100%;\n    }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function _templateObject1() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    font-size: 24px;\n    color: #000;\n    font-family: var(--font-montserrat);\n    width: 418px;\n    font-weight: 800;\n    margin: 24px 0 12px;\n    \n    @media (max-width: 1200px) {\n        font-size: 22px;\n        width: 350px;\n        margin: 20px 0 10px;\n    }\n    \n    @media (max-width: 768px) {\n        width: 100%;\n        font-size: 20px;\n        margin: 20px 0 12px;\n    }\n    \n    @media (max-width: 480px) {\n        font-size: 18px;\n        margin: 16px 0 8px;\n    }\n"
    ]);
    _templateObject1 = function() {
        return data;
    };
    return data;
}
function _templateObject2() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    font-size: 20px;\n    font-family: var(--font-manrope), serif;\n    font-weight: 400;\n    width: 348px;\n    \n    @media (max-width: 1200px) {\n        font-size: 18px;\n        width: 320px;\n    }\n    \n    @media (max-width: 768px) {\n        width: 100%;\n        font-size: 16px;\n    }\n    \n    @media (max-width: 480px) {\n        font-size: 14px;\n    }\n"
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
    displayName: "HowItWorksCard__Wrapper",
    componentId: "sc-f560b31a-0"
})(_templateObject());
_c = Wrapper;
const Title = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h3.withConfig({
    displayName: "HowItWorksCard__Title",
    componentId: "sc-f560b31a-1"
})(_templateObject1());
_c1 = Title;
const Description = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "HowItWorksCard__Description",
    componentId: "sc-f560b31a-2"
})(_templateObject2());
_c2 = Description;
const ImportanceCard = (param)=>{
    let { image, title, description } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Wrapper, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                width: 80,
                height: 80,
                src: "/icons/".concat(image, ".svg"),
                alt: image
            }, void 0, false, {
                fileName: "[project]/src/components/home/HowItWorksCard.tsx",
                lineNumber: 80,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/home/HowItWorksCard.tsx",
                lineNumber: 81,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Description, {
                children: description
            }, void 0, false, {
                fileName: "[project]/src/components/home/HowItWorksCard.tsx",
                lineNumber: 82,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/home/HowItWorksCard.tsx",
        lineNumber: 79,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c3 = ImportanceCard;
const __TURBOPACK__default__export__ = ImportanceCard;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Wrapper");
__turbopack_context__.k.register(_c1, "Title");
__turbopack_context__.k.register(_c2, "Description");
__turbopack_context__.k.register(_c3, "ImportanceCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>Home
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/page.styled.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$ImportanceCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/home/ImportanceCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$HowItWorksCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/home/HowItWorksCard.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InitialSection"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContainerHome"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    width: 212,
                                    height: 75,
                                    src: "/icons/logo-text.svg",
                                    alt: "logo",
                                    className: 'logo'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 21,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonContainer"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonHome"], {
                                            href: '#info',
                                            $width: 190,
                                            children: "Узнать больше"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 23,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonHome"], {
                                            href: '/register',
                                            $width: 190,
                                            $primary: true,
                                            children: "Регистрация"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 24,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 22,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 20,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InitialContent"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InitialText"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            children: [
                                                "Программа",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 29,
                                                    columnNumber: 38
                                                }, this),
                                                "исследования",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 29,
                                                    columnNumber: 55
                                                }, this),
                                                "тиннитуса"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 29,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DescriptionHome"], {
                                            children: "Присоединяйтесь к нашему исследованию и помогите улучшить методы диагностики и лечения тиннитуса. Ваше участие важно для нас и для улучшения жизни людей с этим состоянием."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 30,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonContainer"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonHome"], {
                                                    href: '/register',
                                                    $width: 210,
                                                    $primary: true,
                                                    children: "Присоединиться"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 32,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonHome"], {
                                                    href: '#info',
                                                    $width: 210,
                                                    children: "Узнать больше"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 33,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 31,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 28,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InitialImage"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        width: 0,
                                        height: 0,
                                        layout: "responsive",
                                        src: "/images/mainHeader.png",
                                        alt: "Начальная картинка"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 37,
                                        columnNumber: 25
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 36,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 27,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 19,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 18,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContainerHome"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImportanceSection"], {
                        id: 'info',
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TitleHome"], {
                                children: "Почему ваше участие так важно?"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 46,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DescriptionHome"], {
                                className: 'description',
                                children: "В этом исследовании мы сосредоточены на улучшении методов диагностики тиннитуса. Пройдя серию диагностических упражнений и нейроупражнений, вы сможете помочь нам собрать важные данные, которые будут использованы для более точного понимания и лечения этого состояния."
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 47,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImportanceCards"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$ImportanceCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        image: 'audio-waves',
                                        title: 'Возможность снизить симптомы тиннитуса',
                                        description: 'С помощью упражнений и терапии вы сможете почувствовать улучшение состояния.'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 49,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$ImportanceCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        image: 'vrach',
                                        title: 'Личное внимание и помощь от профессионалов',
                                        description: 'Наши специалисты всегда рядом, чтобы помочь вам на каждом этапе.'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 50,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$ImportanceCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        image: 'heart-hands',
                                        title: 'Рекомендации по улучшению качества жизни',
                                        description: 'Вы получите советы, которые помогут вам улучшить ваше состояние в долгосрочной перспективе.'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 51,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 48,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonHome"], {
                                href: '/register',
                                $width: 410,
                                $primary: true,
                                children: "Присоединиться к иследованию"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 53,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 45,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HowItWorksSection"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HowItWorksHeader"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TitleHome"], {
                                        children: [
                                            "Как работает наша",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 58,
                                                columnNumber: 49
                                            }, this),
                                            "программа  по",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 58,
                                                columnNumber: 67
                                            }, this),
                                            "исследованию тиннитуса?"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 58,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DescriptionHome"], {
                                        children: "В рамках нашей программы вы будете ежедневно получать задания и упражнения. Эти задания помогут вам лучше справляться с тиннитусом. Мы также будем отправлять вам напоминания, чтобы вы не забывали выполнять упражнения."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 59,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 57,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HowItWorksCards"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$HowItWorksCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        image: 'to_do_list',
                                        title: 'Подключение к исследованию за несколько шагов',
                                        description: 'Зарегистрируйтесь через простую форму или с помощью ВКонтакте/Телеграма. После этого получите доступ к программе и начните исследования.'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 62,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$HowItWorksCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        image: 'questionnaire',
                                        title: 'Ежедневные задания для контроля состояния',
                                        description: 'Каждый день выполняйте тесты и упражнения для диагностики и улучшения состояния. Программа адаптируется к вашему прогрессу.'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 63,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$HowItWorksCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        image: 'reminder',
                                        title: 'Поддержка на каждом шаге исследования',
                                        description: 'Получайте напоминания и рекомендации, чтобы не забывать выполнять задания и поддерживать прогресс.'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 64,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 61,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 56,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 44,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TitleHome"], {
                        children: "Присоединяйтесь к исследованию"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 70,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DescriptionHome"], {
                        children: "Станьте частью программы и помогите улучшить жизнь людей, страдающих от тиннитуса"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 71,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonHome"], {
                        href: '/register',
                        $width: 330,
                        $primary: true,
                        children: "Присоединиться"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 72,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 69,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_5490b667._.js.map
module.exports = {

"[project]/src/components/UI/WindowBlock.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/styles/colors.ts [app-ssr] (ecmascript)");
;
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
        text-wrap: nowrap;
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
    @media (max-width: 700px) {
        p{
            &.description-start{
                width: 100%;
            }
        }
    }
    @media (max-width: 550px) {
        width: 100vw;
        padding: 32px 16px;
        h2{
            font-size: 30px;
        }
        p{
            &.description-mini{
                font-size: 14px;
                width: 110%;
                margin-top: 14px;
            }
            &.description-start{
                font-size: 16px;
            }
        }
    }
    @media (max-width: 400px) {
        h2{
            font-size: 28px;
        }
        p{
            &.description-mini{
                font-size: 12px;
                margin-top: 12px;
                width: 120%;
            }
            &.description-start{
                font-size: 14px;
            }
        }
    }
`;
const WindowBlock = ({ children })=>{
    const isEmpty = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].count(children) === 0;
    if (isEmpty) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Wrapper, {
        className: 'content',
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/UI/WindowBlock.tsx",
        lineNumber: 101,
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
        from { opacity: 0; transform: translateY(16px) scale(0.9); }
        to { opacity: 1; transform: translateY(0) scale(1); }
    }
    @media (max-width: 500px) {
        padding: 0;
    }}
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
    width: 100%;
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
    @media (max-width: 500px) {
        margin: 12px 0;
        button{
            height: 45px;
            font-size: 20px;
            margin-top: 14px;
        }
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
    @media (max-width: 500px) {
        font-size: 20px;
        height: ${({ $message })=>$message ? "112%" : "100%"};
        padding: 3.2%;
    }
    @media (max-width: 400px) {
        padding: 3.2%;
    }
    @media (max-width: 320px) {
        padding: 4%;
    }
`;
}),
"[project]/src/app/tests/page.styled.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "ButtonTest": ()=>ButtonTest,
    "ButtonsWrapper": ()=>ButtonsWrapper,
    "FormTest": ()=>FormTest,
    "QuestionBlock": ()=>QuestionBlock,
    "TestSection": ()=>TestSection,
    "TextAreaStyled": ()=>TextAreaStyled,
    "TitleTest": ()=>TitleTest
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/styles/colors.ts [app-ssr] (ecmascript)");
;
;
const TestSection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "page.styled__TestSection",
    componentId: "sc-e591badf-0"
})`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 32px;
    width: 600px;
    @media (max-width: 700px) {
        max-width: 500px;
        h2{
            font-size: 30px;
        }
    }
    @media (max-width: 550px) {
        max-width: 470px;
        h2{
            font-size: 26px;
        }
    }
    @media (max-width: 500px) {
        max-width: 100%;
        h2{
            font-size: 24px;
        }
    }
`;
const TitleTest = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "page.styled__TitleTest",
    componentId: "sc-e591badf-1"
})`
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    h2{
        text-align: start;
        text-wrap: wrap;
    }
`;
const FormTest = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].form.withConfig({
    displayName: "page.styled__FormTest",
    componentId: "sc-e591badf-2"
})`
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    width: 100%;
    gap: 16px;
    @media (max-width: 700px) {
        gap: 14px;
    }
`;
const QuestionBlock = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].label.withConfig({
    displayName: "page.styled__QuestionBlock",
    componentId: "sc-e591badf-3"
})`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 12px;
    p{
        text-align: start;
        font-size: 20px;
        font-weight: 400;
        color: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blackColor"]};
    }
    @media (max-width: 700px) {
        p{
            font-size: 18px;
        }
    }
    @media (max-width: 500px) {
        p{
            font-size: 16px;
        }
    }
`;
const ButtonsWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "page.styled__ButtonsWrapper",
    componentId: "sc-e591badf-4"
})`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    @media (max-width: 700px) {
        button{
            font-size: 22px;
            height: 47px;
        }
        button:nth-last-child(1){
            width: 170px;
        }
        button:nth-last-child(2){
            width: 150px;
        }
    }
`;
const ButtonTest = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "page.styled__ButtonTest",
    componentId: "sc-e591badf-5"
})`
    border-radius: 6px;
    background: ${({ $primary })=>$primary ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["primaryColor"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lightGrayColor"]};
    font-size: 24px;
    font-weight: 700;
    font-family: var(--font-manrope), serif;
    color: ${({ $primary })=>$primary ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whiteColor"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blackColor"]};
    width:  ${({ $primary })=>$primary ? '200px' : '150px'};
    height: 56px;
    transition: background .4s ease, color .4s ease;
    
    &:disabled{
        background: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lightGrayColor"]};
        color: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blackColor"]};
        cursor: auto;
    }
`;
const TextAreaStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].textarea.withConfig({
    displayName: "page.styled__TextAreaStyled",
    componentId: "sc-e591badf-6"
})`
    background: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lightGrayColor"]};
    padding: 12px 10px;
    border-radius: 10px;
    
    resize: none;
    height: 110px;
    width: 100%;
    margin-top: 8px;

    font-size: 18px;
    font-family: var(--font-manrope), serif;
    color: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blackColor"]};
    @media (max-width: 700px) {
        font-size: 16px;
        padding: 10px 8px;
        height: 90px;
    }
`;
}),
"[project]/src/components/UI/ProgressBar.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    displayName: "ProgressBar__Wrapper",
    componentId: "sc-2b648f3c-0"
})`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 14px;
    width: 100%;
`;
const ProgressStyled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].progress.withConfig({
    displayName: "ProgressBar__ProgressStyled",
    componentId: "sc-2b648f3c-1"
})`
    height: 14px;
    width: 100%;
    border-radius: 12px;
    overflow: hidden;

    &::-webkit-progress-bar {
        background-color: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GrayColor"]};
        border-radius: 12px;
    }

    &::-webkit-progress-value {
        background-color: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["primaryColor"]};
        border-radius: 12px;
        transition: width 0.3s;
    }

    &::-moz-progress-bar {
        background-color: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["primaryColor"]};
        border-radius: 12px;
    }
    @media (max-width: 430px) {
        height: 12px;
    }
`;
const Percent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "ProgressBar__Percent",
    componentId: "sc-2b648f3c-2"
})`
    font-size: 20px !important;
    color:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["textColor"]};
    font-weight: 700;
    font-family: var(--font-manrope), serif;
    @media (max-width: 430px) {
        font-size: 18px !important;
    }
`;
const ProgressBar = ({ totalQuestions, currentQuestion })=>{
    const percent = Math.round(currentQuestion / totalQuestions * 100);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Wrapper, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProgressStyled, {
                max: totalQuestions,
                value: currentQuestion
            }, void 0, false, {
                fileName: "[project]/src/components/UI/ProgressBar.tsx",
                lineNumber: 58,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Percent, {
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
const __TURBOPACK__default__export__ = ProgressBar;
}),
"[project]/src/components/UI/Reception.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
const CheckBoxLabel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].label.withConfig({
    displayName: "Reception__CheckBoxLabel",
    componentId: "sc-45e736c2-0"
})`
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 16px;
    font-family: var(--font-manrope);
    color: #333;
`;
const StyledCheckbox = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].input.withConfig({
    displayName: "Reception__StyledCheckbox",
    componentId: "sc-45e736c2-1"
})`
    display: none; 

    &:checked + span {
        background-color: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["primaryColor"]}; 
        border-color: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["primaryColor"]};
    }

    &:checked + span svg {
        opacity: 1;  
    }
`;
const CheckboxWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "Reception__CheckboxWrapper",
    componentId: "sc-45e736c2-2"
})`
    width: 28px;
    height: 28px;
    border: 2px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lightGrayColor"]};
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;  

    svg {
        opacity: 0;  
        transition: opacity 0.3s ease; 
    }
    @media (max-width: 500px) {
        width: 22px;
        height: 22px;
    }
    @media (max-width: 350px) {
        width: 18px;
        height: 18px;
    }
`;
const Reception = ({ isReception, setIsReception, type })=>{
    const handleCheckboxChange = (event)=>{
        setIsReception(event.target.checked);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckBoxLabel, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledCheckbox, {
                type: type ? type : 'checkbox',
                checked: isReception,
                onChange: handleCheckboxChange
            }, void 0, false, {
                fileName: "[project]/src/components/UI/Reception.tsx",
                lineNumber: 64,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckboxWrapper, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "28",
                    height: "28",
                    viewBox: "0 0 28 28",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
const __TURBOPACK__default__export__ = Reception;
}),
"[project]/src/app/tests/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$WindowBlock$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/WindowBlock.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(auth)/page.styled.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$tests$2f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/tests/page.styled.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$ProgressBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/ProgressBar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Reception$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/Reception.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/request.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$streakStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/streakStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
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
    const [questions, setQuestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [interstitialTexts, setInterstitialTexts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isStreakLoaded, setIsStreakLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const streakDay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$streakStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["streak"])();
    const testDay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$streakStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTestDay"])();
    // Текстовые вставки
    const interstitials = {
        12: {
            title: "Госпитальная шкала тревоги и депрессии (HADS). Ответьте, пожалуйста, на следующие вопросы:",
            text: "Часть 1. Тревога. Каждому утверждению соответствуют 4 варианта ответа. Выберите тот из ответов, который соответствует Вашему состоянию:"
        },
        19: {
            title: "Госпитальная шкала тревоги и депрессии (HADS). Ответьте, пожалуйста, на следующие вопросы:",
            text: "Часть 2. Депрессия. Каждому утверждению соответствуют 4 варианта ответа. Выберите тот из ответов, который соответствует Вашему состоянию:"
        },
        26: {
            title: "Ниже вы найдете 13 утверждений, описывающих различные мысли и чувства, которые могут быть связаны с шумом в ушах у вас.",
            text: "Шкала катастрофизации тиннитуса (TCS). Шкала катастрофизации тиннитуса направлена на определение мыслей и чувств, которые вы испытываете при ощущении шума в ушах. С помощью данного опросника мы хотим выяснить, какое влияние оказывает шум в ушах на ваше состояние: на настроение, поведение, отношение."
        }
    };
    // 1) Загружаем streak в стор и отмечаем готовность
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let mounted = true;
        (async ()=>{
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$streakStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadStreak"])();
                if (mounted) setIsStreakLoaded(true);
            } catch (err) {
                console.log(err);
                if (mounted) setIsStreakLoaded(true);
            }
        })();
        return ()=>{
            mounted = false;
        };
    }, []);
    // 2) После загрузки streak реагируем на актуальное значение testDay
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isStreakLoaded) return;
        if (!testDay) {
            router.push("/instruction");
            return;
        }
        (async ()=>{
            try {
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkService"].questions();
                setQuestions(res.data.questions);
            } catch (err) {
                console.log(err);
                setQuestions([]);
            }
        })();
    }, [
        isStreakLoaded,
        testDay,
        router
    ]);
    const handleSubmit = async ()=>{
        const outAnswers = Object.entries(answers).map(([key, value])=>{
            const questionId = Number(key);
            const questionMeta = questions.find((q)=>q.id === questionId);
            const out = {
                question: questionId
            };
            if (value.selected && value.selected.length > 0) {
                if (questionMeta?.type === 'single') {
                    out.selected = value.selected[0];
                } else if (questionMeta?.type === 'multiple') {
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
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkService"].answers(payload);
        router.push("/instruction");
    };
    // Изменение состояния ответов
    const handleMultipleChange = (qId, optionId, checked)=>{
        setAnswers((prev)=>{
            const prevAns = prev[qId]?.selected || [];
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
            return !!ans?.selected && ans.selected.length > 0;
        }
        if (question.type === 'input') {
            return !!ans?.input && ans.input.trim() !== '';
        }
        return false;
    };
    const currentQuestion = questions[currentQuestionIndex];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$auth$292f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BackgroundPage"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$WindowBlock$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            children: currentQuestion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$tests$2f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TestSection"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$tests$2f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TitleTest"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$ProgressBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                totalQuestions: questions.length,
                                currentQuestion: currentQuestionIndex + 1
                            }, void 0, false, {
                                fileName: "[project]/src/app/tests/page.tsx",
                                lineNumber: 202,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            !interstitialTexts && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: currentQuestion.question
                            }, void 0, false, {
                                fileName: "[project]/src/app/tests/page.tsx",
                                lineNumber: 206,
                                columnNumber: 52
                            }, ("TURBOPACK compile-time value", void 0)),
                            interstitialTexts && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: interstitialTexts.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/tests/page.tsx",
                                lineNumber: 207,
                                columnNumber: 51
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/tests/page.tsx",
                        lineNumber: 201,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$tests$2f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormTest"], {
                        id: "questionForm",
                        onSubmit: handleNextQuestion,
                        children: interstitialTexts ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$tests$2f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QuestionBlock"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    cursor: "auto"
                                },
                                children: interstitialTexts.text
                            }, void 0, false, {
                                fileName: "[project]/src/app/tests/page.tsx",
                                lineNumber: 212,
                                columnNumber: 37
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/tests/page.tsx",
                            lineNumber: 211,
                            columnNumber: 33
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                currentQuestion.type === 'multiple' && currentQuestion.options?.map((opt)=>{
                                    const selected = answers[currentQuestion.id]?.selected || [];
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$tests$2f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QuestionBlock"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Reception$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                isReception: selected.includes(opt.id),
                                                setIsReception: (checked)=>handleMultipleChange(currentQuestion.id, opt.id, checked)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/tests/page.tsx",
                                                lineNumber: 221,
                                                columnNumber: 53
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: opt.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/tests/page.tsx",
                                                lineNumber: 227,
                                                columnNumber: 53
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, opt.id, true, {
                                        fileName: "[project]/src/app/tests/page.tsx",
                                        lineNumber: 220,
                                        columnNumber: 49
                                    }, ("TURBOPACK compile-time value", void 0));
                                }),
                                currentQuestion.type === 'single' && currentQuestion.options?.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$tests$2f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QuestionBlock"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$Reception$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                type: "radio",
                                                isReception: answers[currentQuestion.id]?.selected?.[0] === opt.id,
                                                setIsReception: (checked)=>checked && handleSingleChange(currentQuestion.id, opt.id)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/tests/page.tsx",
                                                lineNumber: 234,
                                                columnNumber: 49
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: opt.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/tests/page.tsx",
                                                lineNumber: 241,
                                                columnNumber: 49
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, opt.id, true, {
                                        fileName: "[project]/src/app/tests/page.tsx",
                                        lineNumber: 233,
                                        columnNumber: 45
                                    }, ("TURBOPACK compile-time value", void 0))),
                                currentQuestion.input && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$tests$2f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextAreaStyled"], {
                                    placeholder: currentQuestion.input,
                                    value: answers[currentQuestion.id]?.input || '',
                                    onChange: (e)=>handleInputChange(currentQuestion.id, e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/tests/page.tsx",
                                    lineNumber: 245,
                                    columnNumber: 41
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/app/tests/page.tsx",
                        lineNumber: 209,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$tests$2f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonsWrapper"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$tests$2f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonTest"], {
                                onClick: handlePrevQuestion,
                                disabled: currentQuestionIndex === 0 && !interstitialTexts,
                                children: "Назад"
                            }, void 0, false, {
                                fileName: "[project]/src/app/tests/page.tsx",
                                lineNumber: 256,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$tests$2f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonTest"], {
                                $primary: true,
                                disabled: !interstitialTexts && !isAnswered(currentQuestion),
                                type: interstitialTexts ? 'button' : 'submit',
                                onClick: interstitialTexts ? handleNextFromInterstitial : undefined,
                                form: "questionForm",
                                children: currentQuestionIndex === questions.length - 1 && !interstitialTexts ? 'Отправить' : 'Далее'
                            }, void 0, false, {
                                fileName: "[project]/src/app/tests/page.tsx",
                                lineNumber: 257,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/tests/page.tsx",
                        lineNumber: 255,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/tests/page.tsx",
                lineNumber: 200,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/tests/page.tsx",
            lineNumber: 198,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/tests/page.tsx",
        lineNumber: 197,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = QuestionsForm;
}),

};

//# sourceMappingURL=src_e1746c3c._.js.map
module.exports = {

"[project]/src/app/page.styled.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/styles/colors.ts [app-ssr] (ecmascript)");
;
;
;
const ContainerHome = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].section.withConfig({
    displayName: "page.styled__ContainerHome",
    componentId: "sc-5a1fa87c-0"
})`
    max-width: 1520px;
    margin: 0 auto;
    width: 90%;
    
    @media (max-width: 1519px) {
        width: 95%;
        max-width: 100%;
    }
    
    @media (max-width: 1200px) {
        width: 90%;
    }
    
    @media (max-width: 768px) {
        width: 100%;
        padding: 0 20px;
    }
`;
const ButtonHome = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]).withConfig({
    displayName: "page.styled__ButtonHome",
    componentId: "sc-5a1fa87c-1"
})`
    height: 48px;
    text-wrap: nowrap;
    width: ${({ $width })=>$width}px;
    border-radius: 8px;
    background: ${({ $primary })=>$primary ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["primaryColor"] : "transparent"};
    color: ${({ $primary })=>$primary ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whiteColor"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["primaryColor"]};
    border: 1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["primaryColor"]};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: clamp(14px, 1.5vw, 20px);
    font-family: var(--font-montserrat);
    font-weight: 500;
    transition: background-color .4s, color .4s;
    &:hover {
        background: ${({ $primary })=>$primary ? "transparent" : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["primaryColor"]};
        color: ${({ $primary })=>$primary ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["primaryColor"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whiteColor"]};
    }
    
    @media (max-width: 1200px) {
        height: 44px;
        width: ${({ $width })=>$width - 20}px;
    }
    @media (max-width: 1000px) {
        height: 36px;
        width: ${({ $width })=>$width - 40}px;
    }
    @media (max-width: 768px) {
        font-size: 16px;
        height: 40px;
    }
`;
const TitleHome = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].h2.withConfig({
    displayName: "page.styled__TitleHome",
    componentId: "sc-5a1fa87c-2"
})`
    color: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["primaryColor"]};
    font-size: clamp(28px, 4vw, 55px);
    font-family: var(--font-montserrat);
    font-weight: 700;
    line-height: 1;
    
    @media (max-width: 768px) {
        text-align: center;
        font-size: clamp(20px, 6vw, 42px);
    }
    @media (max-width: 420px) {
        font-size: clamp(20px, 8vw, 42px);
    }
`;
const DescriptionHome = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "page.styled__DescriptionHome",
    componentId: "sc-5a1fa87c-3"
})`
    font-family: var(--font-manrope), serif;
    font-size: clamp(16px, 1.5vw, 22px);
    color: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blackColor"]};
    width: 90%;
    
    @media (max-width: 768px) {
        text-align: center;
        font-size: clamp(14px, 1vw, 20px);
    }
    
`;
const InitialSection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].section.withConfig({
    displayName: "page.styled__InitialSection",
    componentId: "sc-5a1fa87c-4"
})`
    background-image: url("/backgrounds/mainHeader.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 928px;

    @media (max-width: 1400px) {
        height: 800px;
    }
    
    @media (max-width: 1200px) {
        height: 700px;
    }
    
    @media (max-width: 768px) {
        height: 600px;
    }
    @media (max-width: 500px) {
        height: 500px;
    }
    
`;
const InitialContent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "page.styled__InitialContent",
    componentId: "sc-5a1fa87c-5"
})`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 100px;
    
    @media (max-width: 1400px) {
        margin-top: 80px;
        gap: 30px;
    }
    
    @media (max-width: 1200px) {
        margin-top: 80px;
        gap: 40px;
    }
    
    @media (max-width: 768px) {
        flex-direction: column;
        margin-top: 60px;
        gap: 30px;
        text-align: center;
    }
`;
const Header = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].header.withConfig({
    displayName: "page.styled__Header",
    componentId: "sc-5a1fa87c-6"
})`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 12px;
    
    @media (max-width: 768px) {
        padding-top: 20px;
    }
    @media (max-width: 600px) {
        .logo{
            content: url("/icons/logo.svg");
            width: 64px;
            height: 64px;
        }
    }
`;
const ButtonContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "page.styled__ButtonContainer",
    componentId: "sc-5a1fa87c-7"
})`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 24px;

    @media (max-width: 1000px) {
        gap: 16px;
    }
    @media (max-width: 768px) {
        gap: 16px;
        justify-content: center;
    }
    @media (max-width: 450px) {
        &:nth-child(2){
            & > a:first-of-type {
                display: none;
            }
        }
        &:nth-child(3){
            & > a:nth-last-child(1) {
                display: none;
            }
        }
    }
    
`;
const InitialText = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "page.styled__InitialText",
    componentId: "sc-5a1fa87c-8"
})`
    width: max-content;
    h1{
        font-family: var(--font-montserrat);
        font-weight: 800;
        font-size: clamp(42px, 6vw, 90px);
        line-height: 0.9; 
        color: #000;
        width: max-content;
        
        @media (max-width: 768px) {
            width: 100%;
            text-align: center;
            font-size: clamp(24px, 8vw, 64px);
            line-height: 1;
        }
        
    }
    p{
        margin: 80px 0 40px;
        max-width: 640px;

        @media (max-width: 1400px) {
            margin: 60px 0 30px;
            max-width: 580px;
        }
        
        @media (max-width: 1200px) {
            margin: 40px 0 20px;
            max-width: 540px;
        }
        
        @media (max-width: 768px) {
            margin: 40px 0 20px;
            max-width: 100%;
            width: 100%;
        }
    }
    
    @media (max-width: 768px) {
        width: 100%;
    }
`;
const InitialImage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "page.styled__InitialImage",
    componentId: "sc-5a1fa87c-9"
})`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 605px;
    height: 557px;

    @media (max-width: 1400px) {
        width: 550px;
        height: 500px;
    }
    
    @media (max-width: 1200px) {
        width: 500px;
        height: 460px;
    }
    
    @media (max-width: 768px) {
        display: none;
    }
`;
const ImportanceSection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].section.withConfig({
    displayName: "page.styled__ImportanceSection",
    componentId: "sc-5a1fa87c-10"
})`
    margin-top: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .description{
        text-align: center;
        margin: 44px 0 80px;
        
        @media (max-width: 768px) {
            margin: 30px 0 50px;
        }
        @media (max-width: 1100px) {
            margin: 10px 0 40px;
        }
    }
    
    @media (max-width: 768px) {
        margin-top: 80px;
    }
    @media (max-width: 468px) {
        a{
            width: 300px;
        }
    }
`;
const ImportanceCards = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "page.styled__ImportanceCards",
    componentId: "sc-5a1fa87c-11"
})`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: clamp(40px, 5vw, 64px);
    
    @media (max-width: 1400px) {
        gap: 30px;
        flex-wrap: wrap;
        justify-content: center;
    }
    
    @media (max-width: 1200px) {
        gap: 30px;
        flex-wrap: wrap;
        justify-content: center;
    }
    
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 24px;
    }
`;
const HowItWorksSection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].section.withConfig({
    displayName: "page.styled__HowItWorksSection",
    componentId: "sc-5a1fa87c-12"
})`
    margin-top: 190px;
    
    @media (max-width: 768px) {
        margin-top: 120px;
    }
`;
const HowItWorksHeader = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "page.styled__HowItWorksHeader",
    componentId: "sc-5a1fa87c-13"
})`
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin-bottom: 80px;
    h2{
        width: max-content;
        
        
        @media (max-width: 768px) {
            width: 100%;
            margin-bottom: 30px;
        }
    }
    p{
        max-width: 543px;
        width: 100%;
        @media (max-width: 1200px) {
            width: 40%;
        }
        @media (max-width: 768px) {
            width: 100%;
        }
    }
    
    @media (max-width: 768px) {
        flex-direction: column;
        margin-bottom: 50px;
        text-align: center;
        align-items: center;
    }
`;
const HowItWorksCards = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "page.styled__HowItWorksCards",
    componentId: "sc-5a1fa87c-14"
})`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    @media (max-width: 1400px) {
        gap: 30px;
        flex-wrap: wrap;
        justify-content: center;
    }
    @media (max-width: 1200px) {
        gap: 40px;
        flex-wrap: wrap;
        justify-content: center;
    }
    
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 30px;
    }
`;
const Footer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].footer.withConfig({
    displayName: "page.styled__Footer",
    componentId: "sc-5a1fa87c-15"
})`
    margin-top: 190px;
    background-image: url("/backgrounds/mainHeader.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 458px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    h2{
        color: #000;
        width: 558px;
        text-align: center;
        line-height: 1;
        
        @media (max-width: 768px) {
            width: 100%;
        }
    }
    p{
        text-align: center;
        width: 560px;
        margin: 28px 0 36px;
        
        @media (max-width: 768px) {
            width: 80%;
            margin: 20px 0 24px;
        }
    }
    
    @media (max-width: 768px) {
        margin-top: 120px;
        height: 350px;
        padding: 0 20px;
    }
    
    @media (max-width: 480px) {
        height: 300px;
    }
`;
}),
"[project]/src/components/home/ImportanceCard.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/styles/colors.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
;
;
;
;
const Wrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ImportanceCard__Wrapper",
    componentId: "sc-69d50d02-0"
})`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background-color: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lightGrayColor"]};
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
const Title = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].h3.withConfig({
    displayName: "ImportanceCard__Title",
    componentId: "sc-69d50d02-1"
})`
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
`;
const Description = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "ImportanceCard__Description",
    componentId: "sc-69d50d02-2"
})`
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
`;
const ImportanceCard = ({ image, title, description })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Wrapper, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                width: 128,
                height: 128,
                src: `/icons/${image}.svg`,
                alt: image
            }, void 0, false, {
                fileName: "[project]/src/components/home/ImportanceCard.tsx",
                lineNumber: 110,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/home/ImportanceCard.tsx",
                lineNumber: 111,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Description, {
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
const __TURBOPACK__default__export__ = ImportanceCard;
}),
"[project]/src/components/home/HowItWorksCard.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
;
;
;
const Wrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "HowItWorksCard__Wrapper",
    componentId: "sc-f560b31a-0"
})`
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
const Title = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].h3.withConfig({
    displayName: "HowItWorksCard__Title",
    componentId: "sc-f560b31a-1"
})`
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
`;
const Description = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "HowItWorksCard__Description",
    componentId: "sc-f560b31a-2"
})`
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
`;
const ImportanceCard = ({ image, title, description })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Wrapper, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                width: 80,
                height: 80,
                src: `/icons/${image}.svg`,
                alt: image
            }, void 0, false, {
                fileName: "[project]/src/components/home/HowItWorksCard.tsx",
                lineNumber: 80,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/home/HowItWorksCard.tsx",
                lineNumber: 81,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Description, {
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
const __TURBOPACK__default__export__ = ImportanceCard;
}),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>Home
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/page.styled.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$ImportanceCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/home/ImportanceCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$HowItWorksCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/home/HowItWorksCard.tsx [app-ssr] (ecmascript)");
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
function Home() {
    const [isAuth, setAuth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const isAuth = async ()=>{
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$request$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkService"].isAuth();
            if (res.status === 200) {
                setAuth(true);
            } else {
                setAuth(false);
            }
        };
        isAuth();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InitialSection"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContainerHome"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Header"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    width: 212,
                                    height: 75,
                                    src: "/icons/logo-text.svg",
                                    alt: "logo",
                                    className: 'logo'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 37,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonContainer"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonHome"], {
                                            href: '#info',
                                            $width: 200,
                                            children: "Узнать больше"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 39,
                                            columnNumber: 25
                                        }, this),
                                        isAuth ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonHome"], {
                                            href: '/tests',
                                            $width: 260,
                                            $primary: true,
                                            children: "Начать упражнение"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 41,
                                            columnNumber: 31
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonHome"], {
                                            href: '/register',
                                            $width: 190,
                                            $primary: true,
                                            children: "Регистрация"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 42,
                                            columnNumber: 31
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 38,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 36,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InitialContent"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InitialText"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            children: [
                                                "Программа",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 48,
                                                    columnNumber: 38
                                                }, this),
                                                "исследования",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 48,
                                                    columnNumber: 55
                                                }, this),
                                                "тиннитуса"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 48,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DescriptionHome"], {
                                            children: "Присоединяйтесь к нашему исследованию и помогите улучшить методы диагностики и лечения тиннитуса. Ваше участие важно для нас и для улучшения жизни людей с этим состоянием."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 49,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonContainer"], {
                                            children: [
                                                isAuth ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonHome"], {
                                                    href: '/tests',
                                                    $width: 260,
                                                    $primary: true,
                                                    children: "Начать упражнение"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 52,
                                                    columnNumber: 35
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonHome"], {
                                                    href: '/register',
                                                    $width: 210,
                                                    $primary: true,
                                                    children: "Присоединиться"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 53,
                                                    columnNumber: 35
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonHome"], {
                                                    href: '#info',
                                                    $width: 210,
                                                    children: "Узнать больше"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 50,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 47,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InitialImage"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        width: 0,
                                        height: 0,
                                        layout: "responsive",
                                        src: "/images/mainHeader.png",
                                        alt: "Начальная картинка"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 59,
                                        columnNumber: 25
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 58,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 46,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 35,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContainerHome"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImportanceSection"], {
                        id: 'info',
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TitleHome"], {
                                children: "Почему ваше участие так важно?"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 68,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DescriptionHome"], {
                                className: 'description',
                                children: "В этом исследовании мы сосредоточены на улучшении методов диагностики тиннитуса. Пройдя серию диагностических упражнений и нейроупражнений, вы сможете помочь нам собрать важные данные, которые будут использованы для более точного понимания и лечения этого состояния."
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 69,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImportanceCards"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$ImportanceCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        image: 'audio-waves',
                                        title: 'Возможность снизить симптомы тиннитуса',
                                        description: 'С помощью упражнений и терапии вы сможете почувствовать улучшение состояния.'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 71,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$ImportanceCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        image: 'vrach',
                                        title: 'Личное внимание и помощь от профессионалов',
                                        description: 'Наши специалисты всегда рядом, чтобы помочь вам на каждом этапе.'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 72,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$ImportanceCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        image: 'heart-hands',
                                        title: 'Рекомендации по улучшению качества жизни',
                                        description: 'Вы получите советы, которые помогут вам улучшить ваше состояние в долгосрочной перспективе.'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 73,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 70,
                                columnNumber: 17
                            }, this),
                            isAuth ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonHome"], {
                                href: '/tests',
                                $width: 410,
                                $primary: true,
                                children: "Перейти к упражнению"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 76,
                                columnNumber: 23
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonHome"], {
                                href: '/register',
                                $width: 410,
                                $primary: true,
                                children: "Присоединиться к исследованию"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 77,
                                columnNumber: 23
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 67,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HowItWorksSection"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HowItWorksHeader"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TitleHome"], {
                                        children: [
                                            "Как работает наша",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 83,
                                                columnNumber: 49
                                            }, this),
                                            "программа  по",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 83,
                                                columnNumber: 67
                                            }, this),
                                            "исследованию тиннитуса?"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 83,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DescriptionHome"], {
                                        children: "В рамках нашей программы вы будете ежедневно получать задания и упражнения. Эти задания помогут вам лучше справляться с тиннитусом. Мы также будем отправлять вам напоминания, чтобы вы не забывали выполнять упражнения."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 84,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 82,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HowItWorksCards"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$HowItWorksCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        image: 'to_do_list',
                                        title: 'Подключение к исследованию за несколько шагов',
                                        description: 'Зарегистрируйтесь через простую форму или с помощью ВКонтакте/Телеграма. После этого получите доступ к программе и начните исследования.'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 87,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$HowItWorksCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        image: 'questionnaire',
                                        title: 'Ежедневные задания для контроля состояния',
                                        description: 'Каждый день выполняйте тесты и упражнения для диагностики и улучшения состояния. Программа адаптируется к вашему прогрессу.'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 88,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$HowItWorksCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        image: 'reminder',
                                        title: 'Поддержка на каждом шаге исследования',
                                        description: 'Получайте напоминания и рекомендации, чтобы не забывать выполнять задания и поддерживать прогресс.'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 89,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 86,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 81,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 66,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Footer"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TitleHome"], {
                        children: "Присоединяйтесь к исследованию"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 95,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DescriptionHome"], {
                        children: "Станьте частью программы и помогите улучшить жизнь людей, страдающих от тиннитуса"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 96,
                        columnNumber: 13
                    }, this),
                    isAuth ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonHome"], {
                        href: '/tests',
                        $width: 410,
                        $primary: true,
                        children: "Перейти к упражнению"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 98,
                        columnNumber: 19
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$styled$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ButtonHome"], {
                        href: '/register',
                        $width: 410,
                        $primary: true,
                        children: "Присоединиться"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 99,
                        columnNumber: 19
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 94,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
}),

};

//# sourceMappingURL=src_4e934a38._.js.map
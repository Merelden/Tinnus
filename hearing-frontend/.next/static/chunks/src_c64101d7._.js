(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/providers/ModalProvider.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__,
    "useModal": ()=>useModal
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const ModalContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const ModalProvider = (param)=>{
    let { children } = param;
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [modalContent, setModalContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const openModal = (content)=>{
        setModalContent(content);
        setIsOpen(true);
    };
    const closeModal = ()=>{
        setModalContent(null);
        setIsOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ModalContext.Provider, {
        value: {
            isOpen,
            modalContent,
            openModal,
            closeModal
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/providers/ModalProvider.tsx",
        lineNumber: 27,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ModalProvider, "uz+lJDR4Nz+RpOcBS5amzLRNoPM=");
_c = ModalProvider;
const __TURBOPACK__default__export__ = ModalProvider;
const useModal = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};
_s1(useModal, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "ModalProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/api/request.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "NetworkService": ()=>NetworkService
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].defaults.withCredentials = true;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].defaults.xsrfCookieName = "csrftoken";
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].defaults.xsrfHeaderName = 'X-CSRFToken';
function getApiBaseUrl() {
    const explicit = ("TURBOPACK compile-time truthy", 1) ? window.NEXT_PUBLIC_API_BASE_URL || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_BASE_URL : "TURBOPACK unreachable";
    if (explicit) return explicit;
    const host = ("TURBOPACK compile-time truthy", 1) ? window.location.hostname : "TURBOPACK unreachable";
    return "http://".concat(host, ":8000/api");
}
const axiosInstance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
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
    if (error.response && error.response.status === 403 && !(originalConfig === null || originalConfig === void 0 ? void 0 : originalConfig._retry)) {
        try {
            var _data, _this;
            originalConfig._retry = true;
            const res = await axiosInstance.get('/csrf/');
            inMemoryCsrfToken = getCookie('csrftoken') || ((_this = res) === null || _this === void 0 ? void 0 : (_data = _this.data) === null || _data === void 0 ? void 0 : _data.csrftoken) || null;
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
            var _data, _this;
            const res = await axiosInstance.get('/csrf/');
            inMemoryCsrfToken = getCookie('csrftoken') || ((_this = res) === null || _this === void 0 ? void 0 : (_data = _this.data) === null || _data === void 0 ? void 0 : _data.csrftoken) || null;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/store/streakStore.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "isTestDay": ()=>isTestDay,
    "lastVisitDate": ()=>lastVisitDate,
    "loadStreak": ()=>loadStreak,
    "nextTestDay": ()=>nextTestDay,
    "streak": ()=>streak,
    "streakLoaded": ()=>streakLoaded,
    "studyGroup": ()=>studyGroup
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/request.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature();
;
;
const useStreakStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((set)=>({
        isTestDay: false,
        lastVisitDate: "",
        nextTestDay: 0,
        streak: 0,
        studyGroup: 0,
        loaded: false,
        loadStreak: async ()=>{
            try {
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$request$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetworkService"].streak();
                if (res && res.status === 200) {
                    set({
                        isTestDay: res.data.is_test_day,
                        lastVisitDate: res.data.last_visit_date,
                        nextTestDay: res.data.next_test_day,
                        streak: res.data.streak,
                        studyGroup: res.data.study_group,
                        loaded: true
                    });
                } else {
                    set({
                        loaded: true
                    });
                }
            } catch (e) {
                set({
                    loaded: true
                });
            }
        }
    }));
const isTestDay = ()=>{
    _s();
    return useStreakStore({
        "isTestDay.useStreakStore": (state)=>state.isTestDay
    }["isTestDay.useStreakStore"]);
};
_s(isTestDay, "eUh7ZikZ7K+XGXyEUvWCdLikLH0=", false, function() {
    return [
        useStreakStore
    ];
});
const lastVisitDate = ()=>{
    _s1();
    return useStreakStore({
        "lastVisitDate.useStreakStore": (state)=>state.lastVisitDate
    }["lastVisitDate.useStreakStore"]);
};
_s1(lastVisitDate, "eUh7ZikZ7K+XGXyEUvWCdLikLH0=", false, function() {
    return [
        useStreakStore
    ];
});
const nextTestDay = ()=>{
    _s2();
    return useStreakStore({
        "nextTestDay.useStreakStore": (state)=>state.nextTestDay
    }["nextTestDay.useStreakStore"]);
};
_s2(nextTestDay, "eUh7ZikZ7K+XGXyEUvWCdLikLH0=", false, function() {
    return [
        useStreakStore
    ];
});
const streak = ()=>{
    _s3();
    return useStreakStore({
        "streak.useStreakStore": (state)=>state.streak
    }["streak.useStreakStore"]);
};
_s3(streak, "eUh7ZikZ7K+XGXyEUvWCdLikLH0=", false, function() {
    return [
        useStreakStore
    ];
});
const studyGroup = ()=>{
    _s4();
    return useStreakStore({
        "studyGroup.useStreakStore": (state)=>state.studyGroup
    }["studyGroup.useStreakStore"]);
};
_s4(studyGroup, "eUh7ZikZ7K+XGXyEUvWCdLikLH0=", false, function() {
    return [
        useStreakStore
    ];
});
const loadStreak = ()=>useStreakStore.getState().loadStreak();
const streakLoaded = ()=>{
    _s5();
    return useStreakStore({
        "streakLoaded.useStreakStore": (state)=>state.loaded
    }["streakLoaded.useStreakStore"]);
};
_s5(streakLoaded, "eUh7ZikZ7K+XGXyEUvWCdLikLH0=", false, function() {
    return [
        useStreakStore
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/providers/StreakInit.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>StreakInit
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$streakStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/streakStore.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function StreakInit() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StreakInit.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$streakStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadStreak"])();
        }
    }["StreakInit.useEffect"], []);
    return null;
}
_s(StreakInit, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = StreakInit;
var _c;
__turbopack_context__.k.register(_c, "StreakInit");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/styles/colors.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "GrayColor": ()=>GrayColor,
    "blackColor": ()=>blackColor,
    "lightGrayColor": ()=>lightGrayColor,
    "primaryColor": ()=>primaryColor,
    "redColor": ()=>redColor,
    "textColor": ()=>textColor,
    "whiteColor": ()=>whiteColor
});
const primaryColor = '#157AFE';
const whiteColor = '#fff';
const lightGrayColor = '#F5F7F9';
const GrayColor = '#EFEFEF';
const textColor = '#84868A';
const blackColor = '#333';
const redColor = '#FF6F61';
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/SubmitButton.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
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
        "\n    width: ",
        ";\n    height: ",
        ";\n    background-color: ",
        ";\n    border-radius: 6px;\n    transition: background-color .4s ease, color .4s ease, height .3s ease;\n    margin-top: ",
        "px;\n    \n    font-family: var(--font-manrope), serif;\n    font-weight: 500;\n    font-size: 22px;\n    color: ",
        ";\n    opacity: ",
        ";\n    \n    &:disabled {\n        background-color: ",
        ";\n        color: ",
        ";\n        cursor: auto;\n    }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
;
;
;
const StyledButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "SubmitButton__StyledButton",
    componentId: "sc-bc3a5cdf-0"
})(_templateObject(), (param)=>{
    let { $width } = param;
    return $width ? "".concat($width, "px") : "100%";
}, (param)=>{
    let { $height, $hidden } = param;
    return $hidden ? '0px' : $height ? "".concat($height, "px") : '50px';
}, (param)=>{
    let { $primary } = param;
    return $primary ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["primaryColor"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightGrayColor"];
}, (param)=>{
    let { $marginTop } = param;
    return $marginTop ? $marginTop : 0;
}, (param)=>{
    let { $primary } = param;
    return $primary ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["whiteColor"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blackColor"];
}, (param)=>{
    let { $hidden } = param;
    return $hidden ? 0 : 1;
}, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightGrayColor"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blackColor"]);
_c = StyledButton;
const SubmitButton = (param)=>{
    let { label, width = 200, height = 50, onClick, disabled, primary = false, hidden = false, marginTop = 0 } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledButton, {
        onClick: onClick,
        $width: width,
        $height: height,
        $primary: primary,
        disabled: disabled,
        $hidden: hidden,
        $marginTop: marginTop,
        children: label
    }, void 0, false, {
        fileName: "[project]/src/components/UI/SubmitButton.tsx",
        lineNumber: 39,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = SubmitButton;
const __TURBOPACK__default__export__ = SubmitButton;
var _c, _c1;
__turbopack_context__.k.register(_c, "StyledButton");
__turbopack_context__.k.register(_c1, "SubmitButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UI/Modal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ModalProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/providers/ModalProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/styles/colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$SubmitButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UI/SubmitButton.tsx [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0, 0, 0, 0.5);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 99;\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function _templateObject1() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    \n    background-color: ",
        ";\n    border-radius: 25px;\n    padding: 44px 36px;\n    z-index: 100;\n"
    ]);
    _templateObject1 = function() {
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
;
const ModalOverlay = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Modal__ModalOverlay",
    componentId: "sc-e64c54f4-0"
})(_templateObject());
_c = ModalOverlay;
const ModalContent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Modal__ModalContent",
    componentId: "sc-e64c54f4-1"
})(_templateObject1(), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["whiteColor"]);
_c1 = ModalContent;
const Modal = ()=>{
    _s();
    const { isOpen, closeModal, modalContent } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ModalProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModal"])();
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ModalOverlay, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ModalContent, {
            children: [
                modalContent,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UI$2f$SubmitButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    width: 200,
                    height: 45,
                    label: 'Закрыть',
                    onClick: closeModal,
                    marginTop: 24,
                    primary: true
                }, void 0, false, {
                    fileName: "[project]/src/components/UI/Modal.tsx",
                    lineNumber: 44,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/UI/Modal.tsx",
            lineNumber: 42,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/UI/Modal.tsx",
        lineNumber: 41,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Modal, "w0FgYVibhdCTKaNgKttIDWoz9OI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$providers$2f$ModalProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModal"]
    ];
});
_c2 = Modal;
const __TURBOPACK__default__export__ = Modal;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ModalOverlay");
__turbopack_context__.k.register(_c1, "ModalContent");
__turbopack_context__.k.register(_c2, "Modal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_c64101d7._.js.map
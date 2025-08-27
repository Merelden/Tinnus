 import axios, {AxiosError, AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse} from "axios";
 
 axios.defaults.withCredentials = true;
 axios.defaults.xsrfCookieName = "csrftoken";
 axios.defaults.xsrfHeaderName = 'X-CSRFToken';

function getApiBaseUrl(): string {
    const explicit = typeof window !== 'undefined' ? (window as any).NEXT_PUBLIC_API_BASE_URL || process.env.NEXT_PUBLIC_API_BASE_URL : process.env.NEXT_PUBLIC_API_BASE_URL;
    if (explicit) return explicit as string;
    const host = typeof window !== 'undefined' ? window.location.hostname : '127.0.0.1:8000';
    return `https://${host}/api`;
}

const axiosInstance = axios.create({
    baseURL: getApiBaseUrl(),
    withCredentials: true,
});

let inMemoryCsrfToken: string | null = null;

function getCookie(name: string): string | null {
    const matches = typeof document !== 'undefined' ? document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')) : null;
    return matches ? decodeURIComponent(matches[1]) : null;
}


 axiosInstance.interceptors.request.use((config) => {
     const method = (config.method || 'get').toLowerCase();
     const needsCsrf = ['post', 'put', 'patch', 'delete'].includes(method);

     if (needsCsrf) {
         const token = inMemoryCsrfToken || getCookie('csrftoken');
         if (token) {
             if (!config.headers) config.headers = {} as AxiosRequestHeaders;
             (config.headers as AxiosRequestHeaders)['X-CSRFToken'] = token;
         }
     }

     return config;
 });


axiosInstance.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
        const originalConfig = error.config as (import('axios').AxiosRequestConfig & { _retry?: boolean });
        if (error.response && error.response.status === 403 && !originalConfig?._retry) {
            try {
                originalConfig._retry = true;
                const res = await axiosInstance.get('/csrf/');
                inMemoryCsrfToken = getCookie('csrftoken') || (res as any)?.data?.csrftoken || null;
                return await axiosInstance.request(originalConfig);
            } catch (csrfError) {
                return Promise.reject(csrfError);
            }
        }
        return Promise.reject(error);
    }
);

export class NetworkService {
    // Токены
    static async csrf(): Promise<AxiosResponse> {
        try {
            const res = await axiosInstance.get('/csrf/');
            inMemoryCsrfToken = getCookie('csrftoken') || (res as any)?.data?.csrftoken || null;
            return res;
        } catch (error: any) {
            return error.response;
        }
    }
 
    // Авторизация
    static async register(data: object): Promise<AxiosResponse> {
        try {
            return await axiosInstance.post('/register/', data);
        } catch (error: any) {
            return error.response;
        }
    }
    static async login(data: object): Promise<AxiosResponse> {
        try {
            return await axiosInstance.post('/login/', data);
        } catch (error: any) {
            return error.response;
        }
    }
    static async isAuth(): Promise<AxiosResponse> {
        try {
            return await axiosInstance.get('/auth/status/');
        } catch (error: any) {
            return error.response;
        }
    }
    //Авторизация через соц сети
    static async authVk(data: Object): Promise<AxiosResponse> {
        try {
            return await axiosInstance.post('/auth/vk/', data);
        } catch (error: any) {
            return error.response;
        }
    }
    static async completeProfile(data: object): Promise<AxiosResponse> {
        try {
            return await axiosInstance.post('/auth/complete-profile/', data);
        } catch (error: any) {
            return error.response;
        }
    }
 
    static async streak(): Promise<AxiosResponse> {
        try {
            return await axiosInstance.get('/streak/');
        } catch (error: any) {
            return error.response;
        }
    }
    static async feedback(data: object): Promise<AxiosResponse> {
        try {
            return await axiosInstance.post('/feedback/submit/', data);
        } catch (error: any) {
            return error.response;
        }
    }
 
    // Тесты
    static async questions(): Promise<AxiosResponse> {
        try {
            return await axiosInstance.get('/questions/');
        } catch (error: any) {
            return error.response;
        }
    }
    static async answers(data: object): Promise<AxiosResponse> {
        try {
            return await axiosInstance.post('/tests/submit/', data);
        } catch (error: any) {
            return error.response;
        }
    }

    // Видео
    static async calming(data: object): Promise<AxiosResponse> {
        try {
            return await axiosInstance.post('/calming/', data);
        } catch (error: any) {
            return error.response;
        }
    }
}

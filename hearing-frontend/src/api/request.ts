 import axios, { AxiosResponse } from "axios";

 axios.defaults.withCredentials = true;

export class NetworkService {
    static createAxiosInstance() {
        return axios.create({
            baseURL: `http://127.0.0.1:8000/api`,
        });
    }

    static async register(data: object): Promise<AxiosResponse> {
        try {
            const axiosInstance = this.createAxiosInstance();
            return await axiosInstance.post('/register/', data);
        } catch (error: any) {
            return error.response;
        }
    }
    static async login(data: object): Promise<AxiosResponse> {
        try {
            const axiosInstance = this.createAxiosInstance();
            return await axiosInstance.post('/login/', data);
        } catch (error: any) {
            return error.response;
        }
    }
    static async questions(): Promise<AxiosResponse> {
        try {
            const axiosInstance = this.createAxiosInstance();
            return await axiosInstance.get('/questions/');
        } catch (error: any) {
            return error.response;
        }
    }
}
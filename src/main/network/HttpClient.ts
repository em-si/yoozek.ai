import axios, { AxiosHeaders } from 'axios';

export class HttpClient {
    baseUrl: string;
    headers: AxiosHeaders = new AxiosHeaders();

    constructor(baseUrl: string, headers: Map<string, string> = new Map()) {
        this.baseUrl = baseUrl;
        headers.forEach((value, key) => {
            this.headers.set(key, value);
        });
    }

    async get(endpoint: string) {
        try {
            const response = await axios.get(this.baseUrl + endpoint, {
                headers: this.headers
            });
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                console.error("Api error: ", error.response.data);
            } else {
                console.error("Api error: general");
            }
        }
    }

    async post(endpoint: string, data: any) {
        try {
            const response = await axios.post(this.baseUrl + endpoint, data, {
                headers: this.headers
            });
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                console.error("Api error: ", error.response.data);
            } else {
                console.error("Api error: general: ", error);
            }
        }
    }
}
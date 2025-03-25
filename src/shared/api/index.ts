import axios from "axios";
import {API_BASE_URL, AUTH_HEADER, AUTH_TOKEN_KEY} from "@/shared/config";

export const api = axios.create({
    baseURL: API_BASE_URL,
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);

    if (token) {
        config.headers[AUTH_HEADER] = `Bearer ${token}`;
    }

    return config;
});

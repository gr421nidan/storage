import axios from "axios";
import {API_BASE_URL, CONTENT_TYPE_JSON} from "@/shared/config";


export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": CONTENT_TYPE_JSON,
    },
});
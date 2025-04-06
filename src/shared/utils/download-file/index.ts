import axios from "axios";
import {BUCKET_BASE_URL} from "@/shared/config";

const downloadFile = async (filePath: string, fileName: string) => {
    const response = await axios.get(`${BUCKET_BASE_URL}${filePath}`, {
        responseType: "blob",
    });
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

};
export default downloadFile;

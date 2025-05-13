import {BUCKET_BASE_URL} from "@/shared/config";

const download = (path: string, title: string) => {
    const url = `${BUCKET_BASE_URL}${path}`;
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", title);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
export default download;

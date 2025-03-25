const KB = 1024;
const convertBytesToGB = (bytes: number): number => {
    return bytes / (KB * KB * KB);
};
export default convertBytesToGB;
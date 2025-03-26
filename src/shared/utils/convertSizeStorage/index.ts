const KB = 1024;
const convertBytesToGB = (bytes: number): number => {
    const GB = bytes / (KB * KB * KB);
    return GB % 1 === 0 ? GB : parseFloat(GB.toFixed(2));
};
export default convertBytesToGB;
const KB = 1024;
const formatFileSize = (size: number): string => {
    if (size === 0) return "0 Б";
    if (size < KB) return `${size} Б`;
    if (size < KB * KB) return `${(size / KB).toFixed(1)} КБ`;
    if (size < KB * KB * KB) return `${(size / KB / KB).toFixed(1)} МБ`;
    return `${(size / KB / KB / KB).toFixed(1)} ГБ`;
};
export { formatFileSize };
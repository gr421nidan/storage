const formatedDate = (isoString: string): string => {
    return new Date(isoString).toLocaleDateString("ru-RU", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });
};
export default formatedDate;
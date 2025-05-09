import { enqueueSnackbar } from "notistack";

type AccessType = "file" | "folder";

const copyLink = (id: string, type: AccessType) => {
    const path = type === "file" ? "file" : "folder";
    const link = `${window.location.origin}/access/${path}/${id}`;

    navigator.clipboard.writeText(link)
        .then(() => {
            enqueueSnackbar("Ссылка скопирована в буфер обмена", { variant: "successSnackbar" });
        })
        .catch(() => {
            enqueueSnackbar("Не удалось скопировать ссылку", { variant: "errorSnackbar" });
        });
};

export default copyLink;
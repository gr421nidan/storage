import { enqueueSnackbar } from "notistack";

type IAccessType = "file" | "folder";

const copyLink = (id: string, type: IAccessType) => {
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
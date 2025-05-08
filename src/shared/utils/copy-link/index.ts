import {enqueueSnackbar} from "notistack";

const copyPublicLink  = (fileId: string) => {
    const publicLink = `${window.location.origin}/access/${fileId}`;
    navigator.clipboard.writeText(publicLink)
        .then(() => {
            enqueueSnackbar("Ссылка скопирована в буфер обмена", {variant: "successSnackbar"});
        })
        .catch(() => {
            enqueueSnackbar("Не удалось скопировать ссылку", {variant: "errorSnackbar"});
        });
};
export default copyPublicLink ;
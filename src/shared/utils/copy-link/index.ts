import {enqueueSnackbar} from "notistack";

const copyLink  = (id: string) => {
    const link = `${window.location.origin}/access/${id}`;
    navigator.clipboard.writeText(link)
        .then(() => {
            enqueueSnackbar("Ссылка скопирована в буфер обмена", {variant: "successSnackbar"});
        })
        .catch(() => {
            enqueueSnackbar("Не удалось скопировать ссылку", {variant: "errorSnackbar"});
        });
};
export default copyLink ;
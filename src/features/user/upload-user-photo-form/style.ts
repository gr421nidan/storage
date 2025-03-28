const height13 = "h-13";
const flexCenter = "flex items-center justify-center";

const fileInputContainerStyle = `w-[296px] h-13 ${flexCenter} justify-between border-2 border-purple dark:bg-white/17 dark:border-purple-light rounded-[20px] px-4`;
const fileNameStyle = "text-xl dark:text-white overflow-hidden whitespace-nowrap text-ellipsis";
const errorMessageStyle = "text-red-500 text-center";
const buttonsContainerStyle = "mt-[40px] flex justify-center gap-[104px] w-full";
const cancelButtonStyle = `w-[206px] ${height13}`;
const saveButtonStyle = `w-[274px]  ${height13}`;
const labelButtonStyle = `w-[275px] ${height13} flex items-center justify-center`;
const formContainerStyle = "flex flex-col gap-6";
const formWrapperStyle = `${flexCenter} gap-4`;
export {
    formWrapperStyle,
    fileNameStyle,
    formContainerStyle,
    saveButtonStyle,
    fileInputContainerStyle,
    cancelButtonStyle,
    labelButtonStyle,
    buttonsContainerStyle,
    errorMessageStyle
}
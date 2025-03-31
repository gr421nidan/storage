const containerStyles = "flex gap-2 items-center";

const buttonWrapperStyles = (isActive: boolean) =>
    `flex items-center justify-center ${
        isActive ? "w-[61px] h-[58px] bg-purple-gr rounded-[15px] border-2 border-purple-light" : ""
    }`;

const buttonIconStyles = (isActive: boolean, size: string) =>
    `${size} ${
        isActive ? "dark:text-white text-purple" : "text-purple-light dark:text-purple"
    }`;
export { containerStyles, buttonWrapperStyles, buttonIconStyles };
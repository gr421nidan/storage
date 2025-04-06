const styles = {
    wrapper:
        "flex gap-2 items-center",
    buttonWrapper: (isActive: boolean) =>
        `flex items-center justify-center ${
            isActive ? "w-[61px] h-[58px] bg-purple-gr rounded-[15px] border-2 border-purple-light" : ""
        }`,
    buttonIcon: (isActive: boolean, size: string) =>
        `${size} ${
            isActive ? "dark:text-white text-purple" : "text-purple-light dark:text-purple"
        }`,
};

export default styles;

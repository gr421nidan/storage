const styles = {
    container: "min-h-[700px] w-[756px] flex flex-col rounded-[15px] border-2 border-purple-light dark:border-purple shadow-purple-custom",
    content: "flex-1",

    navWrapper: "px-[42px] pb-[20px] grid grid-cols-3 items-center",

    navButton: "w-[52px] h-[52px] rounded-full flex items-center justify-center bg-purple dark:bg-purple-light",
    icon: "text-white dark:text-black w-[30px] h-[25px]",

    paginationWrapper: "flex justify-center gap-2",
    paginationBase: "w-8 h-8 flex items-center justify-center text-sm font-medium rounded-full cursor-pointer",
    paginationActive: "border border-purple dark:border-purple-light dark:text-white",
    paginationInactive: "text-dark-gray dark:text-white-secondary",

    navLeft: "flex justify-start",
    navRight: "flex justify-end",
    connectStepTwoWrapper: "px-[42px] pt-[42px]",
    connectSteps: "flex flex-col gap-3",
    connectStepRow: "flex items-start gap-2",
    connectStepNumber: "font-semibold text-xl text-right w-[28px] shrink-0 dark:text-white",
    connectStepText: "font-semibold text-xl dark:text-white leading-relaxed",
    connectStepOneWrapper: "pt-[42px] flex flex-col gap-[40px] px-[22px] items-center",
    connectDesc: "font-semibold dark:text-white-secondary text-dark-gray text-center leading-relaxed",
    connectItemWrapper: "flex flex-col gap-2 w-full"
};

export default styles;

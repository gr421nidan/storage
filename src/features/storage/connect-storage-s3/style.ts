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
};

export default styles;

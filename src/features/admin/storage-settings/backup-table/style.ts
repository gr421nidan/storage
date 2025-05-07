const container = 'px-4 pb-6 flex flex-col gap-6 w-[1279px]';

const title = 'text-xl dark:text-white';

const tableWrapper = `
    rounded-[15px] 
    border-2 border-purple-light 
    bg-gr-blocks dark:bg-gr-blocks-dark 
    p-6 
    flex flex-col gap-4
`;

const tableContent = 'max-h-[430px] overflow-y-auto pr-2 scrollbar';

const headerRow = `
w-[1200px]
    grid  grid-cols-[1.1fr_0.8fr_1.2fr_0.3fr]
    border-b-4 border-purple
    pb-3
`;

const dataRow = `
    grid
    grid-cols-[1.1fr_0.8fr_1.3fr_0.2fr]
    gap-4 
    items-center 
    my-2 
    rounded-[15px] 
    px-5 py-3 
    bg-[#AEA1C9]/70 dark:bg-[#624699]/50 
`;

const cellHeader = 'font-semibold text-xl text-left dark:text-white';

const cell = 'font-semibold text-left dark:text-white';
export default {
    container,
    title,
    tableWrapper,
    tableContent,
    headerRow,
    cellHeader,
    dataRow,
    cell,
};

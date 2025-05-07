const container = 'px-6 pb-6 flex flex-col gap-6';

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
    grid grid-cols-4 
    gap-55 
    border-b-2 border-purple-light dark:border-purple-dark 
    pb-3
`;

const dataRow = `
    grid grid-cols-4 
    gap-4 
    items-center 
    my-2 
    rounded-[15px] 
    px-5 py-3 
    bg-[#AEA1C9]/70 dark:bg-[#624699]/50 
    hover:custom-shadow
`;

const cellHeader = 'text-gray-800 dark:text-gray-300 text-base text-left';

const cell = 'text-gray-900 dark:text-white text-left';

const cellActions = 'flex justify-end space-x-2 text-gray-900 dark:text-white';

export default {
    container,
    title,
    tableWrapper,
    tableContent,
    headerRow,
    cellHeader,
    dataRow,
    cell,
    cellActions,
};

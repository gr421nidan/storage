const styles = {
    header: 'flex justify-between items-center',

    headerActions: 'flex gap-2',
    popupWrapper: 'relative',

    pageWrapper: 'dark:text-white w-full max-w-[1400px] mx-auto flex flex-col gap-5 pb-6',

    topControls: 'flex items-center justify-between',

    searchInput: 'w-[1036px] h-[54px]',

    filterButton: 'h-[54px] w-[248px]',

    userInfo: 'flex items-center gap-4',
    avatar: 'w-[60px] h-[60px] rounded-full object-cover',
    userName: 'text-xl',

    logsHeader:
        'grid grid-cols-[2.7fr_0.5fr_0.4fr] justify-between text-right mt-2 text-xl px-10 w-[1198px]',
    logsHeaderItem: 'text-left',

    logsContainer: 'flex flex-col gap-4 max-h-[530px] overflow-y-auto scrollbar w-[1280px]',

    emptyState: 'text-lg',
};

export default styles;

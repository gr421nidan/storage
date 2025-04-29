import {ReactNode} from 'react';
import PageHeader from "@/shared/components/page-header";

const StorageSettingsPage = (): ReactNode => {
    return (
        <>
            <PageHeader>
                <div className="flex justify-between items-start">
                    <h2 className="leading-none">Настройки хранилища</h2>
                    <div className="flex">
                        <div className="w-[243px] text-xl border-1 rounded-t-[30px] h-[63px] text-center py-[18px] border-purple-light dark:text-white">Настройки хранилища</div>
                        <div className="w-[243px] text-xl border-1 rounded-t-[30px] h-[63px] text-center py-[18px] border-purple-light dark:text-white">Резерное копирование</div>
                    </div>
                </div>
            </PageHeader>
        </>
    );
};

export default StorageSettingsPage;

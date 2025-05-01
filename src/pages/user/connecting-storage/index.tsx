import {ReactNode} from 'react';
import Storage from "@/assets/storage-img/connect-storage-light.png";
import StorageDark from "@/assets/storage-img/connect-storage-dark.png";
import ImgThemeSwitcher from "@/shared/components/img-theme-switcher";
import ConnectStorageSteps from "@/features/user/connect-storage";

const ConnectingStoragePage = (): ReactNode => {
    return (
        <div className="w-[1621px] h-[810px] bg-purple-gr rounded-[15px] border-3 border-purple-light px-[43px] pt-[67px]">
            <div className="flex items-center justify-between">
                <ImgThemeSwitcher
                    light={Storage}
                    dark={StorageDark}
                    alt="Подключение s3"
                />
                <ConnectStorageSteps/>
            </div>
        </div>
    );
};

export default ConnectingStoragePage;

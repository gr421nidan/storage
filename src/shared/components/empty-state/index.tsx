import {ReactNode} from "react";
import ImgThemeSwitcher from "@/shared/components/img-theme-switcher";
import emptyTrash from "@/assets/img-empty/empty_trash.png";
import emptyTrashDark from "@/assets/img-empty/empty_trash_dark.png";
import notFound from "@/assets/img-empty/not_found.png";
import notFoundDark from "@/assets/img-empty/not_found_dark.png";

interface IEmptyStateProps {
    isEmpty: boolean;
    emptyImage?: { light: string; dark: string };
    emptyText: string;
    content: ReactNode;
}

const EmptyState: React.FC<IEmptyStateProps> = ({
                                                    isEmpty,
                                                    emptyImage,
                                                    emptyText,
                                                    content,
                                                }) => {
    const defaultImages = {
        trash: {light: emptyTrash, dark: emptyTrashDark},
        notFound: {light: notFound, dark: notFoundDark},
    };
    const imageToUse = emptyImage || defaultImages.notFound;

    return (
        <div className="relative min-h-60 max-h-[560px] overflow-y-auto scrollbar">
            {isEmpty ? (
                <div className="flex flex-col items-center justify-center mt-[100px] h-full">
                    <ImgThemeSwitcher
                        light={imageToUse.light}
                        dark={imageToUse.dark}
                        alt={emptyText}
                        className="w-[380px] h-[180px]"
                    />
                    <span className="text-[32px] mt-5">{emptyText}</span>
                </div>
            ) : (
                <>{content}</>
            )}
        </div>
    );
};

export default EmptyState;

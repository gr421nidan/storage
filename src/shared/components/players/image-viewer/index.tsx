import React from "react";
import ButtonIcon from "@/shared/components/buttons/button-icon";

interface IImagePlayerProps {
    fileUrl: string;
    onClose: () => void;
    fileTitle: string;
}

const ImagePlayer: React.FC<IImagePlayerProps> = ({ fileUrl, onClose, fileTitle }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-opacity-30 backdrop-saturate-150 overflow-auto">
            <div className="bg-white dark:bg-dark-theme rounded-[20px] p-6 shadow-lg relative">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="truncate max-w-[80vw]">{fileTitle}</h3>
                    <ButtonIcon
                        icon="si:close-circle-line"
                        onClick={onClose}
                        className="h-10 w-10"
                    />
                </div>
                <div className="border-t-3 border-purple my-4" />
                <img
                    src={fileUrl}
                    alt="image preview"
                    className="max-w-[90vw] max-h-[75vh] object-contain mx-auto rounded-lg shadow-md"
                />
            </div>
        </div>
    );
};

export default ImagePlayer;

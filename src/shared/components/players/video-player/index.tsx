import React from "react";
import ReactPlayer from "react-player";
import ButtonIcon from "@/shared/components/buttons/button-icon";

interface IVideoPlayerProps {
    fileUrl: string;
    onClose: () => void;
    fileTitle: string;
}

const VideoPlayer: React.FC<IVideoPlayerProps> = ({ fileUrl, onClose, fileTitle }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-opacity-30 backdrop-saturate-150">
            <div className="bg-white dark:bg-dark-theme rounded-[20px] p-6 shadow-lg relative max-w-[90vw]">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="truncate max-w-[15vw]" title={fileTitle}>{fileTitle}</h3>
                    <ButtonIcon
                        icon="si:close-circle-line"
                        onClick={onClose}
                        className="h-10 w-10"
                    />
                </div>
                <div className="border-t-3 border-purple my-4" />
                <div className="w-fit h-[80vh]">
                    <ReactPlayer
                        url={fileUrl}
                        controls
                        width="100%"
                        height="100%"
                        className="rounded-lg shadow-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default VideoPlayer;

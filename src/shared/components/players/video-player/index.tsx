import React from "react";
import ReactPlayer from "react-player";
import FilePlayerModal from "@/shared/components/players/modal-player";

interface IVideoPlayerProps {
    fileUrl: string;
    onClose: () => void;
    fileTitle: string;
}

const VideoPlayer: React.FC<IVideoPlayerProps> = ({ fileUrl, onClose, fileTitle }) => {
    return (
        <FilePlayerModal title={fileTitle} onClose={onClose} className="max-w-[90vw]">
            <div className="w-fit h-[80vh]">
                <ReactPlayer
                    url={fileUrl}
                    controls
                    width="100%"
                    height="100%"
                    className="rounded-lg shadow-md"
                />
            </div>
        </FilePlayerModal>
    );
};

export default VideoPlayer;

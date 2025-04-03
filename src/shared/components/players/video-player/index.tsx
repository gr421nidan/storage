import React from "react";
import ReactPlayer from "react-player";

interface IVideoPlayerProps {
    fileUrl: string;
}

const VideoPlayer: React.FC<IVideoPlayerProps> = ({ fileUrl }) => {
    return (
        <div className="video-player w-full h-fit">
            <ReactPlayer
                url={fileUrl}
                controls={true}
                width="100%"
            />
        </div>
    );
};

export default VideoPlayer;

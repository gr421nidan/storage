import React from "react";
import ReactPlayer from "react-player";

interface IVideoPlayerProps {
    fileUrl: string;
}

const VideoPlayer: React.FC<IVideoPlayerProps> = ({ fileUrl }) => {
    return (
        <div className="w-full h-fit">
            <ReactPlayer url={fileUrl} controls width="100%"  className="rounded-lg shadow-md" />
        </div>
    );
};

export default VideoPlayer;
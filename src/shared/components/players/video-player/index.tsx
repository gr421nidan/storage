import React from "react";
import ReactPlayer from "react-player";

interface IVideoPlayerProps {
    fileUrl: string;
}

const VideoPlayer: React.FC<IVideoPlayerProps> = ({ fileUrl }) => {
    return (
        <div className="w-full max-w-lg">
            <ReactPlayer url={fileUrl} controls width="100%" height="auto" className="rounded-lg shadow-md" />
        </div>
    );
};

export default VideoPlayer;
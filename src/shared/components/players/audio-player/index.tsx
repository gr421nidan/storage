import React from "react";

interface IAudioPlayerProps {
    fileUrl: string;
}

const AudioPlayer: React.FC<IAudioPlayerProps> = ({ fileUrl }) => {
    return (
        <div className="audio-player w-full h-auto">
            <audio controls className="w-full">
                <source src={fileUrl} />
                Ваш браузер не поддерживает аудио.
            </audio>
        </div>
    );
};

export default AudioPlayer;

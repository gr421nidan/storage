import React from "react";
import "react-h5-audio-player/lib/styles.css";
import H5AudioPlayer, { RHAP_UI } from "react-h5-audio-player";

interface IAudioPlayerProps {
    fileUrl: string;
}

const AudioPlayer: React.FC<IAudioPlayerProps> = ({ fileUrl }) => {
    return (
        <H5AudioPlayer
            src={fileUrl}
            showJumpControls={false}
            layout="stacked-reverse"
            customProgressBarSection={[RHAP_UI.PROGRESS_BAR]}
            customControlsSection={[
                RHAP_UI.MAIN_CONTROLS,
                RHAP_UI.VOLUME
            ]}
            className="w-full max-w-md rounded-lg shadow-md"
        />
    );
};

export default AudioPlayer;

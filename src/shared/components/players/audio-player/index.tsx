import React from "react";
import ReactAudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import ButtonIcon from "@/shared/components/buttons/button-icon";
import { Icon } from "@iconify/react";
import {customAudioPlayerStyles} from "@/shared/components/players/audio-player/style.ts";

interface IAudioPlayerProps {
    fileUrl: string;
    fileTitle: string;
    onClose: () => void;
}

const AudioPlayer: React.FC<IAudioPlayerProps> = ({ fileUrl, fileTitle, onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-opacity-30 backdrop-saturate-150">
            <div className="bg-white dark:bg-dark-theme rounded-[20px] p-6 shadow-lg w-full max-w-lg mx-auto relative">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="truncate" title={fileTitle}>
                        {fileTitle}
                    </h3>
                    <ButtonIcon
                        icon="si:close-circle-line"
                        onClick={onClose}
                        className="h-10 w-10"
                    />
                </div>
                <div className="border-t-3 border-purple my-4" />
                <ReactAudioPlayer
                    src={fileUrl}
                    autoPlay={false}
                    className="w-full bg-transparent text-purple"
                    style={customAudioPlayerStyles.container}
                    customIcons={{
                        play: <Icon icon="heroicons-solid:play" className="text-purple" width="40" />,
                        pause: <Icon icon="heroicons-solid:pause" className="text-purple" width="40" />,
                        volume: <Icon icon="ic:baseline-volume-up" className="text-purple" width="24" />,
                        volumeMute: <Icon icon="ic:baseline-volume-off" className="text-purple" width="24" />,
                        rewind: <Icon icon="iconoir:rewind-solid" className="text-purple" width="30" />,
                        forward: <Icon icon="iconoir:forward-solid" className="text-purple" width="30" />,
                        loop: <Icon icon="tabler:repeat" className="text-purple" width="25" />,
                        loopOff: <Icon icon="tabler:repeat-off" className="text-purple" width="25" />,
                    }}
                />
            </div>
        </div>
    );
};

export default AudioPlayer;

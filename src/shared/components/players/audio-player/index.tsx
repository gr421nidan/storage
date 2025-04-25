import React from "react";
import ReactAudioPlayer from "react-h5-audio-player";
import { Icon } from "@iconify/react";
import FilePlayerModal from "@/shared/components/players/modal-player";
import ImgThemeSwitcher from "@/shared/components/img-theme-switcher";
import PlayerLight from "@/assets/audio-img/audio_player_light.png";
import PlayerDark from "@/assets/audio-img/audio_player_dark.png";
import 'react-h5-audio-player/lib/styles.css';
interface IAudioPlayerProps {
    fileUrl: string;
    fileTitle: string;
    onClose: () => void;
}

const AudioPlayer: React.FC<IAudioPlayerProps> = ({ fileUrl, fileTitle, onClose }) => {
    return (
        <FilePlayerModal title={fileTitle} onClose={onClose} className="w-fit mx-auto">
            <div className="w-[885px] h-[548px] bg-gr-blocks rounded-[15px] flex flex-col items-center gap-8 pt-16 py-6">
                <ImgThemeSwitcher
                    light={PlayerLight}
                    dark={PlayerDark}
                    alt="Картинка аудио"
                />
                <ReactAudioPlayer
                    src={fileUrl}
                    autoPlay={false}
                    className="w-full bg-transparent text-purple shadow-none"
                    customIcons={{
                        play: <Icon icon="heroicons-solid:play" className="text-purple dark:text-purple-light" width="40" />,
                        pause: <Icon icon="heroicons-solid:pause" className="text-purple dark:text-purple-light" width="40" />,
                        volume: <Icon icon="ic:round-volume-up" className="text-purple dark:text-purple-light" width="24" />,
                        volumeMute: <Icon icon="ic:round-volume-off" className="text-purple dark:text-purple-light" width="24" />,
                        rewind: <Icon icon="ic:round-skip-previous" className="text-purple dark:text-purple-light" width="30" />,
                        forward: <Icon icon="ic:round-skip-next" className="text-purple dark:text-purple-light" width="30" />,
                        loop: <Icon icon="tabler:repeat" className="text-purple dark:text-purple-light" width="25" />,
                        loopOff: <Icon icon="tabler:repeat-off" className="text-purple dark:text-purple-light" width="25" />,
                    }}
                />
            </div>
        </FilePlayerModal>
    );
};

export default AudioPlayer;

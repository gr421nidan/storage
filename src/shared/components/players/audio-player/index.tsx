import React, { useState, useRef, useEffect } from "react";
import audioIcon from "@/assets/audio-img/e169382c7d3ce936a1faa03b7a876c8f.jpg";
import ButtonIcon from "@/shared/components/buttons/button-icon";

interface IAudioPlayerProps {
    fileUrl: string;
}

const AudioPlayer: React.FC<IAudioPlayerProps> = ({ fileUrl }) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState<number | null>(null); // Добавляем состояние для длительности

    const togglePlay = () => {
        if (audioRef.current?.paused) {
            audioRef.current.play();
            setIsPlaying(true);
        } else {
            audioRef.current?.pause();
            setIsPlaying(false);
        }
    };

    const handleStop = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            setIsPlaying(false);
            setProgress(0);
        }
    };

    const updateProgress = () => {
        if (audioRef.current) {
            const current = audioRef.current.currentTime;
            const dur = audioRef.current.duration;

            setCurrentTime(current);
            if (dur) {
                setProgress((current / dur) * 100);
            }
        }
    };

    const handleLoadedMetadata = () => {
        if (audioRef.current) {
            setDuration(audioRef.current.duration); // Устанавливаем длительность, когда метаданные загружены
        }
    };

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);
        }

        return () => {
            if (audioRef.current) {
                audioRef.current.removeEventListener("loadedmetadata", handleLoadedMetadata);
            }
        };
    }, []);

    return (
        <div className="w-full max-w-md shadow-md flex flex-col items-center justify-between gap-4">
            <div className="flex flex-col items-center gap-4">
                <img
                    src={audioIcon}
                    alt={"Аудиофайл"}
                    className="h-80 w-80 rounded-lg object-cover"
                />
                <h3>Аудиофайл</h3>
            </div>

            <div className="flex flex-col items-center gap-2">
                <div className="w-full bg-white h-1 rounded-full">
                    <div
                        className="bg-purple h-1 rounded-full"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                {/* Время */}
                <div className="flex items-center gap-2">
                    <span>{new Date(currentTime * 1000).toISOString().substr(14, 5)}</span>
                    <span>/</span>
                    <span>{duration ? new Date(duration * 1000).toISOString().substr(14, 5) : "00:00"}</span>
                </div>
            </div>

            <div className="flex items-center gap-2">
                <ButtonIcon
                    onClick={togglePlay}
                    icon={isPlaying ? "heroicons-outline:pause" : "material-symbols-light:play-circle-rounded"}
                    className="h-12 w-12"
                />
                {/* Кнопка Stop */}
                <ButtonIcon
                    onClick={handleStop}
                    icon="ic:round-stop"
                    className="h-12 w-12"
                />
            </div>

            {/* Тег аудио */}
            <audio
                ref={audioRef}
                src={fileUrl}
                onTimeUpdate={updateProgress}
                onEnded={() => setIsPlaying(false)}
            />
        </div>
    );
};

export default AudioPlayer;

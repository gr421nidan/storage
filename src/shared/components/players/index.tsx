import React from "react";
import TextViewer from "@/shared/components/players/document-viewer";
import VideoPlayer from "@/shared/components/players/video-player";
import AudioPlayer from "@/shared/components/players/audio-player";
import ImageViewer from "@/shared/components/players/image-viewer";
import {EFileType} from "@/shared/emum/file-types";

interface IFileViewerProps {
    fileUrl: string;
    fileType: EFileType;
}

const FileViewer: React.FC<IFileViewerProps> = ({ fileUrl, fileType }) => {
    switch (fileType) {
        case EFileType.TXT:
        case EFileType.PDF:
        case EFileType.DOC:
        case EFileType.DOCX:
        case EFileType.ODT:
            return <TextViewer fileUrl={fileUrl} />;
        case EFileType.JPEG:
        case EFileType.JPG:
        case EFileType.PNG:
        case EFileType.GIF:
            return <ImageViewer fileUrl={fileUrl} />;
        case EFileType.MP4:
        case EFileType.AVI:
            return <VideoPlayer fileUrl={fileUrl} />;
        case EFileType.MP3:
        case EFileType.WAV:
        case EFileType.FLAC:
        case EFileType.AAC:
            return <AudioPlayer fileUrl={fileUrl} />;
        default:
            return <div>Тип файла не поддерживается.</div>;
    }
};

export default FileViewer;
import React from "react";
import TextViewer from "@/shared/components/players/text-viewer";
import VideoPlayer from "@/shared/components/players/video-player";
import AudioPlayer from "@/shared/components/players/audio-player";
import {EFileType} from "@/shared/enum/file-types";
import ImagePlayer from "@/shared/components/players/image-viewer";
import DocViewer from "@/shared/components/players/doc-viewer";
import PdfViewer from "@/shared/components/players/pdf-viewer";

interface IFileViewerProps {
    fileType: EFileType;
    fileUrl: string;
}

const FileViewer: React.FC<IFileViewerProps> = ({ fileType, fileUrl }) => {
    switch (fileType) {
        case EFileType.JPEG:
        case EFileType.JPG:
        case EFileType.PNG:
            return <ImagePlayer fileUrl={fileUrl} />;

        case EFileType.MP3:
        case EFileType.WAV:
        case EFileType.FLAC:
        case EFileType.AAC:
            return <AudioPlayer fileUrl={fileUrl} />;

        case EFileType.MP4:
        case EFileType.AVI:
            return <VideoPlayer fileUrl={fileUrl} />;

        case EFileType.PDF:
            return <PdfViewer fileUrl={fileUrl} />;

        case EFileType.TXT:
            return <TextViewer fileUrl={fileUrl} />;

        case EFileType.DOC:
        case EFileType.DOCX:
        case EFileType.ODT:
            return <DocViewer fileUrl={fileUrl} />;

        default:
            return <p className="text-red-500">Формат не поддерживается</p>;
    }
};

export default FileViewer;

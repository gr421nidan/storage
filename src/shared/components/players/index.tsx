import React from "react";
import { EFileType } from "@/shared/enum/file-types";
import ImagePlayer from "@/shared/components/players/image-viewer";
import AudioPlayer from "@/shared/components/players/audio-player";
import VideoPlayer from "@/shared/components/players/video-player";
import TextViewer from "@/shared/components/players/text-viewer";
import DocViewer from "@/shared/components/players/doc-viewer";
import PdfViewer from "@/shared/components/players/pdf-viewer";

interface IFileViewerProps {
    fileType: EFileType;
    fileUrl: string;
    fileTitle: string;
    onClose: () => void;
}

const FileViewer: React.FC<IFileViewerProps> = ({ fileType, fileUrl, fileTitle, onClose }) => {
    switch (fileType) {
        case EFileType.JPEG:
        case EFileType.JPG:
        case EFileType.PNG:
            return <ImagePlayer fileUrl={fileUrl} fileTitle={fileTitle} onClose={onClose}/>;

        case EFileType.MP3:
        case EFileType.WAV:
        case EFileType.FLAC:
        case EFileType.AAC:
            return <AudioPlayer fileUrl={fileUrl} fileTitle={fileTitle} onClose={onClose}/>;

        case EFileType.MP4:
        case EFileType.AVI:
            return <VideoPlayer  fileUrl={fileUrl} fileTitle={fileTitle} onClose={onClose}/>;

        case EFileType.PDF:
            return <PdfViewer fileUrl={fileUrl} fileTitle={fileTitle} onClose={onClose}/>;

        case EFileType.TXT:
            return <TextViewer fileUrl={fileUrl} fileTitle={fileTitle} onClose={onClose}/>;

        case EFileType.DOC:
        case EFileType.DOCX:
        case EFileType.ODT:
            return <DocViewer fileUrl={fileUrl} fileTitle={fileTitle} onClose={onClose} />;

        default:
            return <p className="text-red-500">Формат не поддерживается</p>;
    }
};

export default FileViewer;

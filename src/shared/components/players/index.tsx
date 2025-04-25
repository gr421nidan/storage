import React, { useEffect } from "react";
import { EFileType } from "@/shared/enum/file-types";
import ImagePlayer from "@/shared/components/players/image-viewer";
import AudioPlayer from "@/shared/components/players/audio-player";
import VideoPlayer from "@/shared/components/players/video-player";
import TextViewer from "@/shared/components/players/text-viewer";
import DocViewer from "@/shared/components/players/doc-viewer";
import PdfViewer from "@/shared/components/players/pdf-viewer";
import { useSnackbar } from "notistack";

interface IFileViewerProps {
    fileType: EFileType;
    fileUrl: string;
    fileTitle: string;
    onClose: () => void;
}

const FileViewer: React.FC<IFileViewerProps> = ({ fileType, fileUrl, fileTitle, onClose }) => {
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        const supportedTypes = [
            EFileType.JPEG,
            EFileType.JPG,
            EFileType.PNG,
            EFileType.MP3,
            EFileType.WAV,
            EFileType.FLAC,
            EFileType.AAC,
            EFileType.MP4,
            EFileType.AVI,
            EFileType.PDF,
            EFileType.TXT,
            EFileType.DOC,
            EFileType.DOCX,
        ];

        if (!supportedTypes.includes(fileType)) {
            enqueueSnackbar("Формат файла пока не поддерживается", { variant: "errorSnackbar" });
        }
    }, [fileType, enqueueSnackbar]);

    switch (fileType) {
        case EFileType.JPEG:
        case EFileType.JPG:
        case EFileType.PNG:
            return <ImagePlayer fileUrl={fileUrl} fileTitle={fileTitle} onClose={onClose} />;

        case EFileType.MP3:
        case EFileType.WAV:
        case EFileType.FLAC:
        case EFileType.AAC:
            return <AudioPlayer fileUrl={fileUrl} fileTitle={fileTitle} onClose={onClose} />;

        case EFileType.MP4:
        case EFileType.AVI:
            return <VideoPlayer fileUrl={fileUrl} fileTitle={fileTitle} onClose={onClose} />;

        case EFileType.PDF:
            return <PdfViewer fileUrl={fileUrl} fileTitle={fileTitle} onClose={onClose} />;

        case EFileType.TXT:
            return <TextViewer fileUrl={fileUrl} fileTitle={fileTitle} onClose={onClose} />;

        case EFileType.DOC:
        case EFileType.DOCX:
            return <DocViewer fileUrl={fileUrl} fileTitle={fileTitle} onClose={onClose} />;

        default:
            return null;
    }
};

export default FileViewer;

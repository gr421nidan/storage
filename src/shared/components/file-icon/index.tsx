import React from "react";
import jpeg from "@/assets/file-icons/icon-jpeg.png";
import jpg from "@/assets/file-icons/icon-jpg.png";
import png from "@/assets/file-icons/icon-png.png";
import gif from "@/assets/file-icons/icon-gif.png";
import mp3 from "@/assets/file-icons/icon-mp3.png";
import wav from "@/assets/file-icons/icon-wav.png";
import flac from "@/assets/file-icons/icon-flac.png";
import aac from "@/assets/file-icons/icon-aac.png";
import mp4 from "@/assets/file-icons/icon-mp4.png";
import avi from "@/assets/file-icons/icon-avi.png";
import doc from "@/assets/file-icons/icon-doc.png";
import docx from "@/assets/file-icons/icon-docx.png";
import pdf from "@/assets/file-icons/icon-pdf.png";
import txt from "@/assets/file-icons/icon-txt.png";
import odt from "@/assets/file-icons/icon-odt.png";

const fileIcons: Record<string, string> = {
    "image/jpeg": jpeg,
    "image/jpg": jpg,
    "image/png": png,
    "image/gif": gif,
    "audio/mp3": mp3,
    "audio/wav": wav,
    "audio/flac": flac,
    "audio/aac": aac,
    "video/mp4": mp4,
    "video/avi": avi,
    "application/pdf": pdf,
    "application/msword": doc,
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": docx,
    "text/plain": txt,
    "application/vnd.oasis.opendocument.text": odt,
};

interface IFileIconProps {
    fileType: string;
    size?: number;
}

const FileIcon: React.FC<IFileIconProps> = ({ fileType, size = 30 }) => {
    const iconSrc = fileIcons[fileType];

    return <img src={iconSrc} alt={fileType} width={size} height={size} />;
};

export default FileIcon;

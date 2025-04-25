import React from "react";
import FilePlayerModal from "@/shared/components/players/modal-player";

interface IImagePlayerProps {
    fileUrl: string;
    onClose: () => void;
    fileTitle: string;
}

const ImagePlayer: React.FC<IImagePlayerProps> = ({ fileUrl, onClose, fileTitle }) => {
    return (
        <FilePlayerModal title={fileTitle} onClose={onClose} className="max-w-[90vw]">
            <img
                src={fileUrl}
                alt="image preview"
                className="max-w-[90vw] max-h-[75vh] object-contain mx-auto rounded-lg shadow-md"
            />
        </FilePlayerModal>
    );
};

export default ImagePlayer;

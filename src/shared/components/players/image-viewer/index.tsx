import React from "react";

interface IImageViewerProps {
    fileUrl: string;
}

const ImageViewer: React.FC<IImageViewerProps> = ({ fileUrl }) => {
    return (
        <div className="image-viewer w-auto h-fit">
            <img src={fileUrl} alt="File" className="w-auto h-fit object-contain" />
        </div>
    );
};

export default ImageViewer;
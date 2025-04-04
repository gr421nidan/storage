import React from "react";

interface IImagePlayerProps {
    fileUrl: string;
}

const ImagePlayer: React.FC<IImagePlayerProps> = ({ fileUrl }) => {
    return <img src={fileUrl} alt="image preview" className="w-full max-w-3xl max-h-[65vh] rounded-lg shadow-md" />;
};

export default ImagePlayer;
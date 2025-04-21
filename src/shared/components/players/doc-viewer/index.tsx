import React, { useState, useEffect } from "react";
import mammoth from "mammoth";
import ButtonIcon from "@/shared/components/buttons/button-icon";

interface IDocViewerProps {
    fileUrl: string;
    onClose: () => void;
    fileTitle: string;
}

const DocViewer: React.FC<IDocViewerProps> = ({ fileUrl, onClose, fileTitle }) => {
    const [content, setContent] = useState("");

    useEffect(() => {
        fetch(fileUrl)
            .then((res) => res.arrayBuffer())
            .then((buffer) =>
                mammoth.convertToHtml({ arrayBuffer: buffer }).then((result) => setContent(result.value))
            );
    }, [fileUrl]);
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-opacity-30 backdrop-saturate-150">
            <div className="bg-white dark:bg-dark-theme rounded-[20px] p-6 shadow-lg w-full max-w-3xl h-fit relative">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="truncate max-w-[80vw]">{fileTitle}</h3>
                    <ButtonIcon
                        icon="si:close-circle-line"
                        onClick={onClose}
                        className="h-10 w-10"
                    />
                </div>
                <div className="border-t-3 border-purple my-4" />
                <div
                    className="w-full max-w-3xl max-h-[80vh] p-4 border border-gray-300 rounded-lg shadow-md overflow-y-auto scrollbar"
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            </div>
        </div>
    );
};

export default DocViewer;

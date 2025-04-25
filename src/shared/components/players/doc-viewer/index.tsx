import React, { useState, useEffect } from "react";
import mammoth from "mammoth";
import FilePlayerModal from "@/shared/components/players/modal-player";

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
        <FilePlayerModal title={fileTitle} onClose={onClose} className="w-full max-w-3xl h-fit">
            <div
                className="w-full max-w-3xl max-h-[80vh] p-4 border border-gray-300 rounded-lg shadow-md overflow-y-auto scrollbar"
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </FilePlayerModal>
    );
};

export default DocViewer;

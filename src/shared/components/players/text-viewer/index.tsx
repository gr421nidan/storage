import React, { useState, useEffect } from "react";
import FilePlayerModal from "@/shared/components/players/modal-player";

interface ITextViewerProps {
    fileUrl: string;
    onClose: () => void;
    fileTitle: string;
}

const TextViewer: React.FC<ITextViewerProps> = ({ fileUrl, onClose, fileTitle }) => {
    const [text, setText] = useState<string>("");

    useEffect(() => {
        fetch(fileUrl)
            .then((res) => res.text())
            .then((data) => setText(data));
    }, [fileUrl]);

    return (
        <FilePlayerModal title={fileTitle} onClose={onClose}>
            <pre className="w-full max-h-[80vh] p-4 overflow-y-auto border border-gray rounded-lg shadow-md">
                {text}
            </pre>
        </FilePlayerModal>
    );
};

export default TextViewer;

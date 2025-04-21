import React, { useState, useEffect } from "react";
import ButtonIcon from "@/shared/components/buttons/button-icon";

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
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-opacity-30 backdrop-saturate-150">
            <div className="bg-white dark:bg-dark-theme rounded-[20px] p-6 shadow-lg w-full max-w-5xl mx-auto h-fit relative">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="truncate max-w-[80vw]">{fileTitle}</h3>
                    <ButtonIcon
                        icon="si:close-circle-line"
                        onClick={onClose}
                        className="h-10 w-10"
                    />
                </div>
                <div className="border-t-3 border-purple my-4" />
                <pre className="w-full max-h-[80vh] p-4 overflow-y-auto  border border-gray rounded-lg shadow-md">
                    {text}
                </pre>
            </div>
        </div>
    );
};

export default TextViewer;

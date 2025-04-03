import React, { useEffect, useState } from "react";

interface ITextViewerProps {
    fileUrl: string;
}

const TextViewer: React.FC<ITextViewerProps> = ({ fileUrl }) => {
    const [fileContent, setFileContent] = useState<string>("");

    useEffect(() => {
        const fetchTextFile = async () => {
            const response = await fetch(fileUrl);
            const text = await response.text();
            setFileContent(text);
        };

        fetchTextFile();
    }, [fileUrl]);

    return (
        <div className="text-viewer w-full h-full overflow-auto p-4">
            <pre className="whitespace-pre-wrap break-words">{fileContent}</pre>
        </div>
    );
};

export default TextViewer;

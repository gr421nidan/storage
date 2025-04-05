import React, { useEffect, useState } from "react";

interface ITextViewerProps {
    fileUrl: string;
}

const TextViewer: React.FC<ITextViewerProps> = ({ fileUrl }) => {
    const [text, setText] = useState("");

    useEffect(() => {
        fetch(fileUrl)
            .then((res) => res.text())
            .then((data) => setText(data));
    }, [fileUrl]);

    return (
        <pre className="w-full max-w-3xl max-h-[65vh] p-4 overflow-y-auto scrollbar bg-gray-100 border border-gray-300 rounded-lg shadow-md">
      {text}
    </pre>
    );
};

export default TextViewer;

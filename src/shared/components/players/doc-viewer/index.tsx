import React, { useEffect, useState } from "react";
import mammoth from "mammoth";

interface IDocViewerProps {
    fileUrl: string;
}

const DocViewer: React.FC<IDocViewerProps> = ({ fileUrl }) => {
    const [content, setContent] = useState("");

    useEffect(() => {
        fetch(fileUrl)
            .then((res) => res.arrayBuffer())
            .then((buffer) =>
                mammoth.convertToHtml({ arrayBuffer: buffer }).then((result) => setContent(result.value))
            );
    }, [fileUrl]);

    return (
        <div
            className="w-full max-w-3xl max-h-[65vh] p-4 bg-white border border-gray-300 rounded-lg shadow-md overflow-y-auto scrollbar"
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
};

export default DocViewer;

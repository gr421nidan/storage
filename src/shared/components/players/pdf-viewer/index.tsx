import React from "react";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

interface IPdfViewerProps {
    fileUrl: string;
}

const PdfViewer: React.FC<IPdfViewerProps> = ({ fileUrl }) => {
    return (
        <div className="w-full max-w-lg overflow-auto rounded-lg shadow-md">
            <Document file={fileUrl}>
                <Page pageNumber={1} />
            </Document>
        </div>
    );
};

export default PdfViewer;
